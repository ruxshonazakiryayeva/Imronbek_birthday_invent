# Imronbek's Birthday Invite 🚀

O'g'il bola tug'ilgan kuni uchun taklifnoma sahifasi (React + TS + Tailwind + Vite + Supabase).

Bu loyiha [oisha-4th-birthday-bash](https://github.com/ruxshonazakiryayeva/oisha-4th-birthday-bash) shablonidan ilhomlanib, o'g'il bolalar uchun moslashtirilgan (ko'k-oltin rang, raketa/sarguzasht mavzusi).

## Ma'lumotlar

- Bayram egasi: **Imronbek**, ism/yosh/sana `src/lib/invite-content.ts` faylida — `PARTY` obyekti
- Til: UZ / RU / EN almashtirish mumkin
- RSVP forma, mehmonlar ro'yxati (🔑 parol: `1317`, `PARTY.adminPin` da o'zgartiriladi)
- Har bir taklifnoma nusxasi `/edit` orqali yaratiladi va `/edit/:slug` da tahrirlanadi, `/invite/:slug` da ko'rinadi

## O'rnatish

```sh
npm install
cp .env.example .env
# .env faylida VITE_SUPABASE_URL va VITE_SUPABASE_ANON_KEY qiymatlarini kiriting
npm run dev
```

## Supabase sozlash

1. [supabase.com](https://supabase.com) da yangi loyiha oching
2. **SQL Editor** bo'limiga o'ting va `supabase/migrations/0001_init.sql` faylidagi kodni bajaring — bu `invitation_settings`, `invitation_rsvp` jadvallarini va `invitation-photos` storage bucket'ini yaratadi
3. **Project Settings → API** bo'limidan `Project URL` va `anon public` kalitini oling, `.env` fayliga yozing

## Deploy (Vercel/Netlify)

```sh
npm run build
```

`dist/` papkasini istalgan statik hosting'ga (Vercel, Netlify, Cloudflare Pages) joylashtiring. Environment Variables bo'limiga `VITE_SUPABASE_URL` va `VITE_SUPABASE_ANON_KEY`ni qo'shishni unutmang.

## Tuzilma

```
src/
  assets/            — fon rasmi (hero-bg.jpg) va galereya placeholder rasmlari
  components/invite/ — Countdown, RsvpForm, GuestList, MusicPlayer, Particles, Schedule
  hooks/              — useInviteSettings (Supabase'dan sozlamalarni o'qish)
  integrations/supabase/ — Supabase klient va tiplar
  lib/                — invite-content (UZ/RU/EN matnlar), format-date, music-presets
  routes/
    Home.tsx          — asosiy demo sahifa ("/")
    EditIndex.tsx      — yangi taklifnoma yaratish ("/edit")
    EditSlug.tsx        — tahrirlash formasi ("/edit/:slug")
    InviteSlug.tsx      — tahrirlangan taklifnomani ko'rsatish ("/invite/:slug")
supabase/migrations/  — SQL sxema
```

## Rasmlarni almashtirish

`src/assets/hero-bg.jpg` — fon rasmi (siz yuborgan qasr+sharlar surati). `photo-1.jpg`, `photo-2.jpg`, `photo-3.jpg` — galereya uchun placeholder, ularni Imronbekning haqiqiy suratlari bilan almashtiring, yoki `/edit` sahifasi orqali onlayn yuklang (Supabase Storage'ga saqlanadi).
