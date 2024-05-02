"use client";

import Link from "next/link";
import { useState } from "react";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  const [nav, setNav] = useState(false);

  return (
    <section className=" flex flex-row ">
      <button
        className={`${
          nav ? "text-white" : " text-black"
        } absolute top-5 right-5 z-20 sm:hidden`}
        onClick={() => setNav(!nav)}
      >
        a
      </button>

      <nav
        className={`h-screen w-full sm:w-auto bg-gray-800 px-4 py-10 absolute inset-0 sm:static sm:flex ${
          nav ? "flex" : "hidden"
        } flex-col justify-between`}
      >
        <Link
          href="/dashboard"
          onClick={() => setNav(false)}
          className=" text-center bg-transparent text-white font-semibold text-xl md:text-4xl"
        >
          Kurum İletişim
        </Link>
        <div className=" flex flex-col gap-4">
          <Link
            onClick={() => setNav(false)}
            href="/auth"
            className=" text-xl font-semibold rounded-xl px-2 py-4 bg-white flex w-full justify-center items-center hover:bg-gray-200"
          >
            auth
          </Link>
          <Link
            onClick={() => setNav(false)}
            href="/dashboard/users"
            className=" text-xl font-semibold rounded-xl px-2 py-4 bg-white flex w-full justify-center items-center hover:bg-gray-200"
          >
            kullanıcılar
          </Link>
          <Link
            onClick={() => setNav(false)}
            href="/dashboard/tasks"
            className=" text-xl font-semibold rounded-xl px-2 py-4 bg-white flex w-full justify-center items-center hover:bg-gray-200"
          >
            görevler
          </Link>
          <Link
            onClick={() => setNav(false)}
            href="/dashboard/meetings"
            className=" text-xl font-semibold rounded-xl px-2 py-4 bg-white flex w-full justify-center items-center hover:bg-gray-200"
          >
            toplantılar
          </Link>
          <Link
            onClick={() => setNav(false)}
            href="/dashboard/points"
            className=" text-xl font-semibold rounded-xl px-2 py-4 bg-white flex w-full justify-center items-center hover:bg-gray-200"
          >
            puanlar
          </Link>
        </div>
        <div>
          <Link
            onClick={() => setNav(false)}
            href="/"
            className="bg-red-600 text-white text-xl font-semibold rounded-xl px-2 py-4 flex w-full justify-center items-center "
          >
            çıkış yap
          </Link>
        </div>
      </nav>

      <div className=" flex-1 ">{children}</div>
    </section>
  );
}
