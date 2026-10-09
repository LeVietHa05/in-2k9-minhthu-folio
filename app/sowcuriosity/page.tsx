import Image from "next/image";

//font-[family-name:var(--font-actor)]
export default function Sow() {
  return (
    <main className="max-w-7xl w-7xl mx-auto min-h-[calc(100svh-6rem)] mt-[2rem] ">
      <div className="relative z-2 min-h-[686px] text-left text-[266.47px] bg-[#09302B] rounded-tr-[132px] rounded-bl-[132px] text-[#FFFFED] leading-[230px] overflow-hidden">
        <div className="absolute -top-6 -left-2">
          Sow <br />
          the <br />
        </div>
        <div className="absolute -bottom-6 -right-3">curiosity</div>
        <Image
          src={"/sow/1.png"}
          alt=""
          width={645}
          height={645}
          className="absolute top-1/2 left-1/3 -translate-1/2 z-1"
        ></Image>
      </div>

      <div className="relative  my-10 py-10 border-t-[3px] border-[#09302B]">
        <Circle size={771} left={-200} top={-200} />
        <Circle size={432} left={1000} top={200} />
        <Circle size={432} left={550} top={1500} color="#D59C42" />
        <Circle size={432} left={-200} top={1600} color="#F4E9E3" />
        <div className="absolute z-1 top-100 -left-10">
          <Image src={"/sow/4.png"} alt="" width={567} height={447}></Image>
        </div>
        <div className="absolute z-2 bottom-60 -right-20">
          <Image src={"/sow/5.png"} alt="" width={567} height={447}></Image>
        </div>

        <div className="relative z-2 font-[family-name:var(--font-anek)] font-bold text-[58px] text-[#09302B] leading-[60px]">
          The first seed: <br /> Mathematics
        </div>
        <div className="relative z-2 flex justify-end font-[family-name:var(--font-actor)] font-[400]">
          <div className=" w-[964px]  ">
            <p className="text-justify text-[22px]">
              Back then, Math felt confusing and distant—a memory game of
              formulas I had to remember. That changed in Grade 7, when I
              learned about vertical angles. While proving why they were equal,
              I suddenly recognized the same logic from an area problem I had
              solved years earlier. For the first time, I built my own proof by
              connecting ideas I already knew. <br />
              That moment changed how I saw Math: not as a collection of
              formulas, but as a system of connections where one idea can
              illuminate another.
            </p>
            <div className="flex gap-10 pt-10">
              <div>
                <Image
                  src={"/sow/2.webp"}
                  alt=""
                  width={461}
                  height={363}
                  className="object-cover h-full w-full"
                ></Image>
              </div>
              <div>
                <Image
                  src={"/sow/3.jpg"}
                  alt=""
                  width={461}
                  height={363}
                  className="object-cover h-full w-full"
                ></Image>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#09302B] rounded-t-full pt-140 relative -top-70 min-h-[1200px] flex pb-8">
          <div className="w-1/2 ">
            <Image
              src={"/sow/4.jpg"}
              alt=""
              width={549}
              height={595}
              className="mx-auto object-cover h-[595px]"
            ></Image>
          </div>
          <div className="w-1/2 pr-6">
            <div className="font-[family-name:var(--font-anek)] text-[58px] leading-[60px] text-right">
              <span className="text-[#FFFFED]">The second seed:</span> <br />
              <span className="text-[#E6B977]">
                Programming <br /> and Data Science
              </span>
            </div>
            <div className="absolute z-1 font-[family-name:var(--font-actor)] font-normal text-justify text-[#FFFFED] text-[22px]">
              If Math gives me the theory, programming gives me a way to turn
              them into something tangible. <br />
              I first explored programming through C++, learning to break
              problems into steps and translate logic into instructions. Later,
              Python, data science, and web development showed me how those
              solutions could become tools that people without technical
              knowledge could actually use. <br />
              From algorithms like Dijkstra’s, I developed a website that helps
              dyspnea patients find the nearest medical institution. Through
              Girls Who Code, I also learned to think about using technology
              responsibly and ensuring fairness in data. Beyond technical
              skills, I found a community of like-minded girls who inspire one
              another, share stories, and introduce each other to possibilities
              in the tech industry.
            </div>
          </div>
        </div>

        <div className="bg-[#D59C42] rounded-b-full pt-8 relative -top-70 min-h-[900px] pb-8">
          <div className="relative z-1 text-[#09302B] text-[58px] font-[family-name:var(--font-anek)] leading-[60px] pl-12">
            The third seed: <br />
            Economics
          </div>
          <div className="relative z-1 w-5xl mx-auto pt-20 flex gap-12">
            <div className="font-[family-name:var(--font-actor)] text-[#FFFFED] text-[22px] w-3/5 text-justify font-[400]">
              My experience in economics has been one of continuous curiosity
              and excitement. Through everyday choices—buying coffee, watching a
              movie, or planning a vacation—I began to see how economics could
              explain decisions that seemed ordinary.
              <br />
              The more I learned, the more I wanted to understand how these
              patterns play out beyond the classroom, especially in a rapidly
              changing economy like Vietnam’s. By combining Data Science with
              Economics, I hope to build models that uncover these patterns and
              help Vietnamese businesses and communities make better decisions
              as they grow sustainably.
            </div>
            <div className="w-2/5  ">
              <Image src={'/sow/5.jpg'} alt="" width={406} height={389} className="object-contain"></Image>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Circle({
  size,
  top,
  left,
  color = "#E6B977",
}: {
  size: number;
  top: number;
  left: number;
  color?: string;
}) {
  return (
    <div
      className="absolute rounded-full z-1"
      style={{
        top: `${top}px`,
        left: `${left}px`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
      }}
    ></div>
  );
}
