import React from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="bg-white px-4 flex full-width justify-between pt-3 pb-2 font-extralight border-b border-gray-200">
      <Image alt="logo" width={60} height={60} src="/logo.png" />
      <div className="flex gap-2 items-center">
        <Bars3BottomLeftIcon width={25} />
        <button className=" font-extralight px-2 py-2 h-min border border-sky-400 rounded-md flex items-center gap-2">
          ورود / عضویت
          <UserIcon width={25} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
