"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Header/Navbar";

export const LayoutProvider = ({ children }: any) => {
  const pathname = usePathname();

  const condition = pathname === "/signin" || pathname === "/signup";

  return (
    <>
      {!condition && <Navbar />}
      {children}
    </>
  );
};
