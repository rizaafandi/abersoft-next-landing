"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  type link = {
    label: string;
    href: string;
  };
  const links: link[] = [
    {
      label: "home",
      href: "/",
    },
    {
      label: "services",
      href: "/services",
    },
    {
      label: "about us",
      href: "/about",
    },
    {
      label: "references",
      href: "/references",
    },
    {
      label: "contact",
      href: "/contact",
    },
  ];

  const [isNavbarShow, setNavbarShow] = useState(false);
  const path = usePathname();

  return (
    <nav className="block">
      <div className="flex flex-col bg-white z-10 text-[18px] leading-[27px] m-0 text-gray ">
        <div className="lg:hidden p-5  flex justify-end w-full fixed bg-white z-10">
          <span
            className="text-end text-xl cursor-pointer hover:text-blue select-none"
            onClick={() => setNavbarShow(!isNavbarShow)}
          >
            {isNavbarShow ? <>&#9587;</> : <>&#8801;</>}
          </span>
        </div>
        <div
          className={`lg:relative fixed items-center justify-evenly w-full lg:h-[100px] h-screen z-10 bg-white lg:mt-0 mt-[68px] transition-all ${
            isNavbarShow ? "flex" : "hidden lg:flex"
          }`}
        >
          <ul className="lg:flex lg:flex-row flex-col lg:w-[80%] w-full lg:justify-between justify-center list-none gap-10">
            {links.map((l, i) => {
              return (
                <li key={i} className="text-center my-5">
                  <Link
                    href={l.href}
                    className={`capitalize ${
                      path == l.href ? "text-blue font-[700]" : ""
                    }`}
                    onClick={() => setNavbarShow(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
