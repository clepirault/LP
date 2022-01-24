import { FC, useState } from "react";
import Link from "next/link";

type Props = {
  nav?: {
    label: string;
    link: string;
  }[];
};

const pages = [
  { label: "Toiles", link: "" },
  { label: "Cartons", link: "/cartons" },
  { label: "Aquarelles", link: "/aquarelles" },
  { label: "Photographies", link: "/photographies" },
  { label: "HR", link: "/hr" },
  { label: "Nouveautés", link: "/nouveautes" },
];

const subPages = [
  { label: "Pochoirs", link: "/pochoirs" },
  { label: "Boulots mixtes", link: "/boulotsmixtes" },
];

const Tabs: FC<Props> = (props) => {
  const { nav } = props;
  const [displaySubPages, setDisplaySubPages] = useState(false);

  return (
    <nav>
      <ul className="flex flex-col text-2xl sm:flex-row sm:justify-evenly sm:text-base">
        {nav?.map((page, index) => (
          <li key={index} className="capitalize sm:hidden">
            <Link href={page.link}>{page.label}</Link>
          </li>
        ))}
        {pages.map((page, index) => (
          <li
            key={index}
            className={`${
              page.label === "Nouveautés" ? "text-newRed" : "text-black"
            } + ${page.label !== "Toiles" ? "hover:text-opacity-50" : ""}`}
            onClick={() => page.label === "Toiles" && setDisplaySubPages(true)}
            onMouseEnter={() =>
              page.label === "Toiles" && setDisplaySubPages(true)
            }
            onMouseLeave={() =>
              page.label === "Toiles" && setDisplaySubPages(false)
            }
          >
            <Link href={page.link}>{page.label}</Link>
            {displaySubPages && (
              <ul className={page.label === "Toiles" ? "block" : "hidden"}>
                {subPages.map((subPage, index) => (
                  <li key={index} className="text-black hover:text-opacity-50">
                    <Link href={subPage.link}>{subPage.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Tabs;
