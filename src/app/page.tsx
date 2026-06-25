import { OpeningLoader } from "@/components/OpeningLoader";
import { FixedFollow } from "@/components/FixedFollow";
import { GlobalNav } from "@/sections/GlobalNav";
import { HeaderSlider } from "@/sections/HeaderSlider";
import { NewsSection } from "@/sections/NewsSection";
import { ScheduleSection } from "@/sections/ScheduleSection";
import { ProfileSection } from "@/sections/ProfileSection";
import { WorksSection } from "@/sections/WorksSection";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <OpeningLoader />
      <GlobalNav />
      <FixedFollow />

      <div id="wrap">
        <HeaderSlider />

        <main className="main relative lg:pt-0">
          <article className="ml-[10%] border-l border-[#eee] relative">
            <NewsSection />
            <ScheduleSection />
            <ProfileSection />
            <WorksSection />

            {/* Vertical timeline line for desktop */}
            <div className="tateline hidden lg:block absolute left-[30%] top-0 w-px h-full border-r border-[#eee] -z-10" />
          </article>

          <div className="line border-t border-[#eee] w-full" />
        </main>

        <Footer />
      </div>
    </>
  );
}
