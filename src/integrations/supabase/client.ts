import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

// O'zingizning Supabase loyihangizdan oling: Project Settings -> API
//   - Project URL              -> VITE_SUPABASE_URL
//   - anon / publishable key   -> VITE_SUPABASE_ANON_KEY
// Bu qiymatlarni lokalda .env fayliga, Vercel/Netlify'da esa
// Environment Variables bo'limiga qo'shing.
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error(
    "[Supabase] VITE_SUPABASE_URL yoki VITE_SUPABASE_ANON_KEY topilmadi. " +
      ".env fayliga yoki hosting Environment Variables'ga qo'shing.",
  );
}

export const supabase = createClient<Database>(
  SUPABASE_URL ?? "",
  SUPABASE_ANON_KEY ?? "",
);
