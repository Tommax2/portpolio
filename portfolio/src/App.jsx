import "./App.css";
import { useEffect, useState } from "react";
import { NavBar } from "./assets/Components/NavBar";
import { Banner } from "./assets/Components/Banner";
import { Skill } from "./assets/Components/Skill";
import "bootstrap/dist/css/bootstrap.min.css";
import { Projects } from "./assets/Components/Projects";
import { Footer } from "./assets/Components/Footer";
import { Contact } from "./assets/Components/Contact";
import { TermsAndConditions } from "./assets/Components/TermsAndConditions";
import { PrivacyPolicy } from "./assets/Components/PrivacyPolicy";
import { Experience } from "./assets/Components/Experience";
import { LiveBackground } from "./assets/Components/LiveBackground";
import { AnimatePresence, motion } from "framer-motion";

const getNormalizedPath = () => {
  const rawHash = window.location.hash.replace("#", "");
  return rawHash ? (rawHash.startsWith("/") ? rawHash : `/${rawHash}`) : "/";
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
          {page}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default App;
