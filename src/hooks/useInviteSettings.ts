import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { PARTY } from "@/lib/invite-content";

export type InviteSettings = {
  slug: string;
  child_name: string;
  age: number;
  event_date: string; // ISO string
  location_text: string;
  map_url: string | null;
  youtube_id: string | null;
  gallery_urls: string[];
  schedule_times: string[];
};

const FALLBACK: InviteSettings = {
  slug: PARTY.invitationSlug,
  child_name: PARTY.name,
  age: PARTY.age,
  event_date: PARTY.date.toISOString(),
  location_text: "",
  map_url: PARTY.mapUrl,
  youtube_id: PARTY.youtubeId,
  gallery_urls: [],
  schedule_times: [],
};

export function useInviteSettings(slug: string = PARTY.invitationSlug) {
  const [settings, setSettings] = useState<InviteSettings>(FALLBACK);
  const [loading, setLoading] = useState(true);

  const reload = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("invitation_settings")
      .select("*")
      .eq("slug", slug)
      .maybeSingle();

    if (!error && data) {
      setSettings(data as unknown as InviteSettings);
    }
    setLoading(false);
  }, [slug]);

  useEffect(() => {
    reload();
  }, [reload]);

  return { settings, loading, reload };
}
