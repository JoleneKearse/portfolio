import { NavLink } from "react-router-dom";

type TextLinkProps = {
  text: string;
  tabIndex: number;
  isHamburgerOpen: boolean;
  setIsHamburgerOpen: (isOpen: boolean) => void;
};

export function TextLink({ text, tabIndex, isHamburgerOpen, setIsHamburgerOpen }: TextLinkProps) {
  return (
    <NavLink
      to={text.toLowerCase() === "home" ? "/" : text.toLowerCase()}
      onClick={() => setIsHamburgerOpen(!isHamburgerOpen)} 
      className="inline-block font-semibold tracking-wide hover:text-[#0000] transition ease-in cursor-pointer hover:bg-gradient-to-r from-pink-600 to-purple-500 hover:bg-clip-text hover:font-bold"
      tabIndex={tabIndex}
    >
      {text}
    </NavLink>
  );
}
