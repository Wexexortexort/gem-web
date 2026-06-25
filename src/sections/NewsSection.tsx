"use client";

import Link from "next/link";
import { newsItems } from "@/data/siteData";
import { SectionTitle } from "@/components/SectionTitle";
import { ViewMoreButton } from "@/components/ViewMoreButton";
import { useInView } from "@/hooks/useInView";

export function NewsSection() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="area news py-[15%] lg:py-[10%] lg:pb-[5%]">
      <div className="lg:flex lg:items-start">
        <SectionTitle title="NEWS" className="lg:w-[30%] lg:pr-[5%] lg:text-right lg:border-l-0 lg:ml-0 lg:pl-0" />

        <div
          ref={ref}
          className={`news_in inner pt-[10%] px-[10%] transition-all duration-500 ease-in ${
            isInView ? "opacity-100" : "opacity-0"
          } lg:pt-0 lg:px-0 lg:ml-[5%] lg:w-[60%]`}
        >
          <ul className="postlist">
            {newsItems.map((item) => (
              <li
                key={item.id}
                className="py-6 border-b border-[#eee] first:pt-0 lg:py-6"
              >
                <div className="post_data mb-2 lg:mb-0 lg:float-left lg:text-[0.9em] lg:leading-[1.5]">
                  <span className="date inline-block align-middle leading-none">
                    {item.date}
                  </span>
                  <span className="cat inline-block align-middle leading-none relative">
                    <span className="mx-2 text-[#ddd] lg:mx-4">|</span>
                    {item.category}
                  </span>
                </div>
                <p className="text lg:pl-[13em]">
                  <Link
                    href={item.href}
                    className="block hover:opacity-70 transition-opacity"
                  >
                    {item.title}
                  </Link>
                </p>
              </li>
            ))}
          </ul>

          <div className="viewbtn mt-12 lg:text-right">
            <ViewMoreButton href="/news/" />
          </div>
        </div>
      </div>
    </section>
  );
}
