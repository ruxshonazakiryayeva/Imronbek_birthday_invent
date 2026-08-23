import { useMemo } from "react";

type Bit = {
  left: number;
  size: number;
  delay: number;
  duration: number;
  drift: number;
  kind: "star" | "confetti" | "dot";
  opacity: number;
};

const KINDS: Bit["kind"][] = ["star", "confetti", "dot"];

export function Particles({ count = 34 }: { count?: number }) {
  const bits = useMemo<Bit[]>(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: (i * 97) % 100,
        size: 6 + ((i * 13) % 14),
        delay: -((i * 1.7) % 22),
        duration: 16 + ((i * 5) % 20),
        drift: ((i % 7) - 3) * 22,
        kind: KINDS[i % 3]!,
        opacity: 0.35 + (i % 5) * 0.12,
      })),
    [count],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {bits.map((b, i) => (
        <span
          key={i}
          className="particle absolute top-[-8vh]"
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
            opacity: b.opacity,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
            ["--drift" as string]: `${b.drift}px`,
          }}
        >
          {b.kind === "star" ? (
            <svg viewBox="0 0 24 24" className="h-full w-full text-gold" fill="currentColor">
              <path d="M12 0l2.8 8.4L24 12l-9.2 3.6L12 24l-2.8-8.4L0 12l9.2-3.6z" />
            </svg>
          ) : b.kind === "confetti" ? (
            <span className="block h-full w-full rounded-[2px] bg-confetti" />
          ) : (
            <span className="block h-full w-full rounded-full bg-star" />
          )}
        </span>
      ))}
    </div>
  );
}
