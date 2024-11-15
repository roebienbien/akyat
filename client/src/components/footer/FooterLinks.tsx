import React from "react";
import { IFooterLinks } from "./footer-links";

export default function FooterLinks({ title, links }: IFooterLinks) {
  return (
    <div>
      <span className="text-sm font-bold md:text-2xl lg:text-3xl">{title}</span>
      <ul className="mt-4 flex flex-col space-y-4">
        {links.map((link, key) => (
          <a
            key={key}
            href={link.src}
            target="_blank"
            className="cursor-pointer text-xs underline md:text-sm lg:text-base"
          >
            {link.title}
          </a>
        ))}
      </ul>
    </div>
  );
}
