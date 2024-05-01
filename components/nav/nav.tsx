import React from "react";
import Image from "next/image";
import { navButtonData } from "@/data/pageData";
import NavButton from "./navButton";
import NavDropdownButton from "./navDropdownButton";

const Nav = () => {
  return (
    <nav className="navbar fixed-top">
      <div className="container sm:px-4 lg:px-8 flex flex-wrap items-center justify-between lg:flex-nowrap">
        <a
          className="inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline"
          href="index.html"
        >
          <Image
            src={"/asset/images/logo.svg"}
            className="h-8"
            alt="alternative"
            width={100}
            height={100}
          />
        </a>

        <button
          className="background-transparent rounded text-xl leading-none hover:no-underline focus:no-underline lg:hidden lg:text-gray-400"
          type="button"
          data-toggle="offcanvas"
        >
          <span className="navbar-toggler-icon inline-block w-8 h-8 align-middle"></span>
        </button>

        <div
          className="navbar-collapse offcanvas-collapse lg:flex lg:flex-grow lg:items-center"
          id="navbarsExampleDefault"
        >
          <ul className="pl-0 mt-3 mb-2 ml-auto flex flex-col list-none lg:mt-0 lg:mb-0 lg:flex-row">
            {navButtonData.map((value, index) =>
              value.type === "default" ? (
                <NavButton
                  key={index}
                  title={value.title}
                  href={value.href}
                  isHome={value.isHome}
                />
              ) : value.type === "dropdown" && value.item ? (
                <NavDropdownButton
                  key={index}
                  title={value.title}
                  item={value.item}
                />
              ) : (
                ""
              )
            )}
          </ul>
          {/* <span className="block lg:ml-3.5">
            <a className="no-underline" href="#your-link">
              <i className="fab fa-apple text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200 mr-1.5"></i>
            </a>
            <a className="no-underline" href="#your-link">
              <i className="fab fa-android text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200"></i>
            </a>
          </span> */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
