import Image from "next/image";

import BaseInput from "./BaseInput";
import BaseTextarea from "./BaseTextarea";
import BaseButton from "./BaseButton";

import FacebookLogo from "@/public/images/Button_Facebook.png";
import InstagramLogo from "@/public/images/Button_Instagram.png";
import LinkedInLogo from "@/public/images/Button_LinkedIn.png";

export default function Contact() {
  return (
    <div className="mt-[8em] mb-[2em] flex justify-center items-center w-full">
      <form className="flex flex-col gap-5 w-[80%]">
        <div className="flex lg:flex-row flex-col">
          <div className="flex flex-col flex-1 justify-between gap-2">
            <div>
              <h1 className="lg:text-[48px] lg:leading-[72px] text-[28px] leading-[42px] font-[700] text-blue mb-[0.75em]">
                Contact us.
              </h1>
              <p className="lg:text-[16px] lg:leading-[25px] text-[14px] leading-[24px] font-[500] text-gray max-w-[27em]">
                We know that it sometimes can be hard to know where to start.
                Let's chat and see if we can help you!
              </p>
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-[2em] w-full max-w-[35em]">
            <BaseInput type="text" placeholder="Name" />
            <BaseInput type="email" placeholder="Email" />
            <BaseTextarea rows={6} placeholder="Message" />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col-reverse w-full justify-between gap-10">
          <div className="lg:w-[15em] w-full flex flex-row justify-between">
            <Image
              src={FacebookLogo}
              alt="Facebook"
              priority
              width={56}
              className="w-100"
            />
            <Image
              src={InstagramLogo}
              alt="Instagram"
              priority
              width={56}
              className="w-100"
            />
            <Image
              src={LinkedInLogo}
              alt="LinkedIn"
              priority
              width={56}
              className="w-100"
            />
          </div>

          <div className="flex justify-center">
            <BaseButton label="Send" type="button" />
          </div>
        </div>
      </form>
    </div>
  );
}
