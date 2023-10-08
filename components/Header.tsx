import Image from "next/image";
import Navbar from "./Navbar/Navbar";
import Button from "./Button/page";
import { Element } from ".";

const Header = () => {
  return (
    <header className="relative  overflow-hidden">
      <div className="absolute top-24">
        <Element />
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between py-[2rem]">
        <Image
          src="/logo.png"
          alt="logo"
          width={160}
          height={41}
          className="md:ml-[8rem]"
        />
        <Navbar />

      </div>
      

      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center md:justify-between ">

        <div className="flex  flex-col md:w-[27.8125rem] md:h-[21.125rem] flex-shrink-0 md:flex-1 md:ml-[2rem]  items-center ">
          <h1 className="text-center md:text-start text-4xl md:text-[3rem] font-[700] leading-[2.5rem] md:leading-[3.5rem] text-black w-[20rem] md:w-[27.6875rem] md:h-[7rem] mb-[1rem] mt-10 md:mt-0">
            Virtual healthcare for you
          </h1>
          <p className="text-[#7D7987] text-center text-2xl md:text-[1.3125rem] font-[300] leading-[2rem] w-[28rem] h-[6rem] md:text-left mb-[3rem]">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>

          <Button
            text="Consult today"
            Styles="text-white font-[700] text-[1.125rem] bg-[#458FF6] leading-[3.75rem] relative md:right-32 transition ease-in-out delay-150 hover:border border-[#458FF6] hover:text-[#458FF6] hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-300 "
          />
        </div>
        <div className="flex-1 mt-[3rem] md:mt-0">
          <Image
            src="/trafalgar-header illustration 1.png"
            width={693}
            alt=""
            height={598}
            className="flex-shrink-0"
          />
        </div>
      </div>


    </header>
  );
};

export default Header;
