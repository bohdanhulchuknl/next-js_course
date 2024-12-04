"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="">
      <h1>WELCOME</h1>
      <div>
        <h2>ROUTER</h2>
        <button onClick={() => router.push("products")}>Products</button>
      </div>
    </div>
  );
}
