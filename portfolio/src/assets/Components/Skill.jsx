import { Col, Container, Row } from 'react-bootstrap';
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaMobileAlt, FaDatabase, FaChartLine, FaServer } from "react-icons/fa";

export const Skill = () => {
    const skills = [
        { label: "Web Development", icon: FaCode, color: "#aa367c", stack: ["HTML", "CSS", "JavaScript", "Git"] },
        { label: "Web Design", icon: FaPaintBrush, color: "#4a2fbd", stack: ["Figma", "Wireframing", "Prototyping", "Design Systems"] },
        { label: "UI/UX Design", icon: FaMobileAlt, color: "#aa367c", stack: ["User Research", "Responsive UI", "Accessibility", "Usability"] },
        { label: "Frontend Development", icon: FaDatabase, color: "#4a2fbd", stack: ["React", "Bootstrap", "Framer Motion", "REST APIs"] },
        { label: "Data Analysis", icon: FaChartLine, color: "#aa367c", stack: ["Excel", "SQL", "Power BI", "Data Storytelling"] },
        { label: "Backend Development", icon: FaServer, color: "#4a2fbd", stack: ["Node.js", "Express", "MongoDB", "API Integration"] },
    ];

    return (
        <section className='skill' id='Skill'>
            <Container>
                <Row>
                    <Col>
                        <motion.div
                            className='skill-bx'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="eyebrow">What I do</span>
                            <h2>Skills I use to bring ideas to life.</h2>
                            <p>From interface design to backend systems and data analysis, I use the right tools to build practical, reliable digital products.</p>
                            <div className='skill-slider'>
                                {skills.map(({ label, icon: Icon, color, stack }, index) => (
                                    <motion.div
                                        className='item'
                                        key={label}
                                        initial={{ opacity: 0, y: 18 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        whileHover={{ y: -6, scale: 1.03 }}
                                        transition={{ duration: 0.3, delay: index * 0.04 }}
                                    >
                                        <Icon size={58} color={color} />
                                        <h5>{label}</h5>
                                        <div className="skill-stack" aria-label={`${label} technology stack`}>
                                            {stack.map((technology) => <span key={technology}>{technology}</span>)}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
