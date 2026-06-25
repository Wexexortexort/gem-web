"use client";

import { useEffect, useState } from "react";

export function OpeningLoader() {
  const [phase, setPhase] = useState<"initial" | "reveal" | "exit">("initial");
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const revealTimer = setTimeout(() => setPhase("reveal"), 100);
    const exitTimer = setTimeout(() => setPhase("exit"), 1400);
    const hideTimer = setTimeout(() => setHidden(true), 3900);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[1000] flex items-center justify-center bg-white transition-all duration-[2500ms] ease-out ${
        phase === "exit" ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className={`text-center transition-all duration-[2500ms] ease-out ${
          phase === "exit" ? "blur-[8px] opacity-0" : "blur-0 opacity-100"
        }`}
      >
        <div className="relative font-libre font-normal tracking-[0.3em] text-[1.2em]">
          <span
            className="inline-block transition-[clip-path] duration-700 ease-out"
            style={{
              clipPath:
                phase === "reveal" || phase === "exit"
                  ? "inset(0 0 0 0)"
                  : "inset(0 100% 0 0)",
            }}
          >
            G.E.M.
          </span>
          <span className="absolute inset-0 -z-10 text-[#eee]">
            G.E.M.
          </span>
        </div>
      </div>
    </div>
  );
}
