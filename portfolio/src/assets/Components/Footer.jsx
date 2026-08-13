import { Col, Row, Container } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  const baseUrl = import.meta.env.BASE_URL || "/";
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6} className="text-center text-sm-start footer-brand">
            <img src={`${import.meta.env.BASE_URL}logo-transparent-small.png`} alt="Tommax" className="site-logo footer-site-logo" width="475" height="300" loading="lazy" decoding="async" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/Tommax2" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub size={20} /></a>
              <a href="https://www.linkedin.com/in/tomisin-olumi-1024773a6" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
              <a href="https://wa.me/2348110736175" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp size={20} /></a>
            </div>
            <div className="footer-links">
              <a href={`${baseUrl}#/terms-and-conditions`}>Terms and Conditions</a>
              <a href={`${baseUrl}#/privacy-policy`}>Privacy Policy</a>
            </div>
            <p>© 2026 Martins (Tommax). All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
