import Image from "next/image";
import Team from "@/public/images/Team.png";
import Quote from "@/public/images/el_quote-right.png";
import Quote1 from "@/public/images/el_quote-right-1.png";
import Hand from "@/public/images/victory_hand.png";
import Studio from "@/public/images/abersoft_studios.png";

export default function About() {
  return (
    <main>
      {/* header 1 */}
      <div className="mt-[5em] flex justify-center">
        <div className="flex lg:flex-row-reverse flex-col w-[80%] lg:w-full items-center justify-evenly py-[6em]">
          <div className="relative lg:-mr-[25em]">
            <Image
              src={Team}
              alt="Team"
              priority
              width={750}
              className="w-100"
            />
          </div>
          <div className="max-w-[35em] lg:w-[550px] flex flex-col gap-2">
            <h1 className="lg:text-[48px] lg:leading-[72px] text-[28px] leading-[42px] font-[700] text-blue">
              <p className="text-gray">Who are we?</p>
              <span className="text-gray">We are</span>
              <span> Abersoft.</span>
            </h1>
            <h3 className="lg:text-[24px] lg:leading-[36px] text-[18px] leading-[27px] font-[400] text-gray">
              We have been working with software development since 2013 and our
              team has created apps with over 400 million users.
            </h3>
          </div>
        </div>
      </div>

      {/* header 2 */}

      <div className="flex flex-col justify-center items-center bg-blue py-[8em]">
        <Image src={Quote} alt="Quote" priority width={50} className="w-100" />
        <h1 className="lg:text-[48px] lg:leading-[72px] text-[28px] leading-[42px] font-[700] text-white text-center">
          <p>Creating software</p>
          <p>is not our work,</p>
          <p>it is our passion.</p>
        </h1>
        <Image src={Quote1} alt="Quote" priority width={50} className="w-100" />
      </div>

      {/* header 3 */}
      <div className="flex justify-center">
        <div className="flex lg:flex-row-reverse flex-col w-[80%] lg:w-full items-center justify-evenly pt-[6em]">
          <div className="relative">
            <Image
              src={Hand}
              alt="Hand"
              priority
              height={550}
              className="w-100"
            />
          </div>
          <div className="lg:max-w-[32em] max-w-[22em]  flex flex-col gap-5">
            <h2 className="lg:text-[32px] lg:leading-[48px] text-[24px] leading-[48px] font-[700] text-blue">
              Our philosophy.
            </h2>
            <p className="lg:text-[16px] lg:leading-[25px] text-[14px] leading-[24px] font-[700] text-gray">
              Our mission is to make our clients life as smooth and problem free
              as possible and deliver top products.
            </p>
            <p className="lg:text-[16px] lg:leading-[25px] text-[14px] leading-[24px] font-[500] text-gray">
              We have been in the tech industry over a decade and know that it
              can sometimes be a jungle for someone who is unfamilliar with it.
              We are here to assist you and make it fun and easy for you to
              work.
            </p>
            <p className="lg:text-[16px] lg:leading-[25px] text-[14px] leading-[24px] font-[500] text-gray">
              We have spent the past years in putting together an international
              team and workflow so we can optimize cost, work fast and deliver
              great results.
            </p>
            <p className="lg:text-[16px] lg:leading-[25px] text-[14px] leading-[24px] font-[500] text-gray">
              2019 we won the Innovation & Entrepreneurship Award in Kunming for
              our work.
            </p>
          </div>
        </div>
      </div>

      {/* header 4 */}

      <div className="flex flex-col justify-center items-center bg-blue py-[8em]">
        <h1 className="lg:text-[48px] lg:leading-[72px] text-[28px] leading-[42px] font-[700] text-white text-center">
          <p>Abersoft,</p>
          <p>more than just a</p>
          <p>software house.</p>
        </h1>
      </div>

      {/* header 5 */}
      <div className="flex justify-center">
        <div className="flex lg:flex-row-reverse flex-col lg:max-w-[70%] max-w-[60%] items-center justify-between py-[6em] gap-32">
          <div className="relative">
            <Image
              src={Studio}
              alt="Studio"
              priority
              width={500}
              className="w-100"
            />
          </div>
          <div className="lg:max-w-[32em] max-w-[22em]  flex flex-col gap-5">
            <h2 className="lg:text-[32px] lg:leading-[48px] text-[24px] leading-[48px] font-[700] text-blue">
              Game Studio & Inhouse apps
            </h2>
            <p className="lg:text-[16px] lg:leading-[25px] text-[14px] leading-[24px] font-[500] text-gray">
              Besides helping companies and start ups to create awesome apps and
              websites we also have our own inhouse branch where we explore new
              technologies that we find interesting.
            </p>
            <p className="lg:text-[16px] lg:leading-[25px] text-[14px] leading-[24px] font-[500] text-gray">
              Lately we have been focusing on exploring the field of Augmented
              Reality, more commonly known as AR. Besides AR we also love
              building software that makes life easier for our users.
            </p>
            <p className="lg:text-[16px] lg:leading-[25px] text-[14px] leading-[24px] font-[500] text-gray">
              Are you looking for a tech partner for your idea, we sometimes go
              in as part owners in ideas we feel passionate about. Contact us if
              you have an idea that you think we might be interested in.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
