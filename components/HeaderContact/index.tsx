"use client";
import { GithubLogo, IconWeight, LinkedinLogo } from "@phosphor-icons/react";
import Link from "next/link";

const icon = {
  color: "#18181b",
  weight: "fill" as IconWeight,
  size: 20,
};

const contact = [
  {
    icon: <GithubLogo {...icon} />,
    "aria-label": "Luiz Henrique's GitHub Profile",
    href: "https://github.com/lui7henrique",
  },
  {
    icon: <LinkedinLogo {...icon} />,
    "aria-label": "Luiz Henrique's LinkedIn Profile",
    href: "https://www.linkedin.com/in/luiz-henrique7/",
  },
];

export const HeaderContact = () => {
  return (
    <div className="flex">
      {contact.map((social) => {
        return (
          <Link href={social.href} key={social["aria-label"]} target="_blank">
            <div className="p-2 hover:bg-zinc-100 transition-all rounded-lg">
              {social.icon}
            </div>
          </Link>
        );
      })}
    </div>
  );
};
