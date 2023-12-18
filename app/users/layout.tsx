import Navbar from "@/components/Header/Navbar";
import React from "react";

const UsersLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="px-1 md:px-3 lg:px-28">{children}</main>
    </>
  );
};

export default UsersLayout;
