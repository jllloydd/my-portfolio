import React from "react";
import Link from "next/link";
import Image from "next/image";
import github from "../../../public/icons/github.svg";
import facebook from "../../../public/icons/facebook.svg";
import linkedin from "../../../public/icons/linkedin.svg";
import instagram from "../../../public/icons/instagram.svg";

const socials = [
  {
    id: 1,
    icon: github,
    alt: "github icon",
    link: "https://https://github.com/jllloydd",
  },
  {
    id: 2,
    icon: facebook,
    alt: "facebook icon",
    link: "https://www.facebook.com/jlloydd",
  },
  {
    id: 3,
    icon: instagram,
    alt: "instagram icon",
    link: "https://www.instagram.com/janllong/",
  },
  {
    id: 4,
    icon: linkedin,
    alt: "linkedin icon",
    link: "https://www.linkedin.com/in/john-lloyd-de-guzman-312300306/",
  },
];

export default function MobileSocials() {
  return (
    <div className=" md:hidden block  fixed z-50 bottom-5 left-0 right-0">
      <div className="flex items-center justify-center mx-auto  w-3/4 py-4 px-4 bg-[#020F1F] rounded-lg shadow-[0_3px_8px_3px_rgba(30,229,86,0.3)]">
        <ul className="flex items-center gap-5">
          {socials.map((social) => (
            <li key={social.id}>
              <Link href={social.link} target="_blank">
                <Image
                  src={social.icon}
                  width={24}
                  height={24}
                  alt={social.alt}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
