import { Outlet, useLocation } from "react-router-dom";
import TrailsProvider from "../sections/trails-section/TrailsContext";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import ScrollToTop from "./ScrollToTop";
// import ScrollToHashElement from '@cascadia-code/scroll-to-hash-element';
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import { useEffect } from "react";

function Layout() {
  // const { hash } = useLocation();
  // useEffect(() => {
  //   if (hash) {
  //     const targetElement = document.getElementById(hash.replace('#', ''));
  //     // if (targetElement) {
  //     // targetElement.scrollIntoView({ behavior: smooth });
  //     // }
  //   }
  // }, [hash]);

  // have a sticky navbar on homepage but not on other page
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-w-[320px]  scroll-smooth bg-zinc-50 font-sans">
      <ScrollToTop />
      <ScrollToHashElement />
      <Navbar isSticky={isHomePage} />
      <TrailsProvider>
        <Outlet />
      </TrailsProvider>
      <Footer />
    </div>
  );
}

export default Layout;
