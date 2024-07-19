import { useState } from "react";
import { Outlet } from "react-router-dom";

import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export function Layout() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  return (
    <div className="px-2 py-4 md:px-6 lg:px-20 md:py-6 lg:py-10">
      <NavBar isHamburgerOpen={isHamburgerOpen} setIsHamburgerOpen={setIsHamburgerOpen} />
      <Outlet />
      <Footer />
    </div>
  )
}