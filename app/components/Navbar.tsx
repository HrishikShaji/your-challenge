"use client";

import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import { usePathname } from "next/navigation";

const navLinks = [
  { id: 1, name: "Product", path: "/product" },
  { id: 2, name: "Download", path: "/download" },
  { id: 3, name: "Pricing", path: "/pricing" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => path === pathname;

  return (
    <div className="w-full p-4 bg-neutral-100 flex fixed top-0  z-50 justify-between items-center">
      <Link href="/" className="text-2xl font-semibold text-orange-500">
        YourChallenge
      </Link>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" text-black sm:hidden"
        >
          {isOpen ? <IoMdCloseCircle /> : <GiHamburgerMenu />}
        </button>
        <div className="hidden sm:flex gap-4">
          {navLinks.map((item) => (
            <Link
              href={item.path}
              key={item.id}
              className={`${isActive(item.path) ? "border-b-2 border-orange-500" : ""} hover:text-orange-500 `}
            >
              {item.name}
            </Link>
          ))}
        </div>
        {isOpen && (
          <div className="absolute shadow-2xl rounded-3xl sm:hidden overflow-hidden flex flex-col -bottom-32 right-0 bg-orange-500">
            {navLinks.map((item) => (
              <Link
                href={item.path}
                key={item.id}
                className="hover:bg-orange-400 py-2 px-5"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
