"use client";

import Image from "next/image";
import { profileData } from "@/data/siteData";
import { SectionTitle } from "@/components/SectionTitle";
import { ViewMoreButton } from "@/components/ViewMoreButton";
import { useInView } from "@/hooks/useInView";

export function ProfileSection() {
  const { ref: imgRef, isInView: imgInView } = useInView<HTMLDivElement>({ threshold: 0.1 });
  const { ref: textRef, isInView: textInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="area profile relative py-[15%] lg:py-[10%] lg:pb-[5%]">
      {/* Mobile title */}
      <div className="lg:hidden">
        <SectionTitle title="PROFILE" />
      </div>

      <div className="lg:flex lg:items-stretch">
        {/* Profile image */}
        <div
          ref={imgRef}
          className={`profile_img pt-[10%] lg:pt-0 w-full lg:w-[40%] transition-all duration-500 ease-in ${
            imgInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="block relative aspect-[2/3] w-full ml-[-12%] lg:ml-0">
            <Image
              src={profileData.image}
              alt={profileData.name}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </span>
        </div>

        {/* Profile text */}
        <div
          ref={textRef}
          className={`profile_in inner pt-[10%] px-[10%] lg:pt-0 lg:pl-[10%] lg:w-[50%] lg:relative lg:flex lg:flex-col lg:justify-center transition-all duration-500 ease-in ${
            textInView ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Desktop title */}
          <div className="hidden lg:block mb-6">
            <div className="midashi border-none p-0">
              <h2 className="relative font-libre text-[1.5em] xl:text-[1.8em] tracking-[0.2em]" style={{ color: "#7E4985" }}>
                <span>PROFILE</span>
                <span className="absolute top-0 left-0 -z-10 text-[#eee]">
                  PROFILE
                </span>
              </h2>
            </div>
          </div>

          <h3 className="font-normal mb-[1.8em]">
            <span className="text-[1.7em] tracking-[0.3em]">{profileData.name}</span>
            <i className="not-italic tracking-[0.1em] block mt-2 lg:inline lg:mt-0 lg:before:content-['／'] lg:before:mr-[0.4em]">
              {profileData.kana}
            </i>
          </h3>

          <ul>
            {profileData.details.map((detail) => (
              <li key={detail.label} className="my-[0.7em]">
                <span className="after:content-['：']">{detail.label}</span>
                {detail.value}
              </li>
            ))}
          </ul>

          <div className="viewbtn mt-12 lg:absolute lg:right-[10%] lg:bottom-[10%]">
            <ViewMoreButton href="/profile/" />
          </div>
        </div>
      </div>
    </section>
  );
}
