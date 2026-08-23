-- ============================================================
-- Imronbek tug'ilgan kuni taklifnomasi — Supabase sxemasi
-- Buni Supabase loyihangizda SQL Editor orqali bajaring
-- ============================================================

-- 1) Har bir taklifnoma nusxasi uchun sozlamalar jadvali
CREATE TABLE public.invitation_settings (
  slug TEXT PRIMARY KEY,
  child_name TEXT NOT NULL DEFAULT 'Imronbek',
  age INTEGER NOT NULL DEFAULT 5,
  event_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  location_text TEXT NOT NULL DEFAULT '',
  map_url TEXT,
  youtube_id TEXT,
  gallery_urls TEXT[] NOT NULL DEFAULT '{}',
  schedule_times TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE ON public.invitation_settings TO anon;
GRANT SELECT, INSERT, UPDATE ON public.invitation_settings TO authenticated;
GRANT ALL ON public.invitation_settings TO service_role;

ALTER TABLE public.invitation_settings ENABLE ROW LEVEL SECURITY;

-- Har kim o'qishi, o'zi yaratgan/tahrirlayotgan taklifnomani yozishi mumkin
-- (bu shablon "havola bilimiga asoslangan" tahrirlash modeli —
--  parol talab qilmaydi, lekin slug taxmin qilib bo'lmaydigan uzun bo'ladi)
CREATE POLICY "Anyone can view invitation settings" ON public.invitation_settings
  FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Anyone can create invitation settings" ON public.invitation_settings
  FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE POLICY "Anyone can update invitation settings" ON public.invitation_settings
  FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);

-- 2) RSVP (kelish-kelmasligini tasdiqlash) jadvali
CREATE TABLE public.invitation_rsvp (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  invitation TEXT NOT NULL,
  name TEXT NOT NULL,
  attendance TEXT NOT NULL DEFAULT 'yes',
  guests INTEGER NOT NULL DEFAULT 1,
  comment TEXT
);

GRANT SELECT, INSERT ON public.invitation_rsvp TO anon;
GRANT SELECT, INSERT ON public.invitation_rsvp TO authenticated;
GRANT ALL ON public.invitation_rsvp TO service_role;

ALTER TABLE public.invitation_rsvp ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an rsvp" ON public.invitation_rsvp
  FOR INSERT TO anon, authenticated
  WITH CHECK (
    char_length(name) BETWEEN 1 AND 100
    AND guests BETWEEN 0 AND 20
    AND attendance IN ('yes', 'no')
    AND (comment IS NULL OR char_length(comment) <= 1000)
  );

CREATE POLICY "Anyone can view rsvps" ON public.invitation_rsvp
  FOR SELECT TO anon, authenticated USING (true);

-- 3) Galereya rasmlari uchun Storage bucket
-- (Buni Supabase Dashboard -> Storage bo'limida ham yaratish mumkin)
INSERT INTO storage.buckets (id, name, public)
VALUES ('invitation-photos', 'invitation-photos', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Anyone can view invitation photos" ON storage.objects
  FOR SELECT TO anon, authenticated
  USING (bucket_id = 'invitation-photos');

CREATE POLICY "Anyone can upload invitation photos" ON storage.objects
  FOR INSERT TO anon, authenticated
  WITH CHECK (bucket_id = 'invitation-photos');

CREATE POLICY "Anyone can delete invitation photos" ON storage.objects
  FOR DELETE TO anon, authenticated
  USING (bucket_id = 'invitation-photos');
