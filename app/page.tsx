import Image from "next/image";
import { avilock } from "./font";

export default function Home() {
  return (
    <main className="relative flex h-[calc(100svh-6rem)] w-full flex-col items-center justify-center overflow-hidden">
      <h1
        className={`${avilock.className} flex flex-col items-center text-center text-[14vw] leading-[1] text-[#9A5A00]`}
      >
        <span>Minh Thu&apos;s</span>
        <span>PortFolio</span>
      </h1>

      <Image
        src="/home/1.png"
        alt="Minh Thu"
        width={800}
        height={800}
        priority
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-auto w-[32vw] -translate-x-1/2 -translate-y-1/2 object-contain"
      />
    </main>
  );
}
