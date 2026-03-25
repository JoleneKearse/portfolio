import { Outlet, useLocation } from "react-router-dom";

import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export function Layout() {
  const { pathname } = useLocation();
  const isProjectsListPage = pathname === "/projects";

  
  return (
    <div className="px-2 py-4 md:px-6 lg:px-20 md:py-6 lg:py-10">
      <NavBar />
      <main
        className={`mx-auto my-20 w-full ${
          isProjectsListPage ? "max-w-5xl" : "max-w-prose"
        }`}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
