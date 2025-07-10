import NextImage from "next/image";
import Link from "next/link";
import clsx from "clsx";
import React from "react";
import ToggleThemeIcon from "@/components/elements/ToggleThemeIcon";
import Image from "next/image";
import Status from "@/components/elements/Status";
import { MdVerified as VerifiedIcon } from "react-icons/md";
import { SocialLink } from "@/components/Introduction";

interface ProfileHeaderProps {
  expandMenu: boolean;
  imageSize: number;
}

export default function ProfileHeader({
  expandMenu,
  imageSize,
}: ProfileHeaderProps) {
  return (
    <div
      className={clsx(
        "flex w-full flex-grow items-center gap-4 lg:flex-col lg:gap-0.5",
        expandMenu && "flex-col !items-start"
      )}>
      <div className="relative hidden w-full flex-col items-center overflow-hidden pb-2 lg:flex">
        <Status />
        <div className="h-24 w-full overflow-hidden rounded-lg dark:brightness-50">
          <NextImage
            src={
              "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="profile"
            width={100}
            height={100}
            className="-ml-4 w-full scale-125"
            priority
          />
        </div>
        <div className="absolute -right-1 bottom-[55px] z-10 rounded-xl py-2 pr-2">
          <ToggleThemeIcon />
        </div>
        <div className="z-10 -mt-11 rounded-full border-2 border-white shadow-md dark:border-neutral-800 overflow-hidden">
          <Image
            src={"/images/avatar.png"}
            alt="profile"
            width={expandMenu ? 80 : imageSize * 0.9}
            height={expandMenu ? 80 : imageSize * 0.9}
            className="lg:hover:scale-105 hover:transition-all duration-300 rounded-full object-cover"
          />
        </div>
      </div>
      <Image
        src={"/images/avatar.png"}
        alt="profile"
        width={expandMenu ? 80 : imageSize * 0.9}
        height={expandMenu ? 80 : imageSize * 0.9}
        className="lg:hidden lg:hover:scale-105 rounded-full"
      />
      <div className="mt-1 flex items-center gap-2">
        <Link href="/" passHref>
          <h2 className="font-sora flex-grow whitespace-nowrap text-lg font-medium lg:text-xl">
            Mika Mada Aprilugari
          </h2>
        </Link>
        <VerifiedIcon size={18} className="text-blue-400" />
      </div>
      <SocialLink name={"@madhaa17"} href={"https://github.com/madhaa17"} />
    </div>
  );
}
