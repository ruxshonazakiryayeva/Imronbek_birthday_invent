import { useState } from "react";
import { useParams } from "react-router-dom";
import { CalendarHeart, Clock, MapPin, Rocket } from "lucide-react";
import { toast } from "sonner";
import { Countdown } from "@/components/invite/Countdown";
import { Gallery } from "@/components/invite/Gallery";
import { GuestList } from "@/components/invite/GuestList";
import { MusicPlayer } from "@/components/invite/MusicPlayer";
import { Particles } from "@/components/invite/Particles";
import { RsvpForm } from "@/components/invite/RsvpForm";
import { Schedule } from "@/components/invite/Schedule";
import { LANGS, PARTY, T, type Lang } from "@/lib/invite-content";
import { formatDateText, formatTimeText } from "@/lib/format-date";
import { useInviteSettings } from "@/hooks/useInviteSettings";
import heroBg from "@/assets/hero-bg.jpg";
import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";

const STATIC_PHOTOS = [photo1, photo2, photo3];

export default function InviteSlug() {
  const { slug = PARTY.invitationSlug } = useParams();
  const [lang, setLang] = useState<Lang>("uz");
  const t = T[lang];
  const { settings, loading } = useInviteSettings(slug);

  const childName = loading ? PARTY.name : settings.child_name;
  const eventDate = loading ? PARTY.date : new Date(settings.event_date);
  const mapUrl = loading ? PARTY.mapUrl : settings.map_url;
  const youtubeId = loading ? PARTY.youtubeId : settings.youtube_id ?? "";
  const locationText = loading || !settings.location_text ? t.placeText : settings.location_text;
  const photos =
    !loading && settings.gallery_urls.length > 0 ? settings.gallery_urls : STATIC_PHOTOS;
  const scheduleTimes = loading ? undefined : settings.schedule_times;
  const age = loading ? PARTY.age : settings.age;
  const dateText = formatDateText(eventDate, lang);
  const timeText = formatTimeText(eventDate, lang);

  const heroTitle = t.heroTitle.replace("{name}", childName).replace("{age}", String(age));

  const openMap = () => {
    if (!mapUrl) {
      toast.info(t.mapSoon);
      return;
    }
    window.open(mapUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <img
        src={heroBg}
        alt=""
        aria-hidden
        width={1920}
        height={1088}
        className="fixed inset-0 h-full w-full object-cover opacity-55"
      />
      <div className="fixed inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <Particles />

      <GuestList lang={lang} slug={slug} />
      <MusicPlayer lang={lang} youtubeId={youtubeId} />

      {/* language switch */}
      <div className="glass fixed left-4 top-4 z-30 flex gap-1 rounded-full p-1">
        {LANGS.map((l) => (
          <button
            key={l.code}
            type="button"
            onClick={() => setLang(l.code)}
            className={`rounded-full px-2.5 py-1 text-xs font-bold transition-colors ${
              lang === l.code
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>

      <main className="relative z-10 mx-auto max-w-2xl px-4 pb-28 pt-24">
        {/* Hero */}
        <section className="text-center">
          <Rocket className="animate-bob mx-auto h-12 w-12 text-gold" />
          <p className="mt-3 text-xs font-bold uppercase tracking-[0.35em] text-accent">
            {t.invitation}
          </p>
          <h1 className="font-display animate-sparkle mt-3 text-4xl leading-tight text-foreground sm:text-6xl">
            {heroTitle}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground">{t.heroSub}</p>
          <div className="mt-8">
            <Countdown lang={lang} date={eventDate} />
          </div>
        </section>

        {/* Date & place */}
        <section className="glass mt-12 rounded-3xl p-6 sm:p-8">
          <h2 className="font-display flex items-center gap-2 text-2xl text-foreground">
            <CalendarHeart className="h-6 w-6 text-primary" />
            {t.whenWhere}
          </h2>
          <p className="font-display mt-4 text-3xl text-foreground">{dateText}</p>
          <p className="text-lg text-accent">{timeText}</p>

          <div className="mt-6 flex items-start gap-3 rounded-2xl bg-secondary/60 p-4">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-bold text-foreground">{t.place}</p>
              <p className="text-sm text-muted-foreground">{locationText}</p>
            </div>
          </div>

          <button type="button" onClick={openMap} className="btn-magic mt-5 w-full">
            <MapPin className="h-4 w-4" />
            {t.mapBtn}
          </button>
        </section>

        {/* Schedule */}
        <section className="glass mt-12 rounded-3xl p-6 sm:p-8">
          <h2 className="font-display flex items-center gap-2 text-2xl text-foreground">
            <Clock className="h-6 w-6 text-primary" />
            {t.schedule}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">{t.scheduleSub}</p>
          <Schedule lang={lang} times={scheduleTimes} />
        </section>

        {/* Gallery */}
        <Gallery lang={lang} photos={photos as string[]} childName={childName} />

        {/* RSVP */}
        <section className="mt-12">
          <h2 className="font-display flex items-center gap-2 text-2xl text-foreground">
            <Rocket className="h-6 w-6 text-primary" />
            {t.rsvp}
          </h2>
          <p className="mb-5 mt-1 text-sm text-muted-foreground">{t.rsvpSub}</p>
          <RsvpForm lang={lang} slug={slug} />
        </section>

        <footer className="mt-14 text-center">
          <p className="font-display text-xl text-accent">{t.footer}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {childName} · {dateText}
          </p>
        </footer>
      </main>
    </div>
  );
}
