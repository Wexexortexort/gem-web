"use client";

import { useState } from "react";
import Link from "next/link";
import { scheduleItems } from "@/data/siteData";
import { SectionTitle } from "@/components/SectionTitle";
import { ViewMoreButton } from "@/components/ViewMoreButton";
import { useInView } from "@/hooks/useInView";

export function ScheduleSection() {
  const [activeDay, setActiveDay] = useState(() => {
    const today = new Date();
    const match = scheduleItems.find(
      (item) =>
        item.year === today.getFullYear() &&
        item.month === today.getMonth() + 1 &&
        item.day === today.getDate()
    );
    return match ?? scheduleItems[0];
  });
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="area schedule article_schedule py-[15%] lg:py-[10%] lg:pb-[5%]">
      <div className="lg:flex lg:items-start">
        <SectionTitle title="SCHEDULE" className="lg:w-[30%] lg:pr-[5%] lg:text-right lg:border-l-0 lg:ml-0 lg:pl-0" />

        <div
          ref={ref}
          className={`schedule_area_wrap mt-[10%] lg:mt-0 transition-all duration-500 ease-in ${
            isInView ? "opacity-100" : "opacity-0"
          } lg:w-[60%] lg:ml-[5%]`}
        >
          {/* Day selector */}
          <div className="schedule_day_select overflow-x-auto lg:mt-0 whitespace-nowrap no-scrollbar relative">
            <ul className="schedule_day_group w-[200%] md:w-full">
              {scheduleItems.map((item, index) => (
                <li
                  key={`${item.year}${String(item.month).padStart(2, "0")}${String(
                    item.day
                  ).padStart(2, "0")}`}
                  className="float-left w-[14.285%] text-center relative pb-8"
                >
                  {index === 0 && (
                    <div className="year_mont_disp absolute bottom-0 left-0 z-[1] w-full text-left text-[0.9em] text-[#aaa]">
                      <div className="year_mont_in inline-flex items-center gap-2">
                        {item.year}.{item.month}
                        <span className="inline-block border-t border-[#aaa] w-[0.6em]" />
                      </div>
                    </div>
                  )}
                  <div
                    className="day_box cursor-pointer"
                    onClick={() => setActiveDay(item)}
                  >
                    <div
                      className={`relative pb-4 ${
                        activeDay === item ? "active" : ""
                      }`}
                    >
                      <span
                        className={`absolute bottom-0 left-0 w-full h-px bg-[#eee] ${
                          activeDay === item ? "!bg-black" : ""
                        }`}
                      />
                      <span
                        className={`absolute bottom-0 left-0 h-px bg-black transition-all duration-[400ms] ${
                          activeDay === item ? "w-full" : "w-0"
                        }`}
                      />
                      <div className="date font-libre text-[1.7em] font-normal">
                        {item.day}
                      </div>
                      <div
                        className={`week font-libre text-[0.4em] ${
                          activeDay === item ? "opacity-100" : "opacity-50"
                        }`}
                      >
                        {item.week}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Events */}
          <div className="schedule_in inner pt-[10%] px-[10%] lg:pt-[10%] lg:px-0">
            <div className="schedule_content">
              {scheduleItems.map((item) => (
                <ul
                  key={item.day}
                  className={`list_group list_group_card postlist ${
                    activeDay === item ? "block" : "hidden"
                  }`}
                >
                  {item.events.map((event, idx) => (
                    <li key={idx} className="list_card py-6 border-b border-[#eee] first:pt-0">
                      <div className="post_data mb-2">
                        <span className="cate inline-block align-middle text-center w-[10em] leading-8 border border-[#333] text-[0.8em] rounded-[5px] mr-[0.8em] lg:text-[0.9em] lg:mr-4">
                          {event.category}
                        </span>
                        {event.time && (
                          <span className="time inline-block align-middle">
                            {event.time}
                          </span>
                        )}
                      </div>
                      <p className="text">
                        <Link
                          href={event.href}
                          className="block hover:opacity-70 transition-opacity"
                        >
                          {event.title}
                        </Link>
                      </p>
                    </li>
                  ))}
                </ul>
              ))}
            </div>

            <div className="viewbtn mt-12 lg:text-right">
              <ViewMoreButton href="/schedule/" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
