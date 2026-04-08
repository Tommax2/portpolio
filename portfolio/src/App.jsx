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

const getNormalizedPath = () => {
  const rawHash = window.location.hash.replace("#", "");
  return rawHash ? (rawHash.startsWith("/") ? rawHash : `/${rawHash}`) : "/";
};

function App() {
  const [normalizedPath, setNormalizedPath] = useState(getNormalizedPath);

  useEffect(() => {
    const onHashChange = () => setNormalizedPath(getNormalizedPath());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  if (normalizedPath === "/terms-and-conditions") {
    return (
      <>
        <TermsAndConditions />
        <Footer />
      </>
    );
  }

  if (normalizedPath === "/privacy-policy") {
    return (
      <>
        <PrivacyPolicy />
        <Footer />
      </>
    );
  }

  return (
    <>
      <NavBar />
      <Banner />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
