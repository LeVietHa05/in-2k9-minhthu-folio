import Image from "next/image";

//font-[family-name:var(--font-actor)]
export default function Sow() {
  return (
    <main className="max-w-7xl w-7xl mx-auto min-h-[calc(100svh-6rem)] mt-[2rem] ">
      <div className="relative z-2 min-h-[686px] text-left text-[266.47px] bg-[#930018] rounded-tr-[132px] rounded-bl-[132px] text-[#FFFFED] leading-[230px] overflow-hidden">
        <div className="absolute top-12 -left-3 text-[487.65px]">
          Share <br />
        </div>
        <div className="absolute -bottom-6 -right-3">the harvest</div>
        <Image
          src={"/shareharvest/1.png"}
          alt=""
          width={481}
          height={464}
          className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/3 z-1"
        ></Image>
      </div>

      <div className="relative  my-10 py-10 border-t-[3px] border-[#09302B]">
        <Circle size={432} left={500} top={200} color="#D59C42" />
        <Circle size={326} left={400} top={1350} color="#D59C42" />
        <div className="absolute z-2 top-90 -left-60">
          <Image
            src={"/tendideas/1.png"}
            alt=""
            width={956}
            height={664}
          ></Image>
        </div>

        <div className="relative z-2 font-[family-name:var(--font-anek)] font-bold text-[58px]  leading-[60px] text-right">
          <span className="text-[#930018]">
            Head of Logistics | Aria Project
          </span>{" "}
          <br />
        </div>
        <div className="relative z-2 pt-6 flex gap-6 font-[family-name:var(--font-actor)] font-[400] text-[#09302B]">
          <div className=" w-[703px]  ">
            <p className="text-justify text-[22px]">
              In summer 2025, our project’s first season began. We had an idea,
              a team, and a long list of things to get done for this ambitious
              project. As Head of Logistics, I was responsible for making sure
              that list turned into action—coordinating schedules, people,
              equipment, and setup.
              <br />
              My technical background also gave me the opportunity to take on a
              role beyond logistics. I managed our concert website and tracked
              attendee donations, giving me a chance to combine my love for
              technology with the behind-the-scenes work that kept the project
              running.
            </p>
          </div>
        </div>
        <div className="flex justify-end relative z-1">
          <Image
            src={"/shareharvest/1.jpg"}
            alt=""
            width={680}
            height={399}
          ></Image>
        </div>

        <div className="relative rounded-t-full pt-140 -mt-80 bg-[#09302B] h-[1310px] px-8">
          <div className="flex text-[#FFFFED] ">
            <div className="w-2/5 font-[family-name:var(--font-anek)] font-bold text-[58px]  leading-[60px]">
              Economics Community
            </div>
            <p className="w-3/5 font-[family-name:var(--font-actor)] font-[400] pt-25 pr-12 text-justify ">
              The more I studied economics, the more I realized that learning
              did not have to stop at the classroom door. Yet for many students
              in Vietnam, there was no shared space to debate economic issues,
              discover research, or make sense of the events shaping our world.
            </p>
          </div>

          <div className="relative z-2 rounded-full aspect-square w-fit  ">
            <Image
              className="rounded-full h-full"
              src={"/1.png"}
              alt=""
              width={508}
              height={508}
            ></Image>
          </div>
        </div>

        <div className="relative  rounded-t-full pt-100 -mt-80 bg-[#F2CF82] h-[873] px-8 w-4xl left-1/2 -translate-x-1/2 flex justify-end">
          <p className="w-xl font-[family-name:var(--font-actor)] font-[400] text-[22px] text-justify">
            My first club, my first project, and my first leadership experience.
            And oh, how I miss my “freaky homey” buddies! Ams Media and Socialet
            felt like home—a place where I learned from my seniors, grew close
            to my fellow members, and bonded with them over a hotpot at the
            president’s house.
            <br /> Though I worked in the Finance department, I also got my
            first taste of logistics, from organizing behind the scenes to
            making handmade products for charity. After far too many failed
            paper stars, I unexpectedly picked up handicrafts as a hobby. That
            little experience followed me further than I expected: later, I
            found myself taking on logistics roles in Aria Project as well.
          </p>
          <div className="absolute  bottom-0 -left-48 font-[family-name:var(--font-anek)] font-bold text-[58px]  leading-[60px] text-[#09302B] w-[450px]">
            <p>Head of Finance in Project ‘Socialet’ - Ams Media Club</p>
            <div className="pt-12">
              <Image
                src={"/shareharvest/1.jpeg"}
                alt=""
                width={421}
                height={292}
              ></Image>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 mt-12">
          <div></div>
          <div className="font-[family-name:var(--font-anek)] font-bold text-[58px]  leading-[60px] text-[#09302B]">
            Organizer | Yen Ninh Pagoda Shelter Volunteer Project
          </div>
          <div className=" relative -top-20">
            <Image src={"/sow/5.png"} alt="" width={421} height={292}></Image>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="">
            <Image
              src={"/shareharvest/2.jpg"}
              alt=""
              width={667}
              height={371}
            ></Image>
          </div>
          <div>
            <p className=" font-[family-name:var(--font-actor)] font-[400] text-[22px] text-justify text-[#09302B]">
              Beneath the roots lie lives we may never know. <br />
              Stepping out of my comfort zone to organize and deliver donations
              of food, clothing, and stationery to the children at the pagoda
              shelter exposed me to lives far removed from my own.
            </p>
            <div>
              <Image
                src={"/sow/1.png"}
                alt=""
                width={667}
                height={371}
                className="-scale-x-100"
              ></Image>
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
