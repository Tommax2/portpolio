import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight, ArrowRightCircle } from "react-bootstrap-icons";
import Port1 from "../img/port1.jpeg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ROTATING_ROLES = ["Web Developer", "Data Analyst", "UI/UX Designer"];

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const i = loopNum % ROTATING_ROLES.length;
    const fullText = ROTATING_ROLES[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    const ticker = setTimeout(() => {
      setText(updatedText);
      if (isDeleting) setDelta((previous) => previous / 2);
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum((previous) => previous + 1);
        setDelta(500);
      }
    }, delta);
    return () => clearTimeout(ticker);
  }, [delta, isDeleting, loopNum, text]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>
                I build digital products that <span className="accent-text">work</span><small className="role-line">Martins Olumi - <span className="wrap">{text}</span></small>
              </h1>
              <p>
                Full-stack developer and data analyst focused on thoughtful interfaces,
                reliable systems, and insights that help businesses move with confidence.
              </p>
              <div className="hero-actions">
                <a className="hero-primary" href="https://wa.me/2348110736175" target="_blank" rel="noreferrer">
                  Start a project <ArrowRightCircle size={22} />
                </a>
                <a className="hero-secondary" href="#/projects">View my work <ArrowRight size={19} /></a>
              </div>
              <div className="hero-proof" aria-label="Professional highlights">
                <div><strong>Full-stack</strong><span>Web products</span></div>
                <div><strong>Data-led</strong><span>Clear insights</span></div>
                <div><strong>Human-first</strong><span>Useful design</span></div>
              </div>
            </motion.div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <motion.div className="hero-portrait"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.img
                src={Port1}
                alt="Martins Olumi"
                loading="lazy"
                animate={{
                  y: [0, -20, 0],
                  rotateZ: [0, 5, 0],
                  rotateX: [0, 10, 0],
                  perspective: 1000,
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transformStyle: "preserve-3d" }}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

