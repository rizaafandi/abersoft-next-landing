import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/Logo_white.png";

export default function Footer() {
  return (
    <div className="flex lg:flex-row flex-col py-[3em] bg-blue text-white justify-around gap-5">
      <div className="flex lg:flex-row flex-col justify-evenly lg:max-w-[60em] lg:w-[90%] gap-5">
        <section className="lg:py-0 py-[2em] ]">
          <p className="font-[700] leading-[27px] p-[.55em] lg:text-left text-center">
            Our Services
          </p>
          <p className="font-[500] lg:text-left text-center p-[.55em]">
            <Link href="/">App Development</Link>
          </p>
          <p className="font-[500] lg:text-left text-center p-[.55em]">
            <Link href="/">Websites</Link>
          </p>
          <p className="font-[500] lg:text-left text-center p-[.55em]">
            <Link href="/">UI/UX Design</Link>
          </p>
          <p className="font-[500] lg:text-left text-center p-[.55em]">
            <Link href="/">Ongoing Consultation</Link>
          </p>
        </section>
        <section className="lg:py-0 py-[2em]">
          <p className="font-[700] leading-[27px] p-[.55em] lg:text-left text-center">
            Documents
          </p>
          <p className="font-[500] lg:text-left text-center p-[.55em]">
            <Link href="/">Terms & Conditions</Link>
          </p>
          <p className="font-[500] lg:text-left text-center p-[.55em]">
            <Link href="/">Privacy Policy</Link>
          </p>
        </section>
        <section className="lg:py-0 py-[2em]">
          <p className="font-[700] leading-[27px] p-[.55em] lg:text-left text-center">
            Inhouse
          </p>
          <p className="font-[500] lg:text-left text-center p-[.55em]">
            <Link href="/">Haunted House AR</Link>
          </p>
          <p className="font-[500] lg:text-left text-center p-[.55em]">
            <Link href="/">Work with us</Link>
          </p>
        </section>
      </div>

      <div className="flex flex-col justify-evenly lg:max-w-[20em] lg:w-[90%]">
        <section className="max-w-[15em] mx-auto lg:py-0 py-[2em]">
          <p className="font-[700] leading-[27px] p-[.55em] lg:text-right text-center hidden lg:block">
            Address
          </p>
          <p className="font-[700] leading-[27px] p-[.55em] lg:text-right text-center block lg:hidden">
            Sweden
          </p>
          <p className="font-[500] leading-[27px] lg:text-right text-center p-[.55em]">
            Kometvägen 3 183 33 TÄBY Stockholm, Sweden
          </p>
        </section>
        <section className="max-w-[15em] mx-auto lg:py-0 py-[2em]">
          <p className="font-[700] leading-[27px] p-[.55em] lg:text-right text-center block lg:hidden">
            Indonesia
          </p>
          <p className="font-[500] leading-[27px] lg:text-right text-center p-[.55em]">
            Kampung Yadika Regency Blok H Nomer 4 Pasuruan, Indonesia
          </p>
        </section>
        <div className="pt-2 max-w-[15em] mx-auto flex justify-center">
          <Image src={Logo} alt="Logo" priority className="w-3/5" />
        </div>
      </div>
    </div>
  );
}
