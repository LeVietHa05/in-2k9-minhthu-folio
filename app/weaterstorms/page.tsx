import Image from "next/image";

//font-[family-name:var(--font-actor)]
export default function Sow() {
  return (
    <main className="max-w-7xl w-7xl mx-auto min-h-[calc(100svh-6rem)] mt-[2rem] ">
      <div className="relative z-2 min-h-[686px] text-left text-[266.47px] bg-[#889500] rounded-tr-[132px] rounded-bl-[132px] text-[#FFFFED] leading-[230px] overflow-hidden">
        <div className="absolute top-12 -left-3 text-[487.65px]">
          Weather <br />
        </div>
        <div className="absolute -bottom-6 -right-3">the Storms</div>
        <Image
          src={"/tendideas/3.png"}
          alt=""
          width={481}
          height={464}
          className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/3 z-1"
        ></Image>
      </div>

      <div className="relative  my-10 py-10 border-t-[3px] border-[#09302B]">
        {/* <Circle size={326} left={400} top={1350} color="#D59C42" /> */}

        <div className="flex">
          <div className="max-w-[737px]">
            <div className="font-[family-name:var(--font-anek)] font-bold text-[58px]  leading-[60px] text-[#889500]">
              Research: “Green Economy and Vietnam’s Economic Growth”
            </div>
            <div className="font-[family-name:var(--font-actor)] font-[400] text-[#09302B] text-[22px] pt-8">
              When I did this research, I quickly realized how much I still had
              to learn. I struggled to organize our reference papers, which made
              team discussions confusing, and I had never worked with data at
              this level before. <br />
              Thus, I had to reach out for my teammates and others with more
              experience, learning how to manage research materials and run the
              analyses myself. <br />
              It was uncomfortable to admit what I did not know, but it taught
              me to see asking for help as part of learning rather than a
              weakness.
            </div>
          </div>
          <div>
            <Image
              src={"/shareharvest/1.png"}
              alt=""
              width={481}
              height={464}
              className=" "
            ></Image>
          </div>
        </div>

        <div className="relative h-[600px]">
          <div className="absolute bottom-0 h-[422px] w-[845px] bg-[#09302B] rounded-t-full"></div>
          <Image
            src={"/1.png"}
            alt=""
            width={481}
            height={464}
            className="absolute right-60 "
          ></Image>
          <div className="absolute -bottom-30 left-40 h-[261px] w-[521px] bg-[#D59C42] rounded-b-full"></div>
        </div>

        <div className="mt-40">
          <div className="font-[family-name:var(--font-anek)] font-bold text-[58px]  leading-[60px] text-[#889500] text-right">
            ESG Compass
          </div>
          <div className="flex justify-between">
            <div>
              <Image
                src={"/1.png"}
                alt=""
                width={481}
                height={464}
                className=" "
              ></Image>
            </div>
            <div className="w-[703px] font-[family-name:var(--font-actor)] font-[400] text-[#09302B] text-[22px] text-justify">
              I started by trying to make my ESG app as comprehensive as
              possible, covering every industry and adding AI-powered feedback.
              But I realized I was building on assumptions, missing data, and
              knowledge I didn’t yet have. Thus, I had to narrow my focus,
              design around what Vietnamese garment SMEs could realistically
              provide, and prioritize a complete, usable solution over an
              impressive one. <br />
              Though the product was much more modest than I imagined, I now
              know that a good solution needs careful consideration of the users
              and relentless decision-making processes.
            </div>
          </div>
        </div>

        <div className="pt-8">
          <Image
            src={"/1.png"}
            alt=""
            width={481}
            height={464}
            className=" "
          ></Image>
        </div>

        <div className="pt-8 relative  ">
          <div className="absolute rounded-full z-1 bg-[#F2CF82] size-[667px] -translate-y-1/2 translate-x-full"></div>
          <Image
            src={"/weather/1.png"}
            alt=""
            width={800}
            height={664}
            className="absolute  right-1/2 -translate-y-1/2 translate-x-full z-1"
          ></Image>
        </div>
        {/* TODO: need to reposition this circlr */}
        <Circle size={1137} left={-400} top={2200} color="#F2CF82" />
        <div className="mt-50 relative z-2">
          <div className="font-[family-name:var(--font-anek)] font-bold text-[58px]  leading-[60px] text-[#889500] w-1/2 ">
            Environmental monitor and medical supply chain optimizer AIoT system
            for dyspnea patients
          </div>
          <div className="flex">
            <div className="w-1/3">
              <Image
                src={"/sow/1.png"}
                alt=""
                width={645}
                height={645}
                className=" -scale-x-150 scale-y-150 relative top-30"
              ></Image>
            </div>
            <div className="w-2/3 ">
              <div className="font-[family-name:var(--font-actor)] font-[400] text-[#09302B] text-[22px] text-justify">
                Traveling abroad for the first time without my family was both
                exciting and uncomfortable. I was suddenly living with students
                I had never met, navigating a new culture, and making everyday
                decisions on my own. At first, I felt out of place and homesick,
                but gradually, I became more open, adaptable, and confident.
                Living with people so different from me taught me how to
                communicate, handle disagreements.
              </div>
              <div className="flex gap-2 pt-8 w-full justify-end">
                <div className="w-[388px] h-[296px]">
                  <Image
                    src={"/weather/1.jpg"}
                    alt=""
                    width={388}
                    height={296}
                    className="object-cover w-full h-full"
                  ></Image>
                </div>
                <div className="w-[388px] h-[296px]">
                  <Image
                    src={"/weather/2.jpg"}
                    alt=""
                    width={388}
                    height={296}
                    className="object-cover w-full h-full"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-2 mt-40">
          <div className="font-[family-name:var(--font-anek)] font-bold text-[58px]  leading-[60px] text-[#889500]   text-right">
            Economics Community
          </div>
          <div className="flex gap-6 p-8">
            <div className="w-[703px] font-[family-name:var(--font-actor)] font-[400] text-[#09302B] text-[22px] text-justify">
              I underestimated how difficult it would be to keep an online team
              moving. With different schedules and time zones, coordinating
              meetings, tracking research, and supporting other teams became
              challenging. At times, I felt like I was coordinating calendars
              more than people. <br />I realized I needed to stop keeping
              everything in my head. I began planning timelines earlier, setting
              clearer deadlines, and communicating updates asynchronously so
              members could work independently. I also learned to trust people
              with their responsibilities and step in when they needed support.
            </div>

            <div className="w-[388px] h-[296px]">
              <Image
                src={"/1.png"}
                alt=""
                width={388}
                height={296}
                className="object-cover w-full h-full"
              ></Image>
            </div>
          </div>
        </div>

        <div className="bg-[#09302B] h-[1264px] rounded-t-full p-12 pt-20 relative">
          <div className="font-[family-name:var(--font-anek)] font-bold text-[58px]  leading-[60px] text-[#889500]  w-2/3 text-left">
            Head of Finance in Project ‘Socialet’ - Ams Media Club
          </div>

          <div className="font-[family-name:var(--font-actor)] font-[400] text-[#F2CF82] text-[22px] text-justify w-[703px] mx-auto pt-12">
            My project was slightly less lucky. Everyone on my team was a
            complete newbie—they had never worked on a project or reached out to
            sponsors before. At first, I thought the easiest solution was to
            take on most of the work myself and leave them with the simpler
            tasks. <br />
            That summer, though, I was already juggling way too much. Soon, I
            was missing one deadline after another, and I realized that I simply
            could not do everything myself. <br />
            So I started teaching them instead. I broke tasks down, showed them
            how to do things, and slowly trusted them with more responsibility.
            I also started paying more attention to what each person was good at
            and where they needed help, so I could give them tasks that suited
            them. Ultimately, I learned that good leadership means helping other
            people become capable enough to share it with you.
          </div>

          <div className="w-[340px] h-[527px] absolute -right-15 top-10">
            <Image
              src={"/weather/2.png"}
              alt=""
              width={340}
              height={527}
              className="object-cover w-full h-full"
            ></Image>
          </div>
          <div className="flex justify-between pt-12">
            <div className="w-[388px] h-[431px]">
              <Image
                src={"/shareharvest/1.jpeg"}
                alt=""
                width={388}
                height={431}
                className="object-cover w-full h-full"
              ></Image>
            </div>
            <div className="w-[388px] h-[431px]">
              <Image
                src={"/weather/3.jpg"}
                alt=""
                width={388}
                height={431}
                className="object-cover w-full h-full"
              ></Image>
            </div>{" "}
            <div className="w-[388px] h-[431px]">
              <Image
                src={"/weather/4.jpg"}
                alt=""
                width={388}
                height={431}
                className="object-cover w-full h-full"
              ></Image>
            </div>{" "}
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
