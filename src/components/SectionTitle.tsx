"use client";

import { useInView } from "@/hooks/useInView";

interface SectionTitleProps {
  title: string;
  className?: string;
}

export function SectionTitle({ title, className = "" }: SectionTitleProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`midashi -ml-px text-[1.4em] lg:text-[1.5em] xl:text-[1.8em] font-libre tracking-[0.2em] pl-[10%] leading-[1.4] ${className}`}
      style={{ borderLeft: "3px solid #7E4985", color: "#7E4985" }}
    >
      <h2 className="relative inline-block">
        <span
          className="inline-block transition-[clip-path] duration-[800ms] ease-out"
          style={{
            clipPath: isInView ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
          }}
        >
          {title}
        </span>
        <span className="absolute top-0 left-0 -z-10 text-[#eee]">{title}</span>
      </h2>
    </div>
  );
}
