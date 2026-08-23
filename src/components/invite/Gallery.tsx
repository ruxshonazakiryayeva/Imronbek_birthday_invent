import { useRef } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { T, type Lang } from "@/lib/invite-content";

export function Gallery({
  lang,
  photos,
  childName,
}: {
  lang: Lang;
  photos: string[];
  childName: string;
}) {
  const t = T[lang];
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8 * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="mt-12">
      <h2 className="font-display flex items-center gap-2 text-2xl text-foreground">
        <Sparkles className="h-6 w-6 text-gold" />
        {t.gallery}
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">{t.gallerySub}</p>

      <div className="relative mt-5">
        <div
          ref={scrollerRef}
          className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 scroll-smooth scrollbar-hide"
        >
          {photos.map((src, i) => (
            <div
              key={typeof src === "string" ? src : i}
              className="glass aspect-square w-[70%] shrink-0 snap-center overflow-hidden rounded-3xl p-1.5 transition-transform sm:w-[45%]"
            >
              <img
                src={src}
                alt={`${childName} — ${i + 1}`}
                loading="lazy"
                width={800}
                height={800}
                className="h-full w-full rounded-[1.25rem] object-cover"
              />
            </div>
          ))}
        </div>

        {photos.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => scrollByAmount(-1)}
              aria-label="previous"
              className="glass absolute left-1 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full shadow-soft transition-transform hover:scale-110 sm:flex"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <button
              type="button"
              onClick={() => scrollByAmount(1)}
              aria-label="next"
              className="glass absolute right-1 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full shadow-soft transition-transform hover:scale-110 sm:flex"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </>
        )}
      </div>
    </section>
  );
}
