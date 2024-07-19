import Logo from "/logo.webp";
import { TextLink } from "./TextLink";

type NavBarProps = {
  isHamburgerOpen: boolean;
  setIsHamburgerOpen: (isOpen: boolean) => void;
};

export function NavBar({ isHamburgerOpen, setIsHamburgerOpen }: NavBarProps) {
  return (
    <nav className="sticky flex items-center justify-between px-2 py-4 md:px-6 lg:px-20 md:py-6 lg:py-10">
      <div>
        <img src={Logo} alt="logo" className="w-24 md:w-12" />
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
          className="text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isHamburgerOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16m-7 6h7"
              }
            />
          </svg>
        </button>
      </div>
      <div className="flex gap-4 md:gap-6 lg:gap-10">
        <TextLink text="Home" />
        <TextLink text="About" />
        <TextLink text="Skills" />
        <TextLink text="Projects" />
        <TextLink text="Contact" />
      </div>
    </nav>
  );
}
