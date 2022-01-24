import { FC } from "react";
import Link from "next/link";

export const pages = [
  { label: "à propos", link: "/about" },
  { label: "contact", link: "/contact" },
];

const Nav: FC = () => {
  return (
    <nav>
      <ul className="flex flex-col items-end sm:gap-4 sm:flex-row">
        {pages.map((page, index) => (
          <li key={index} className="capitalize sm:hover:underline">
            <Link href={page.link}>{page.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
