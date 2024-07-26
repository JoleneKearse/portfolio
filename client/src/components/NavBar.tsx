import Logo from "/logo.webp";
import { TextLink } from "./TextLink";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseCircleOutline } from "react-icons/io5";

type NavBarProps = {
  isHamburgerOpen: boolean;
  setIsHamburgerOpen: (isOpen: boolean) => void;
};

export function NavBar({ isHamburgerOpen, setIsHamburgerOpen }: NavBarProps) {
  return (
    <nav className="fixed top-0 w-5/6 h-24 bg-purple-950a backdrop-blur-2xl">
      <div className="flex items-center justify-between w-full h-12">
        <img src={Logo} alt="logo" className="w-10 md:w-12" />
        <div className={`md:hidden ${isHamburgerOpen ? "hidden" : "block"}`}>
          <button
            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
            className=""
          >
            <RxHamburgerMenu size="2em" />
          </button>
        </div>
        <div
          className={`flex gap-4 md:gap-6 lg:gap-10 ${
            isHamburgerOpen
              ? "block bg-neutral-950 w-screen h-screen flex-col justify-center items-center"
              : "hidden"
          } md:flex`}
        >
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
