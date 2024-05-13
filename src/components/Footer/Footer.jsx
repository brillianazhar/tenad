import Link from "next/link";
import React from "react";
import Title from "../common/Title";

const Footer = () => {
  return (
    <section className="bg-primary text-primaryLight w-full flex flex-col justify-between gap-y-20 p-5 lg:p-10 selection:text-primaryLight selection:bg-primaryDark">
      <div className="flex flex-col gap-y-3">
        <p className="text-primaryDark text-2xl md:text-3xl lg:text-5xl">
          ©️{new Date().getFullYear()}
        </p>
        <p className="text-4xl md:text-6xl lg:text-8xl">
          BRILLIAN AZHAR DANETTA
        </p>
        <div className="flex gap-x-5 lg:gap-x-10 text-xs md:text-sm lg:text-base">
          <Link
            className="hover:underline"
            target="_blank"
            href={"https://www.facebook.com/brillianazhar.danetta.5/"}
          >
            Facebook
          </Link>
          <Link
            className="hover:underline"
            target="_blank"
            href={"https://www.instagram.com/donatgeprek/"}
          >
            Instagram
          </Link>
          <Link
            className="hover:underline"
            target="_blank"
            href={"https://www.linkedin.com/in/brillianazhar/"}
          >
            Linkedin
          </Link>
          <Link
            className="hover:underline"
            target="_blank"
            href={"https://github.com/brillianazhar"}
          >
            Github
          </Link>
        </div>
      </div>
      <div className="flex">
        <div className="text-sm md:text-base lg:text-lg flex flex-col gap-y-1 md:gap-y-2 lg:gap-y-3">
          <p className="text-primaryDark mb-1">Contact</p>
          <p>Purbalingga, Central Java</p>
          <p>brilianazhardanet@gmail.com</p>
          <p>+6285 842 626 890</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
