import Logo from "/logo.webp";

import { Link } from "./Link";

export function NavBar() {
  return (
    <nav className="sticky flex items-center justify-between px-2 py-4 md:px-6 lg:px-20 md:py-6 lg:py-10">
      <div>
        <img src={Logo} alt="logo" className="w-24 md:w-12" />
      </div>
      <div className="flex gap-4 md:gap-6 lg:gap-10">
        <Link text="Home" />
        <Link text="About" />
        <Link text="Skills" />
        <Link text="Projects" />
        <Link text="Contact" />
      </div>
    </nav>
  );
}
