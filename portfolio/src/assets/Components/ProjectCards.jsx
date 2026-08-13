import { Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { ArrowUpRight } from "react-bootstrap-icons";

/* eslint-disable react/prop-types */

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};


export const ProjectCards = ({ title, description, imgUrl, url, techStack, cta }) => {
  return (
    <Col sm={6} lg={4} className="d-flex">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="project-card-wrapper"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} loading="lazy" decoding="async" />
        </div>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{description}</p>
          {techStack && <div className="tech-stack" aria-label="Technologies used">{techStack.split(",").map((tech) => <span key={tech}>{tech.trim()}</span>)}</div>}
          <div className="project-actions">
          <a href={url} target="_blank" rel="noreferrer" className="view-project-link">View project <ArrowUpRight /></a>
          {cta && (
            cta === "WhatsApp me" ? (
              <a href="https://wa.me/2348110736175" target="_blank" rel="noreferrer" className="cta-link whatsapp-link">
                Let&apos;s talk
              </a>
            ) : (
              <a href={url} target="_blank" rel="noreferrer" className="cta-link">
                {cta}
              </a>
            )
          )}
          </div>
        </div>
      </motion.div>
    </Col>
  );
};
