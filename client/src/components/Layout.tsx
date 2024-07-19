import { useState } from "react";
import { Outlet } from "react-router-dom";

import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export function Layout() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  return (
    <>
      <NavBar isHamburgerOpen={isHamburgerOpen} setIsHamburgerOpen={setIsHamburgerOpen} />
      <Outlet />
      <Footer />
    </>
  )
}