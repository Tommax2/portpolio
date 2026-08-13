import "./App.css";
import { lazy, Suspense, useEffect, useState } from "react";
import { NavBar } from "./assets/Components/NavBar";
import { Banner } from "./assets/Components/Banner";
import { Skill } from "./assets/Components/Skill";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./assets/Components/Footer";
import { Contact } from "./assets/Components/Contact";
import { LiveBackground } from "./assets/Components/LiveBackground";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "react-bootstrap-icons";

const Projects = lazy(() => import("./assets/Components/Projects").then((module) => ({ default: module.Projects })));
const Experience = lazy(() => import("./assets/Components/Experience").then((module) => ({ default: module.Experience })));
const TermsAndConditions = lazy(() => import("./assets/Components/TermsAndConditions").then((module) => ({ default: module.TermsAndConditions })));
const PrivacyPolicy = lazy(() => import("./assets/Components/PrivacyPolicy").then((module) => ({ default: module.PrivacyPolicy })));

const getNormalizedPath = () => {
  const rawHash = window.location.hash.replace("#", "");
  return rawHash.startsWith("/") ? rawHash : "/";
};

function App() {
  const [normalizedPath, setNormalizedPath] = useState(getNormalizedPath);
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"));

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const onHashChange = () => setNormalizedPath(getNormalizedPath());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [normalizedPath]);

  useEffect(() => {
    const updateScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      document.documentElement.style.setProperty("--scroll-progress", `${Math.min(progress, 100)}%`);
      document.documentElement.dataset.hasScrolled = window.scrollY > 500 ? "true" : "false";
    };
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, [normalizedPath]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  let page;

  if (normalizedPath === "/terms-and-conditions") {
    page = <><TermsAndConditions /><Footer /></>;
  } else if (normalizedPath === "/privacy-policy") {
    page = <><PrivacyPolicy /><Footer /></>;
  } else if (normalizedPath === "/experience") {
    page = <><NavBar theme={theme} onToggleTheme={toggleTheme} /><main className="experience-page"><Experience /></main><Footer /></>;
  } else if (normalizedPath === "/projects") {
    page = <><NavBar theme={theme} onToggleTheme={toggleTheme} /><main className="projects-page"><Projects /></main><Footer /></>;
  } else {
    page = <><NavBar theme={theme} onToggleTheme={toggleTheme} /><Banner /><Skill /><Contact /><Footer /></>;
  }

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <LiveBackground />
      <AnimatePresence mode="wait">
        <motion.div
          className={`page-scene ${normalizedPath.includes("privacy") || normalizedPath.includes("terms") ? "page-scene-legal" : ""}`}
          key={normalizedPath}
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <Suspense fallback={<div className="route-loader" role="status" aria-label="Loading page"><span /></div>}>
            {page}
          </Suspense>
        </motion.div>
      </AnimatePresence>
      <button className="back-to-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">
        <ArrowUp size={19} />
      </button>
    </>
  );
}

export default App;
