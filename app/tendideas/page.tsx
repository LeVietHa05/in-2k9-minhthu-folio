import Image from "next/image";

//font-[family-name:var(--font-actor)]
export default function Sow() {
  return (
    <main className="max-w-7xl w-7xl mx-auto min-h-[calc(100svh-6rem)] mt-[2rem] ">
      <div className="relative z-2 min-h-[686px] text-left text-[266.47px] bg-[#F2CF82] rounded-tr-[132px] rounded-bl-[132px] text-[#FFFFED] leading-[230px] overflow-hidden">
        <div className="absolute top-12 -left-3 text-[487.65px]">
          Tend <br />
        </div>
        <div className="absolute -bottom-6 -right-3">Ideas</div>
        <Image
          src={"/tendideas/1.png"}
          alt=""
          width={1096}
          height={645}
          className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/3 z-1"
        ></Image>
      </div>

      <div className="relative  my-10 py-10 border-t-[3px] border-[#09302B]">
        {/* <Circle size={432} left={550} top={1500} color="#D59C42" />
        <Circle size={432} left={-200} top={1600} color="#F4E9E3" /> */}
        {/* <div className="absolute z-2 bottom-60 -right-20">
          <Image src={"/sow/5.png"} alt="" width={567} height={447}></Image>
        </div> */}

        <div className="relative z-2 font-[family-name:var(--font-anek)] font-bold text-[58px] text-[#09302B] leading-[60px] text-right">
          <span className="text-[#E6B977]">Research:</span> <br /> “Green
          Economy and Vietnam’s <br />
          Economic Growth”
        </div>
        <div className="relative z-2 pt-6 flex gap-6 font-[family-name:var(--font-actor)] font-[400]">
          <div className=" w-[964px]  ">
            <p className="text-justify text-[22px]">
              Vietnam’s economy is growing; yet, the growth accompanies severe
              environmental degradation. Analyzing past datasets can only
              diagnose the issue, but cannot address it. <br />
              Thus it led me to a question: Could data science move beyond
              explaining economic and environmental patterns to predicting and
              optimizing decisions under environmental constraints?
            </p>
          </div>
          <div>
            <Image
              src={"/tendideas/2.png"}
              alt=""
              width={606}
              height={399}
            ></Image>
          </div>
        </div>

        <div className="relative z-2 font-[family-name:var(--font-anek)] font-bold text-[58px] text-[#E6B977] leading-[60px] ">
          <div className="relative z-2">
            <span className="">Research:</span> <br /> “The Impact of
            Gamification <br /> Features in Digital Payment <br /> Applications
            and Online <br />
            Shopping on Green Consumption <br /> Behavior”
          </div>
          <div className="relative z-2 mt-6">
            <Image src={"/1.png"} alt="" width={606} height={399}></Image>
          </div>
          <Circle size={1387} left={-500} top={-150} color="#09302B" />
        </div>

        <div className="relative z-2  text-[#09302B] text-right flex items-end flex-col">
          <div className="relative z-2 font-[family-name:var(--font-anek)] font-bold text-[58px] leading-[60px]">
            ESG Compass
          </div>
          <p className="relative z-2 font-[family-name:var(--font-actor)] font-[400] text-[22px] w-2xl">
            I initially thought small businesses struggled with the green
            transition because they lacked funding. But as I dug deeper, I
            realized that many simply didn’t know how to qualify for green bonds
            and loans—which made me rethink the problem entirely. 
          </p>
          <div className="relative z-2 mt-6">
            <Image src={"/1.png"} alt="" width={606} height={399}></Image>
          </div>
          <div className="absolute z-2 top-60 left-10">
            <Image
              src={"/tendideas/3.png"}
              alt=""
              width={642}
              height={642}
            ></Image>
          </div>
          <Circle size={1000} left={500} top={-150} color="#E6B977" />
        </div>

        <div className="  rounded-l-full bg-[#F2CF82] mt-15 relative z-2 text-[#09302B] py-20 text-justify w-[1440px] left-1/2 -translate-x-1/2">
          <div className="font-[family-name:var(--font-anek)] font-bold text-[52px] leading-[60px] text-right px-4 w-7xl mx-auto">
            A System for Monitoring and Predicting the Quality and Productivity
            of Tropical Fruit Crops in Vietnam
          </div>
          <div className="flex w-7xl mx-auto font-[family-name:var(--font-actor)] font-[400] text-[22px] justify-center gap-12 py-8">
            <div className="w-1/3 h-fit">
              Growing up in Vietnam, I took our tropical fruits for granted.
              Learning about Vietnamese farmers showed me how climate change is
              making traditional farming increasingly unpredictable—and made me
              wonder how technology could help.
            </div>
            <div className="w-1/3 h-[300px] object-cover">
              <Image
                src={"/tendideas/4.png"}
                alt=""
                width={342}
                height={342}
                className="object-cover w-full h-full"
              ></Image>
            </div>
            <div className="w-1/3 h-[300px] object-cover">
              <Image
                src={"/tendideas/1.jpg"}
                alt=""
                width={342}
                height={342}
                className="object-cover  h-full"
              ></Image>
            </div>
          </div>
        </div>

        <div className="flex relative">
          <div className="w-1/3 pt-12 text-[#09302B] font-[family-name:var(--font-anek)] font-bold text-[52px] leading-[60px]">
            Environmental monitor and medical supply chain optimizer AIoT system
            for dyspnea patients
          </div>

          <div className="relative w-2/3 aspect-2/1">
            <div className="rounded-t-full h-full bg-[#09302B] relative">
              <div className="w-[300px] absolute top-[125px] left-[182px] font-[family-name:var(--font-actor)] font-[400] text-[22px] text-[#FFFFED]">
                From the story of our team member’s mother, who suffers from
                dyspnea, we realized how directly air pollution impacts daily
                life.
              </div>
            </div>
            <div className="absolute -bottom-70 -right-10 pb-10">
              <Image src={'/sow/4.jpg'} alt="" height={378} width={549} className="h-[378px]  object-cover "></Image>
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
