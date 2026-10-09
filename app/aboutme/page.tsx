import Image from "next/image";
import ImageMaskHover from "../components/ImageMask";

export default function Aboutme() {
  return (
    <main className=" h-[calc(100svh-6rem)] mt-[2rem] font-[family-name:var(--font-actor)]">
      <div className="text-center text-xl font-[400]">
        Hello and welcome to my garden, dear esteemed guest! <br />
        My name is Minh Thu, and this is where I grow the questions, ideas,
        projects, and my lessons. Wander through <br /> the garden, and you’ll
        see how one seed can grow into another!
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        {/* <Image src={"/about/2.png"} alt="" width={847} height={847}></Image> */}
        <ImageMaskHover image1Src="/about/2.png" image2Src="/about/1.png" alt="" width={847} height={847}/>
      </div>
    </main>
  );
}
