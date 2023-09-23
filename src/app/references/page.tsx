import Image, { StaticImageData } from "next/image";
import Food from "@/public/images/food_desktop.png";
import Featly from "@/public/images/featly_phone.png";
import AppStore from "@/public/images/Button_Appstore.png";
import GooglePlay from "@/public/images/Button_Google_Play.png";
import Jelena from "@/public/images/jelena_desktop.png";
import Ava from "@/public/images/ava_desktop.png";
import Macbook from "@/public/images/macbook.png";
import Patric from "@/public/images/patrik_iphone_desktop.png";

export default function References() {
  return (
    <main>
      {/* header 1 */}
      <div className="mt-[5em] flex justify-center">
        <div className="flex lg:flex-row-reverse flex-col  lg:w-[65%] w-[80%]  items-center justify-between">
          <div className="relative lg:-mr-[10em]">
            <Image
              src={Food}
              alt="Food"
              priority
              width={750}
              className="w-100"
            />
          </div>
          <div className="max-w-[35em] flex flex-col gap-2">
            <h1 className="lg:text-[48px] lg:leading-[72px] text-[28px] leading-[42px] font-[700] text-blue">
              Feastly app,
              <p className="text-gray">Find your next dinner.</p>
            </h1>
            <h3 className="lg:text-[24px] lg:leading-[36px] text-[18px] leading-[27px] font-[400] text-gray">
              We created an app to help people decide what to eat in a fun and
              exciting way. So we created Feastly, tinder for food.
            </h3>
          </div>
        </div>
      </div>

      {/* header 2 */}
      <div className="my-[5em] flex justify-center">
        <div className="flex lg:flex-row flex-col  lg:w-[70%] w-[80%]  items-center justify-between">
          <div className="relative lg:-ml-[8em] w-[680px]">
            <Image
              src={Featly}
              alt="Featly"
              priority
              width={680}
              className="w-100"
            />
          </div>
          <div className="lg:max-w-[30em] max-w-[22em]  flex flex-col gap-5">
            <h2 className="lg:text-[32px] lg:leading-[48px] text-[24px] leading-[48px] font-[700] text-blue">
              Built with Flutter.
            </h2>
            <p className="lg:text-[16px] lg:leading-[25px] text-[14px] leading-[24px] font-[500] text-gray">
              To build feastly we used a wide variety of tools to make the app
              as fast and easy to handle as possible.
            </p>
            <p className="lg:text-[16px] lg:leading-[25px] text-[14px] leading-[24px] font-[500] text-gray">
              The idea of the app is to make the tedious task of deciding what
              to eat fun and gamify the whole process.
            </p>
            <p className="lg:text-[16px] lg:leading-[25px] text-[14px] leading-[24px] font-[500] text-gray">
              You simply open the app, choose if you want to swipe on Recipes or
              Restaurants and then connect with your friends to find the perfect
              dish or place to eat.
            </p>
            <p className="flex flex-row gap-[4em]">
              <Image
                src={GooglePlay}
                alt="GooglePlay"
                priority
                width={150}
                className="w-100"
              />
              <Image
                src={AppStore}
                alt="AppStore"
                priority
                width={150}
                className="w-100"
              />
            </p>
          </div>
        </div>
      </div>

      {/* header 3 */}
      <div className="flex flex-col justify-center items-center bg-blue py-[11em]">
        <article className="max-w-[1250px] w-[80%]">
          <h1 className="lg:text-[48px] lg:leading-[72px] text-[28px] leading-[42px] font-[700] text-white max-w-[13em]">
            It does not matter if you just started or if you have a large
            company, we are here to help you.
          </h1>
        </article>
      </div>

      {/* header 4 */}
      <div className="flex justify-center">
        <div className="flex lg:flex-row-reverse flex-col  lg:w-[70%] w-[80%]  items-center justify-between">
          <div className="relative -mt-[11em]">
            <Image
              src={Jelena}
              alt="Jelena"
              priority
              width={554}
              className="w-100"
            />
          </div>
          <div className="lg:max-w-[30em] max-w-[22em]  flex flex-col gap-5">
            <h2 className="lg:text-[32px] lg:leading-[48px] text-[24px] leading-[48px] font-[700] text-blue">
              Jelena Meacham
            </h2>
            <p className="lg:text-[16px] lg:leading-[25px] text-[14px] leading-[24px] font-[500] text-gray">
              One field that we are especially interested in is Fitness. We
              helped Swedish influencer Jelena Meacham with building both her
              website and her app.
            </p>
            <p className="lg:text-[16px] lg:leading-[25px] text-[14px] leading-[24px] font-[500] text-gray">
              At the start of 2021 her app was ranked no 1 on App Stores top
              grossing lists.
            </p>
            <p className="lg:text-[16px] lg:leading-[25px] text-[14px] leading-[24px] font-[500] text-gray">
              The first version of the app was built using React Native which is
              another cross platform framework that we are very used to work
              with.
            </p>
          </div>
        </div>
      </div>

      {/* header 5 */}
      <div className="my-[6em] flex justify-center ">
        <div className="flex lg:flex-row flex-col lg:w-[70%] w-[80%] max-w-[1250px] items-center justify-between">
          <div className="relative">
            <Image src={Ava} alt="Ava" priority width={442} className="w-100" />
          </div>
          <div className="lg:max-w-[30em] max-w-[22em]  flex flex-col gap-5">
            <h2 className="lg:text-[32px] lg:leading-[48px] text-[24px] leading-[48px] font-[700] text-blue">
              AVA stories
            </h2>
            <p className="lg:text-[16px] lg:leading-[25px] text-[14px] leading-[24px] font-[500] text-gray">
              AVA stories was an audio book and podcast app that first started
              as a UI/UX project and later turned into a full development
              project.
            </p>
            <p className="lg:text-[16px] lg:leading-[25px] text-[14px] leading-[24px] font-[500] text-gray">
              The app is focused on womens well being and geared towards audio
              erotics which is a really fast growing area in the tech industry.
            </p>
            <p className="lg:text-[16px] lg:leading-[25px] text-[14px] leading-[24px] font-[500] text-gray">
              When building an app that constantly needs to be updated with new
              fresh content it is important that you build a system for the
              client that is easy to manage.
            </p>
            <p className="lg:text-[16px] lg:leading-[25px] text-[14px] leading-[24px] font-[500] text-gray">
              We used a really user friendly CMS that does not require the
              client to go into the code to update content within the app.
            </p>
          </div>
        </div>
      </div>

      {/* header 6 */}

      <div className="mt-[5em] pt-[5em] flex justify-center bg-gray2">
        <div className="flex lg:flex-row flex-col  lg:w-[65%] w-[80%]  items-center justify-between">
          <div className="max-w-[35em] flex flex-col gap-2">
            <h1 className="lg:text-[48px] lg:leading-[72px] text-[28px] leading-[42px] font-[700] text-white lg:-mr-[8em]">
              <p>We are also proud to </p>
              <p>have many influencers</p>
              <p>and celebrities as clients.</p>
            </h1>
          </div>
          <div className="relative lg:-mr-[34.5em]">
            <Image
              src={Macbook}
              alt="Macbook"
              priority
              width={1220}
              className="w-100"
            />
          </div>
        </div>
      </div>
      <div className="pb-[5em] flex justify-center bg-gray2">
        <div className="flex lg:flex-row flex-col w-[80%]  items-center justify-between">
          <div className="relative">
            <Image
              src={Patric}
              alt="Patric"
              priority
              width={975}
              className="w-100"
            />
          </div>
          <div className="max-w-[35em] flex flex-col gap-2">
            <h2 className="lg:text-[32px] lg:leading-[48px] text-[24px] leading-[48px] font-[700] text-white">
              Patrik Kittel
            </h2>
            <p className="lg:text-[16px] lg:leading-[25px] text-[14px] leading-[24px] font-[500] text-white">
              Patrik Kittel is one of the best horse riders in the world, when
              he came to us with the wish to create a luxurious website and app
              for his fans we were happy to help him.
            </p>
            <p className="lg:text-[16px] lg:leading-[25px] text-[14px] leading-[24px] font-[500] text-white">
              We completely rebuilt his website from scratch creating a
              dashboard that made it easy and pain free to keep his website up
              to date.
            </p>
            <p className="lg:text-[16px] lg:leading-[25px] text-[14px] leading-[24px] font-[500] text-white">
              We also created an App for Patrik so that his fans always can
              follow him when he is out on his competitions and shows.
            </p>
          </div>
        </div>
        ;
      </div>
    </main>
  );
}
