import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

const experience = [
  {
    period: "Present",
    role: "Technology Support",
    company: "International Institute of Tropical Agriculture (IITA)",
    summary: "Supporting day-to-day technology needs and contributing practical digital solutions in an international agricultural research environment.",
    skills: ["IT support", "Digital solutions", "Team collaboration", "Problem-solving"],
  },
  {
    period: "2024 - Present",
    role: "Full-Stack Developer",
    company: "Independent / Remote",
    summary: "I design and build responsive websites, e-commerce experiences, and custom web applications that help growing brands serve their customers better.",
    skills: ["React", "Node.js", "MongoDB", "Payment integration"],
  },
  {
    period: "2023 - Present",
    role: "Data Analyst",
    company: "Independent Projects",
    summary: "I turn raw data into clear dashboards, useful reports, and practical insights that support confident business decisions.",
    skills: ["Excel", "SQL", "Power BI", "Data storytelling"],
  },
  {
    period: "2022 - Present",
    role: "UI/UX and Frontend Designer",
    company: "Selected Client Work",
    summary: "I create accessible, mobile-first interfaces that combine strong visual design with simple and intuitive user journeys.",
    skills: ["Figma", "Responsive design", "Prototyping", "Accessibility"],
  },
];

export const Experience = () => (
  <section className="experience" id="experience">
    <Container>
      <header className="experience-hero">
        <span className="eyebrow">Experience</span>
        <h1>Where I’ve worked and what I’ve built.</h1>
        <p>A look at my experience across IT support, web development, data analysis, and product design.</p>
      </header>

      <div className="experience-list">
        {experience.map((item, index) => (
          <motion.article
            className="experience-row"
            key={`${item.company}-${item.role}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <div className="experience-card-top">
              <span className="experience-period">{item.period}</span>
            </div>
            <div className="experience-content">
              <div className="experience-title">
                <h2>{item.role}</h2>
                <p className="experience-company">{item.company}</p>
              </div>
              <p className="experience-description">{item.summary}</p>
              <div className="skill-tags">
                {item.skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Container>
  </section>
);
