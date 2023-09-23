import Image, { StaticImageData } from "next/image";
import PhoneImage from "@/public/images/Image_Phonbe.png";
import Other1 from "@/public/images/Other_1.png";
import Other2 from "@/public/images/Other_2.png";
import Other3 from "@/public/images/Other_3.png";
import Other4 from "@/public/images/Other_4.png";
import Other5 from "@/public/images/Other_5.png";
import Other6 from "@/public/images/Other_6.png";

export default function Home() {
  type content = {
    image: StaticImageData;
    title: string;
    content: string;
  };

  let contents: content[] = [
    {
      title: "App Development",
      content:
        "We help you build native and cross-platform apps. We have helped clients reach Top Grossing apps with over 400 million downloads world wide.",
      image: Other1,
    },
    {
      title: "Websites",
      content:
        "We work with all the most common websites systems such as Wordpress and WooCommerce. But we also build websites from scratch for you.",
      image: Other2,
    },
    {
      title: "MVP & Prototype",
      content:
        "If you have an MVP that you need help getting developed or an idea of a prototype, let us know and we will assist you with the whole process.",
      image: Other3,
    },
    {
      title: "UI/UX Design",
      content:
        "Besides development we also have a great team of UI/UX designers that will take your old design to a whole new level or create new one from scratch.",
      image: Other4,
    },
    {
      title: "Consultant",
      content:
        "We can also provide you with an ongoing consultant that will be a great addition to your already established team.",
      image: Other5,
    },
    {
      title: "Software Systems",
      content:
        "We work with all kinds of software technologies such as Unity, Strapi & other useful integrations that will help you and your company.",
      image: Other6,
    },
  ];

  return (
    <main>
      {/* header */}
      <div className="mt-[5em] flex justify-center">
        <div className="flex lg:flex-row-reverse flex-col w-[80%] items-center justify-center">
          <div className="relative">
            <Image
              src={PhoneImage}
              alt="Phone Image"
              priority
              width={750}
              className="w-100"
            />
          </div>
          <div className="max-w-[35em] flex flex-col gap-2">
            <h1 className="lg:text-[48px] lg:leading-[72px] text-[28px] leading-[42px] font-[700] text-blue">
              We help you build the tech solutions of the future.
            </h1>
            <h3 className="lg:text-[24px] lg:leading-[36px] text-[18px] leading-[27px] font-[400] text-gray">
              When you need help with development or design we are here to
              create the best solutions for you. With over a decade of
              experience in software development.
            </h3>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="mt-[5em] flex justify-center items-center">
        <div className="grid lg:grid-cols-[1fr,1fr,1fr] grid-cols-[1fr] gap-[2em] justify-center items-center w-[80%] max-w-[1250px]">
          {contents.map((c, i) => {
            return (
              <section
                key={i}
                className="lg:max-w-[300px] max-w-[28em] flex flex-col justify-center m-auto"
              >
                <Image
                  src={c.image}
                  alt={c.title}
                  priority
                  width={300}
                  className="w-100"
                />
                <h2 className="lg:text-[32px] lg:leading-[48px] text-[24px] leading-[48px] font-[700] text-blue mb-[0.6em]">
                  {c.title}
                </h2>
                <p className="lg:text-[16px] lg:leading-[25px] text-[14px] leading-[24px] font-[500] text-gray">
                  {c.content}
                </p>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
