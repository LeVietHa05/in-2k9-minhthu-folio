"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const data = [
  { text: "About Me", link: "/aboutme" },
  { text: "Sow the curiosity", link: "/sowcuriosity" },
  { text: "Tend Ideas", link: "/tendideas" },
  { text: "Share the Harvest", link: "/shareharvest" },
  { text: "Weather the Storms", link: "/weaterstorms" },
];

export default function NavBar() {
  const [showBorder, setShowBorder] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      setShowBorder(currentY <= lastY);
      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`uppercase text-[30px] z-1000 fixed top-0 left-0 right-0 w-screen  px-5 flex items-center justify-between gap-4 bg-[#FFFFED] border-y-[3px] transition-all duration-300 ${
        showBorder ? "border-[#9A5A00] py-5" : "border-transparent py-1"
      }`}
    >
      <div className="max-w-7xl w-7xl mx-auto flex justify-between">
        <Link
          href="/"
          className="rounded-full bg-[#9A5A00] text-[#FFFFED] px-5 py-2 whitespace-nowrap"
        >
          Minh Thu&apos;s Folio
        </Link>

        <nav className="flex flex-wrap items-center justify-end border-3 border-[#9A5A00] rounded-full"> 
          {data.map((item) => {
            const isActive = pathname === item.link;
            return (
              <Link
                key={item.link}
                href={item.link}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-4 py-2 whitespace-nowrap transition-colors ${
                  isActive
                    ? "bg-[#9A5A00] text-[#FFFFED]"
                    : "bg-[#FFFFED] text-[#9A5A00] hover:bg-[#9A5A00] hover:text-[#FFFFED]"
                }`}
              >
                {item.text}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
