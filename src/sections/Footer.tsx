"use client";

import Link from "next/link";
import { navItems, siteMeta } from "@/data/siteData";
import { useInView } from "@/hooks/useInView";

export function Footer() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <footer
      ref={ref}
      className={`footer py-16 transition-all duration-500 ease-in ${
        isInView ? "opacity-100" : "opacity-0"
      }`}
    >
      <ul className="footer_navi py-[15%] px-[5%] text-center lg:py-[10%]">
        {navItems.map((item) => (
          <li
            key={item.label}
            className="inline-block align-top mx-[0.8em] my-4 font-libre tracking-[0.1em]"
          >
            {item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                {item.label}
              </a>
            ) : (
              <Link
                href={item.href}
                className="hover:opacity-70 transition-opacity"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile social */}
      <div className="lg:hidden follow mb-20">
        <h3 className="font-libre font-normal text-[1em] tracking-[0.1em] text-center">
          FOLLOW ME
        </h3>
        <ul className="text-center mt-8">
          <li className="w-[1.7em] inline-block align-middle mx-4">
            <a
              href={siteMeta.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <svg viewBox="0 0 1200 1227" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
              </svg>
            </a>
          </li>
          <li className="w-[1.7em] inline-block align-middle mx-4">
            <a
              href={siteMeta.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 80 80"
                className="fill-current"
              >
                <path d="M56.7,79.9H23.3C10.4,79.9,0,69.6,0,56.7V23.4C0,10.5,10.4,0.2,23.3,0.2h33.5C69.5,0.2,80,10.5,80,23.4v33.4C79.8,69.6,69.5,79.9,56.7,79.9z M72.6,23.4c0-8.7-7.2-15.8-15.9-15.8H23.3c-8.9-0.2-15.9,7-15.9,15.8v33.4c0,8.7,7.2,15.8,15.9,15.8h33.5c8.7,0,15.9-7.1,15.9-15.8L72.6,23.4L72.6,23.4z M61.4,23.7c-2.7,0-5-2.2-5-4.9s2.3-4.9,5-4.9c2.7,0,5,2.2,5,4.9C66.3,21.6,64.1,23.7,61.4,23.7z M39.9,60.4c-11.3,0-20.4-9.2-20.4-20.4s9.2-20.4,20.4-20.4S60.3,28.8,60.3,40C60.5,51.3,51.2,60.4,39.9,60.4z M39.9,26.8c-7.4,0-13.4,5.9-13.4,13.3c0,7.2,6,13.3,13.4,13.3s13.4-5.9,13.4-13.3C53.3,32.8,47.3,26.8,39.9,26.8z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <p className="copyright text-[0.8em] text-center opacity-60 pb-16">
        {siteMeta.copyright}
      </p>
    </footer>
  );
}
