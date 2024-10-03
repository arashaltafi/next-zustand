import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-16">
      <Link
        href="/counter"
        className="btn-rose"
      >
        Counter
      </Link>
      <Link
        href="/global"
        className="btn-rose"
      >
        Global
      </Link>
    </div>
  )
}
