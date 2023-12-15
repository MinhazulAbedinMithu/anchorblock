import React from "react";
import navLogo from "@/public/navLogo.png";
import Image from "next/image";
import Link from "next/link";
import imgAvatar from "@/assets/avatar.png";
import iconSearch from "@/assets/icons/search.png";
import iconSettings from "@/assets/icons/settings.png";
import iconNotification from "@/assets/icons/bell.png";
import NavIconItem from "./NavIconItem";
import NavLink from "../utils/NavLink";

type TNavItem = { title: string; slug: string };
const navList: TNavItem[] = [
  { title: "Home", slug: "/" },
  { title: "Users", slug: "/users" },
  { title: "Projects", slug: "/" },
  { title: "Tasks", slug: "/" },
  { title: "Reporting", slug: "/" },
];

const Navbar = () => {
  return (
    <nav className="bg-[#6941C6] flex-center-between px-28 py-4">
      <div className="flex-center-start gap-x-3">
        <Link href="/">
          <div className="flex-center-start gap-x-2">
            <Image src={navLogo} alt="Stack" />
            <span className="text-xl text-white font-bold leading-normal w-[96px]">
              Stack
            </span>
          </div>
        </Link>
        <ul className="flex-center-start">
          {navList.map((navItem: TNavItem) => (
            <li key={navItem.slug}>
              <NavLink href={navItem.slug}>{navItem.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <ul className="flex-center-end gap-4">
        <NavIconItem icon={iconSearch} />
        <NavIconItem icon={iconSettings} />
        <NavIconItem icon={iconNotification} />
        <NavIconItem icon={imgAvatar} />
      </ul>
    </nav>
  );
};

export default Navbar;
