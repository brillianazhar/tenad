import React from "react";
import Footer from "../Footer/Footer";
import { useRouter } from "next/router";
import Navbar from "../Navbar/Navbar";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const AppShell = ({ children }) => {
  const { pathname } = useRouter();
  const disableNavbar = ["/404"];
  const disableFooter = ["/projects/[slug]", "/404"];

  return (
    <main className={`${manrope.className}`}>
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
      {!disableFooter.includes(pathname) && <Footer />}
    </main>
  );
};

export default AppShell;
