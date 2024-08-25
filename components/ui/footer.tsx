"use client";
import { Footer } from "flowbite-react";
import { Dribbble, Facebook, Github, Instagram, Twitter } from "lucide-react";
import Button from "./button";

const Footers = () => {
  return (
    <Footer className="bg-section_bg_2 rounded-none pt-32 relative">
      <div className="w-full text-white">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Company" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Careers</Footer.Link>
              <Footer.Link href="#">Brand Center</Footer.Link>
              <Footer.Link href="#">Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="help center" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Discord Server</Footer.Link>
              <Footer.Link href="#">Twitter</Footer.Link>
              <Footer.Link href="#">Facebook</Footer.Link>
              <Footer.Link href="#">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="download" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">iOS</Footer.Link>
              <Footer.Link href="#">Android</Footer.Link>
              <Footer.Link href="#">Windows</Footer.Link>
              <Footer.Link href="#">MacOS</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between bg-section_bg_7">
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={Facebook} />
            <Footer.Icon href="#" icon={Instagram} />
            <Footer.Icon href="#" icon={Twitter} />
            <Footer.Icon href="#" icon={Github} />
            <Footer.Icon href="#" icon={Dribbble} />
          </div>
        </div>
      </div>

      <div className="absolute -top-1/2 left-1/2  transform -translate-x-1/2 translate-y-1/2 w-3/4 mx-auto bg-secondary_1 flex justify-between p-20 gap-6">
        <p className="text-3xl font-bold font-sans tracking-wider text-white">
          Buy medical disposable face mask to protect your loved ones
        </p>
        <button className="relative text-black flex  h-[50px] w-52 items-center justify-center border border-border_color_7 hover:border-black overflow-hidden bg-white  shadow-2xl transition-all before:absolute before:h-0 before:w-0  hover:text-white before:rounded-full before:bg-section_bg_7 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56">
          <span className="relative z-10 font-sans text-lg font-semibold">
            Explore Now
          </span>
        </button>
      </div>
    </Footer>
  );
};

export default Footers;
