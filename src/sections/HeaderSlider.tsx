"use client";

import { useState } from "react";
import Slider from "react-slick";
import { heroSlides } from "@/data/siteData";
import Image from "next/image";

export function HeaderSlider() {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const togglePause = () => {
    if (!sliderRef) return;
    if (isPaused) {
      sliderRef.slickPlay();
    } else {
      sliderRef.slickPause();
    }
    setIsPaused(!isPaused);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <header className="relative">
      <div className="relative">
        <Slider ref={setSliderRef} {...settings} className="mainimg_slide">
          {heroSlides.map((slide, index) => (
            <div key={slide.id} className="relative">
              <div className="absolute inset-0 z-[1] bg-black/10 pointer-events-none" />
              {/* Mobile image */}
              <div className="block lg:hidden relative w-full h-[100vh]">
                <Image
                  src={slide.spImage}
                  alt=""
                  fill
                  className="object-cover object-top"
                  priority={index === 0}
                  sizes="100vw"
                />
              </div>
              {/* Desktop image */}
              <div className="hidden lg:block relative w-full h-screen">
                <Image
                  src={slide.pcImage}
                  alt=""
                  fill
                  className="object-cover object-top"
                  priority={index === 0}
                  sizes="100vw"
                />
              </div>
              {/* Title overlay */}
              <h1
                className={`absolute z-10 font-libre font-normal tracking-[0.4em] text-[1.7em] lg:text-[2.3vw] ${
                  index === 2
                    ? "bottom-[5vh] left-[5%] lg:left-auto lg:right-[7em] lg:top-[30%] lg:translate-y-[-30%]"
                    : index === 3
                    ? "bottom-[5vh] left-[5%] lg:left-[1.5em] lg:right-auto lg:top-auto lg:bottom-[5%] lg:translate-y-0"
                    : "bottom-[5vh] left-[5%] lg:left-auto lg:right-[3em] lg:top-1/2 lg:-translate-y-1/2"
                }`}
                style={{ color: slide.titleColor }}
              >
                G.E.M.
                <span
                  className="block text-[0.4em] tracking-[0.4em]"
                  style={{
                    opacity: index === 0 ? 0.5 : 1,
                  }}
                >
                  OFFICIAL WEBSITE
                </span>
              </h1>
            </div>
          ))}
        </Slider>

        {/* Pause/Play button */}
        <button
          onClick={togglePause}
          className={`absolute bottom-[2.5%] right-[2.5%] lg:right-[1.5%] z-10 w-6 h-6 lg:w-9 lg:h-9 border-none cursor-pointer bg-no-repeat bg-center bg-contain ${
            isPaused ? "bg-[url(/images/btn-play.png)]" : "bg-[url(/images/btn-stop.png)]"
          }`}
          aria-label={isPaused ? "Play" : "Pause"}
        />
      </div>
    </header>
  );
}
