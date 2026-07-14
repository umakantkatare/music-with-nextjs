"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed inset-x-0 top-10 z-50 mx-auto max-w-2xl", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"/courses"}>
          {" "}
          <MenuItem setActive={setActive} active={active} item="Courses">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/all-courses">All Courses</HoveredLink>
              <HoveredLink href="/interface-design">
                Basic Music Theory
              </HoveredLink>
              <HoveredLink href="/seo">Advanced Composition</HoveredLink>
              <HoveredLink href="/branding">Songwriting</HoveredLink>
              <HoveredLink href="/branding">Music Production</HoveredLink>
            </div>
          </MenuItem>
        </Link>
        <Link href={"/contact-us"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us   "
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
