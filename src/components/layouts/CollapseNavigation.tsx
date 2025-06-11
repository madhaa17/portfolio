import { MENU_ITEMS } from "@/common/constant/menu";
import Image from "next/image";

import React, { useState } from "react";
import Profile from "./sidebar/Profile";
import ToggleThemeIcon from "../elements/ToggleThemeIcon";
import MenuItem from "./sidebar/MenuItem";
import Link from "next/link";

export default function CollapseNavigation() {
  const [isHover, setIsHover] = useState(false);
  const filterdMenu = MENU_ITEMS?.filter((item) => item?.isShow);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="fixed bottom-0 left-0 top-0 z-30 hidden w-16 flex-col items-center justify-between overflow-hidden rounded-r-2xl px-2 py-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-all duration-500 hover:w-64 hover:items-stretch hover:p-4 hover:transition-all hover:duration-500 dark:shadow-neutral-800 lg:flex">
      <div>
        <div
          className={`flex h-64 ${isHover ? "items-start" : "items-center"}`}>
          {isHover ? (
            <Profile />
          ) : (
            <div className="flex flex-col items-center gap-8">
              <div className="z-10 rounded-full border-2 border-white shadow-md dark:border-neutral-800">
                <Image
                  src={"/images/avatar.png"}
                  alt="profile"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <ToggleThemeIcon />
            </div>
          )}
        </div>
        <nav className="mb-6 mt-4 flex flex-col gap-3 border-t border-neutral-300 pt-4">
          {filterdMenu.map((item, index) => (
            <MenuItem key={index} {...item} isHover={isHover} />
          ))}
        </nav>
      </div>

      {/* <Link
        href={"https://github.com/codebayu/www.codebayu.com"}
        target="_blank"
        className={`font-sora text-sm text-neutral-600 transition-all duration-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 lg:flex ${
          isHover
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-4"
        }`}>
        Open Source by @codebayu
      </Link> */}
    </div>
  );
}
