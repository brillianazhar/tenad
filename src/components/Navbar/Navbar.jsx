import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { slideLeft, slideUp } from "./animation";

const Navbar = () => {
  const { pathname } = useRouter();
  const [navMobile, setNavMobile] = useState(false);
  const itemNav = [
    {
      name: "Home",
      src: "/",
    },
    {
      name: "About",
      src: "/about",
    },
    {
      name: "Projects",
      src: "/projects",
    },
  ];

  const clicked = () => {
    setTimeout(() => {
      setNavMobile((state) => !state);
    }, 100);
  };

  return (
    <main className="selection:text-primaryLight selection:bg-primary max-w-full">
      {/* Navbar */}
      <div className="hidden fixed px-10 pt-5 w-full lg:flex justify-between items-center z-50">
        <div className="w-12 h-12">
          <Link href={"/"}>
            <Image
              src={"/image/tenadLogo.svg"}
              alt="logo"
              width={100}
              height={100}
              priority
              className="w-12 h-12"
            />
          </Link>
        </div>
        <div>
          <ul className="flex felx-col items-center justify-center text-primaryLight gap-x-10">
            <li>
              <Link
                href={"/"}
                className={`${
                  pathname === "/" ? "border-b-2 border-primary" : ""
                } hover:text-primary`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/about"}
                className={`${
                  pathname === "/about" ? "border-b-2 border-primary" : ""
                } hover:text-primary`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={"/projects"}
                className={`${
                  pathname === "/projects" ? "border-b-2 border-primary" : ""
                } hover:text-primary`}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden fixed px-5 pt-3 w-full flex justify-between items-center z-50">
        <div className="w-7 h-7">
          <Link href={"/"}>
            <Image
              src={"/image/tenadLogo.svg"}
              alt="logo"
              width={100}
              height={100}
              priority
              className="w-12 h-12"
            />
          </Link>
        </div>
        <div
          onClick={() => setNavMobile((state) => !state)}
          className="flex items-center justify-center"
        >
          <div className="flex flex-col gap-y-2">
            <div className="w-7 h-1 bg-primaryLight"></div>
            <div className="w-7 h-1 bg-primaryLight"></div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {navMobile && (
            <motion.div
              variants={slideLeft}
              initial="initial"
              animate="animate"
              exit="exit"
              className="lg:hidden flex flex-col fixed justify-between items-end w-full h-screen z-[51] bg-primary left-0 top-0 p-5"
            >
              <div className="overflow-hidden flex items-center justify-center">
                <motion.div
                  variants={slideUp}
                  initial="initial"
                  animate="open"
                  exit="closed"
                  custom={1}
                  onClick={() => setNavMobile((state) => !state)}
                  className="flex flex-col gap-y-[15px] p-2"
                >
                  <div className="w-7 h-1 rotate-45 origin-top-left bg-primaryLight"></div>
                  <div className="w-7 h-1 -rotate-45 origin-bottom-left bg-primaryLight"></div>
                </motion.div>
              </div>
              <div className="w-full h-full flex flex-col items-center justify-between">
                <div className="w-full h-full flex justify-center items-center">
                  <ul className="flex flex-col items-end gap-y-10 text-5xl font-bold">
                    {itemNav.map((item, i) => {
                      return (
                        <div key={i} className="overflow-hidden">
                          <motion.li
                            onClick={clicked}
                            variants={slideUp}
                            initial="initial"
                            animate="open"
                            exit="closed"
                            custom={i}
                          >
                            <Link
                              href={item.src}
                              className={`${
                                pathname === item.src
                                  ? "line-through decoration-4"
                                  : ""
                              }`}
                            >
                              {item.name}
                            </Link>
                          </motion.li>
                        </div>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <p className="text-primaryLight font-bold">10AD</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Navbar;
