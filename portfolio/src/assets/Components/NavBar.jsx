import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaMoon, FaSun } from "react-icons/fa";

/* eslint-disable react/prop-types */

export const NavBar = ({ theme, onToggleTheme }) => {
  const [activeLink, setActiveLink] = useState("/");
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onHashChange = () => setActiveLink((window.location.hash || "#/").replace("#", ""));
    onHashChange();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const selectLink = (value) => {
    setActiveLink(value);
    setExpanded(false);
  };

  return (
    <Navbar expand="lg" expanded={expanded} onToggle={setExpanded} className={`${scrolled ? "scrolled" : ""} navbar-glass`}>
      <div className="navbar-shell">
        <Navbar.Brand href="#/" className="brand-lockup" onClick={() => selectLink("/")}>
          <img src={`${import.meta.env.BASE_URL}logo-transparent-small.png`} alt="Tommax - Developing your imaginations" className="site-logo" width="475" height="300" decoding="async" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navigation" aria-label="Toggle navigation" />
        <Navbar.Collapse id="main-navigation">
          <Nav className="me-auto">
            <Nav.Link href="#/" className={activeLink === "/" ? "active navbar-link" : "navbar-link"} onClick={() => selectLink("/")}>Home</Nav.Link>
            <Nav.Link href="#Skill" className={activeLink === "Skill" ? "active navbar-link" : "navbar-link"} onClick={() => selectLink("Skill")}>Skills</Nav.Link>
            <Nav.Link href="#/experience" className={activeLink === "/experience" ? "active navbar-link" : "navbar-link"} onClick={() => selectLink("/experience")}>Experience</Nav.Link>
            <Nav.Link href="#/projects" className={activeLink === "/projects" ? "active navbar-link" : "navbar-link"} onClick={() => selectLink("/projects")}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <button type="button" className="theme-toggle" onClick={onToggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
              {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
            <a className="vvd nav-contact" href="https://wa.me/2348110736175" target="_blank" rel="noreferrer">{"Let's connect"}</a>
          </span>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
