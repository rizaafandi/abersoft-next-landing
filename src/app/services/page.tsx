import Image from "next/image";
import Bear from "@/public/images/jelly_bear.png";

export default function Services() {
  type content = {
    title: string;
    headline: string;
    content: string;
  };

  let contents: content[] = [
    {
      title: "App Development",
      headline:
        "With over 10 years of experience of creating apps on both Android and iOS we can create the perfect app for you.",
      content:
        "We have built app portfolios with over 400 million downloads world wide ranging from AR Games to complicated business apps. We always strive to build apps with the latest technology and that will be easy for our clients to manage and handle in the future. We use frameworks such as React Native and Flutter to create amazing cross platform applications.",
    },
    {
      title: "Websites",
      headline:
        "Having a professional website can sometimes be the difference between getting a new client or not.",
      content:
        "With long experience of creating websites both from scratch and using many frameworks such as Wordpress, WooCommerce and other platforms we can create the perfect website for you. We always try making the website as smooth and fast as possible with the right SEO to help you get found online.",
    },
    {
      title: "UI/UX Design",
      headline:
        "If your tech is like the brain, design is like the heart. In order to get clients to fall in love with your product you need to have great design in place.",
      content:
        "We know design can be tricky so we are here to assist you creating beautiful UI/UX Design following the latest trends and designs. We always use industry standard softwares such as Figma, Adobe and Photoshop.",
    },
    {
      title: "Consultants",
      headline:
        "For already established companies we offer ongoing consultants at unbeatable prices.",
      content:
        "Sometimes you do not need or want to employ a full time worker because it is more flexible with an ongoing consultant. We can offer a wide variety of services ranging from really cost effective remote consultants with Swedish project management to on site Swedish developers.",
    },
  ];

  return (
    <main className="flex flex-col">
      {/* header */}
      <div className="mt-[5em] flex justify-center items-center">
        <div className="flex lg:flex-row-reverse flex-col  lg:w-[70%] w-[80%]  items-center justify-between">
          <div className="relative">
            <Image
              src={Bear}
              alt="Bear Jelly"
              priority
              width={500}
              className="w-100"
            />
          </div>
          <div className="max-w-[35em] flex flex-col gap-2">
            <h1 className="lg:text-[48px] lg:leading-[72px] text-[28px] leading-[42px] font-[700] text-blue">
              We make your ideas become reality.
            </h1>
            <h3 className="lg:text-[24px] lg:leading-[36px] text-[18px] leading-[27px] font-[400] text-gray">
              Whether or not you are an established company or a new start up,
              we will create the solution you need.
            </h3>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="my-[10em] grid lg:grid-cols-[1fr,1fr] grid-cols-[1fr] gap-[10em]  lg:w-[60%] w-[80%]  items-center justify-center m-auto">
        {contents.map((c, i) => {
          return (
            <section key={i} className="flex flex-col gap-5 m-auto">
              <h2 className="lg:text-[32px] lg:leading-[48px] text-[24px] leading-[48px] font-[700] text-blue">
                {c.title}
              </h2>
              <p className="lg:text-[16px] lg:leading-[25px] text-[14px] leading-[24px] font-[700] text-gray">
                {c.headline}
              </p>
              <p className="lg:text-[16px] lg:leading-[25px] text-[14px] leading-[24px] font-[500] text-gray">
                {c.content}
              </p>
            </section>
          );
        })}
      </div>
    </main>
  );
}
