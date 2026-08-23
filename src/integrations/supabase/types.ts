export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      imronbek_invitation_settings: {
        Row: {
          slug: string;
          child_name: string;
          age: number;
          event_date: string;
          location_text: string;
          map_url: string | null;
          youtube_id: string | null;
          gallery_urls: string[];
          schedule_times: string[];
          created_at: string;
        };
        Insert: {
          slug: string;
          child_name?: string;
          age?: number;
          event_date?: string;
          location_text?: string;
          map_url?: string | null;
          youtube_id?: string | null;
          gallery_urls?: string[];
          schedule_times?: string[];
          created_at?: string;
        };
        Update: {
          slug?: string;
          child_name?: string;
          age?: number;
          event_date?: string;
          location_text?: string;
          map_url?: string | null;
          youtube_id?: string | null;
          gallery_urls?: string[];
          schedule_times?: string[];
          created_at?: string;
        };
        Relationships: [];
      };
      imronbek_invitation_rsvp: {
        Row: {
          id: string;
          created_at: string;
          invitation: string;
          name: string;
          attendance: string;
          guests: number;
          comment: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          invitation: string;
          name: string;
          attendance: string;
          guests?: number;
          comment?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          invitation?: string;
          name?: string;
          attendance?: string;
          guests?: number;
          comment?: string | null;
        };
        Relationships: [];
      };
    };
    Views: { [_ in never]: never };
    Functions: { [_ in never]: never };
    Enums: { [_ in never]: never };
    CompositeTypes: { [_ in never]: never };
  };
};
