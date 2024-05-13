import Image from "next/image";
import Link from "next/link";
import React from "react";

const Error = () => {
  return (
    <div className="bg-primaryDark w-full h-screen flex flex-col gap-y-10 items-center justify-center">
      <div className="flex justify-center items-end">
        <div className="relative">
          <Image
            src={"/image/404Image.png"}
            alt="404"
            width={300}
            height={300}
            className="w-[100px] md:w-[200px] xl:w-[300px]"
          />
        </div>
        <p className="text-primaryLight text-[75px] md:text-[140px] xl:text-[200px] leading-none font-bold">
          404
        </p>
      </div>
      <div className="flex flex-col gap-y-5 items-center justify-center">
        <p className="text-primaryLight text-xl md:text-2xl xl:text-3xl">{`Go Back! We're facing the BOSS`}</p>
        <Link href={"/"}>
          <div className="bg-primary text-primaryLight flex items-center justify-center text-xs xl:text-sm px-4 py-2 rounded-lg hover:brightness-75 transition-all duration-200">
            HOME
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Error;
