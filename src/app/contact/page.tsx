import Image from "next/image";
import Hero from "@/public/images/hero_desktop.png";

export default function Contact() {
  return (
    <main>
      {/* header */}
      <div className="mt-[5em] flex justify-center">
        <div className="flex lg:flex-row-reverse flex-col lg:w-[70%] w-[80%] items-center justify-between">
          <div className="relative lg:-mr-[15em]">
            <Image
              src={Hero}
              alt="Hero"
              priority
              width={700}
              className="w-100"
            />
          </div>
          <div className="max-w-[35em] flex flex-col gap-2">
            <h1 className="lg:text-[48px] lg:leading-[72px] text-[28px] leading-[42px] font-[700] text-blue">
              Become part of our great team.
            </h1>
            <h3 className="lg:text-[24px] lg:leading-[36px] text-[18px] leading-[27px] font-[400] text-gray">
              We are always looking for new great talents, if you want to be
              part of a growing team that have fun at work.
            </h3>
          </div>
        </div>
      </div>
    </main>
  );
}
