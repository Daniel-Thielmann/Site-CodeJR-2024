"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/img/logoCode.svg";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/aboutus", label: "Sobre Nós" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/contact", label: "Contato" },
  { href: "/blog", label: "Blog" },
];

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <header
      className={`w-full sticky top-0 left-0 right-0 z-20 transition-all duration-500 ease-in-out ${
        isNavOpen ? "pb-10" : "pb-0" 
      }`}
    >
      <div className="bg-white justify-between md:py-4 px-4 mx-auto lg:max-w-7x1 md:items-center md:flex md:px-8">
        <nav className="flex w-full items-center">
          <div className="hidden md:flex gap-8">
            {links.map((link, index) => (
              <Link href={link.href} key={index}>
                <span className="text-xl font-semibold hover:bg-purple-500 hover:text-white p-2 transition-all duration-300 rounded-lg">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
          {/* MOBILE */}
          <div className="md:hidden w-full">
            <div className="flex">
              {isNavOpen ? (
                <X
                  onClick={toggleNav}
                  className="w-10 h-10 cursor-pointer hover:bg-white/20 transition-all duration-200 rounded-xl"
                />
              ) : (
                <div className="flex gap-4">
                  <Menu
                    onClick={toggleNav}
                    className="w-12 h-12 cursor-pointer"
                  />
                </div>
              )}
            </div>
          </div>

          <Link
            href="/"
            className="flex items-center ml-auto hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={logo}
              alt="Logo Code"
              width={904}
              height={904}
              className="w-[200px] md:h-[40px] md:w-[100px] ml-auto"
            />
          </Link>
        </nav>
      </div>

      {isNavOpen && (
        <div className="md:hidden flex basis-full flex-col items-center gap-6 bg-white">
          {links.map((link, index) => (
            <Link href={link.href} key={index}>
              <span className="text-2xl font-semibold hover:bg-purple-500 hover:text-white p-2 rounded-2xl transition-all duration-300">
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
