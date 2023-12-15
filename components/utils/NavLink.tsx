import Link from "next/link";
import React from "react";

type TNavLink = {
  href: string;
  target?: string;
  children: any;
};

const NavLink: React.FC<TNavLink> = ({ href, target = "_self", children }) => {
  return (
    <Link
      href={href}
      target={target}
      className={`text-white text-base leading-6 font-medium bg-transparent rounded-md px-3 py-2 hover:bg-[#7f56d9]`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
