"use client";
import { navlinks } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";
import { socials } from "@/constants/socials";
import { Badge } from "./Badge";
import { AnimatePresence, motion } from "motion/react";
import { IconLayoutSidebarRightCollapse } from "@tabler/icons-react";
import { isMobile } from "@/lib/utils";

export const Sidebar = () => {
  const [open, setOpen] = useState(isMobile() ? false : true);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            exit={{ x: -200 }}
            className="px-8 z-[100] py-10 bg-neutral-100 w-[19rem] fixed lg:relative h-screen left-0 flex flex-col justify-between"
          >
            <div className="flex-1">
              <SidebarHeader />
              <Navigation setOpen={setOpen} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className="fixed lg:hidden bottom-4 right-4 h-8 w-8 border border-neutral-200 rounded-full backdrop-blur-sm flex items-center justify-center z-50"
        onClick={() => setOpen(!open)}
      >
        <IconLayoutSidebarRightCollapse className="h-4 w-4 text-secondary" />
      </button>
    </>
  );
};

export const Navigation = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex flex-col space-y-8 my-14 relative z-[100]">
      {navlinks.map((link: Navlink) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => isMobile() && setOpen(false)}
            className={twMerge(
            "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2.5 px-4 rounded-md text-sm w-full",
            isActive(link.href) && "bg-white shadow-lg text-primary"
            )}
          >
            <Icon
              className={twMerge(
                "h-4 w-4 flex-shrink-0",
                isActive(link.href) && "text-sky-500"
              )}
            />
            <span>{link.label}</span>
          </Link>
        );
      })}

    </div>
  );
};

const SidebarHeader = () => {
  return (
    <div className="flex flex-col items-center text-center">
       <div className="w-40 h-40 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src="/images/G1andme.png"
            alt="PotatoPi"
            height={160}
            width={160}
            className="
              w-40 h-40
              rounded-full
              object-cover
              object-center
              transition-transform
              duration-300
              hover:scale-110
            "
          />
        </div>

      <div className="flex flex-col items-center mt-4">
        <p className="font-bold text-primary text-3xl">
          PotatoPi
        </p>

        <p className="text-secondary text-[12px] mt-3 leading-relaxed max-w-[210px]">
          I hope you can accept nature as she is.
        </p>
      </div>
    </div>
  );
};


