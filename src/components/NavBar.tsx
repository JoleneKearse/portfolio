import Logo from "/logo.webp";
import { TextLink } from "./TextLink";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";

export function NavBar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-10 h-24 w-full bg-purple-950a pt-6 backdrop-blur-2xl md:w-5/6">
      <div className="flex h-12 w-full items-center justify-between">
        <a href="https://jolenekearse.dev/">
          <img src={Logo} alt="logo" className="w-10 md:w-12" />
        </a>
        <div className={`md:hidden ${isHamburgerOpen ? "hidden" : "block"}`}>
          <button
            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
            className=""
          >
            <RxHamburgerMenu size="2em" className="mr-6" />
          </button>
        </div>
        <div
          className={`flex gap-4 md:gap-6 lg:gap-10 ${
            isHamburgerOpen
              ? "absolute bottom-0 top-0 block h-screen w-screen flex-col items-center justify-center bg-purple-950b backdrop-blur-2xl"
              : "hidden"
          } md:flex`}
        >
          {isHamburgerOpen && (
            <a href="https://jolenekearse.dev/">
              <img src={Logo} alt="logo" className="w-10 md:w-12" />
            </a>
          )}
          <TextLink
            text="Home"
            tabIndex={1}
            isHamburgerOpen={isHamburgerOpen}
            setIsHamburgerOpen={setIsHamburgerOpen}
          />
          <TextLink
            text="Skills"
            tabIndex={3}
            isHamburgerOpen={isHamburgerOpen}
            setIsHamburgerOpen={setIsHamburgerOpen}
          />
          <TextLink
            text="Projects"
            tabIndex={4}
            isHamburgerOpen={isHamburgerOpen}
            setIsHamburgerOpen={setIsHamburgerOpen}
          />
          <TextLink
            text="Contact"
            tabIndex={5}
            isHamburgerOpen={isHamburgerOpen}
            setIsHamburgerOpen={setIsHamburgerOpen}
          />
          {isHamburgerOpen && (
            <button onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>
              <IoCloseCircleOutline size="2em" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
