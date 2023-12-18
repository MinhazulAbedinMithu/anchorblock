"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const router = useRouter();
  const { token } = useSelector((state: any) => state.auth);
  useEffect(() => {
    if (!token) {
      router.replace("/signin");
    }
  }, []);

  return (
    <main className="">
      <h2>Home</h2>
    </main>
  );
}
