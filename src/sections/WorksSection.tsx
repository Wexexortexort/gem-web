"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { worksCategories, worksData, type WorksCategoryKey } from "@/data/siteData";
import { SectionTitle } from "@/components/SectionTitle";
import { ViewMoreButton } from "@/components/ViewMoreButton";
import { useInView } from "@/hooks/useInView";

export function WorksSection() {
  const [activeCategory, setActiveCategory] = useState<WorksCategoryKey>("music");
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  useEffect(() => {
    // Set first category active on load (matches original behavior)
    setActiveCategory("music");
  }, []);

  return (
    <section className="area works py-[15%] lg:py-[10%] lg:pb-[10%]">
      <div className="lg:flex lg:items-start">
        <SectionTitle title="WORKS" className="lg:w-[30%] lg:pr-[5%] lg:text-right lg:border-l-0 lg:ml-0 lg:pl-0" />

        <div
          ref={ref}
          className={`works_in inner pt-[10%] px-[10%] transition-all duration-500 ease-in ${
            isInView ? "opacity-100" : "opacity-0"
          } lg:pt-0 lg:px-0 lg:ml-[5%] lg:w-[60%]`}
        >
          {/* Category tabs */}
          <ul className="catlist mb-16">
            {worksCategories.map((cat) => (
              <li
                key={cat.key}
                className={`w-1/3 lg:w-1/5 float-left text-center ${
                  activeCategory === cat.key ? "active" : ""
                }`}
                onClick={() => setActiveCategory(cat.key)}
              >
                <span className="block cursor-pointer leading-8 relative py-4 pb-2">
                  <span className="absolute bottom-0 left-0 w-full h-px bg-[#eee]" />
                  <span
                    className={`absolute bottom-0 left-0 h-px bg-black transition-all duration-[400ms] ${
                      activeCategory === cat.key ? "w-full" : "w-0"
                    }`}
                  />
                  {cat.label}
                </span>
              </li>
            ))}
          </ul>

          {/* Works content */}
          <div className="works_content clear-both">
            {worksCategories.map((cat) => (
              <ul
                key={cat.key}
                className={`postlist list_${cat.key} ${
                  activeCategory === cat.key ? "block" : "hidden"
                } lg:w-[106%] lg:-ml-[3%] lg:mb-8`}
              >
                {worksData[cat.key].map((work, idx) => (
                  <li
                    key={idx}
                    className="py-6 border-b border-[#eee] first:pt-0 lg:float-left lg:w-1/3 lg:px-[3%] lg:border-none lg:py-0"
                  >
                    <div className="post_data text-[0.9em]">
                      <Link
                        href={work.href}
                        className="block hover:opacity-70 transition-opacity"
                      >
                        <p className="text">{work.title}</p>
                        <p>{work.note}</p>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <div className="viewbtn mt-12 clear-both lg:text-right">
            <ViewMoreButton href="/works/" />
          </div>
        </div>
      </div>
    </section>
  );
}
