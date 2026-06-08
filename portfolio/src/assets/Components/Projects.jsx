import { Tab } from "react-bootstrap";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { ProjectCards } from "./ProjectCards";
import { motion } from "framer-motion";
import Jais from "../img/logo.jpeg";
import camera3 from "../img/camera3.jpg";
import Machine from "../img/machine.jpeg";
import background from "../img/background-optimized.jpg";
import TransformedAcademy from "../img/thetransformed.jpeg";
import Funora from "../img/funora.png";
import Alatike from "../img/alatike.svg";
import Riikys from "../img/riikys.jpg";

export const Projects = () => {
  const projects = [
    {
      title: "Rikkys Perfume",
      description: "A responsive perfume e-commerce website where customers can explore fragrances and enjoy a polished, easy-to-use shopping experience.",
      techStack: "React, JavaScript, Responsive Design, E-commerce",
      cta: "WhatsApp me",
      imgUrl: Riikys,
      url: "https://rikkys-perfume.vercel.app/",
    },
    {
      title: "Alatike Pro",
      description: "A responsive bridal beauty website showcasing makeup and gele services, a filterable gallery, virtual consultations, and an easy booking experience.",
      techStack: "React, Responsive Design, Booking Integration",
      cta: "WhatsApp me",
      imgUrl: Alatike,
      url: "https://alatikepro.com",
    },
    {
      title: "Fundora Media",
      description: "A responsive media platform featuring talent booking, authoring, blogging, and crowdfunding tools in one user-friendly experience.",
      techStack: "React, REST API Backend",
      cta: "WhatsApp me",
      imgUrl: Funora,
      url: "https://www.fundoramedia.com",
    },
    {
      title: "TheTransformedMeAcademy",
      description: "A responsive language-learning program website that helps students discover courses, explore learning opportunities, and enroll in programs.",
      techStack: "React, Node.js, Express, MongoDB, Stripe, Redux",
      cta: "WhatsApp me",
      imgUrl: TransformedAcademy,
      url: "https://thetransformedmeacademy.com",
    },
    {
      title: "JaisTechworld",
      description: "A personal portfolio website showcasing projects and skills, built with a focus on modern web development practices and responsive design.",
      techStack: "React, JavaScript, HTML, CSS, Bootstrap, Framer Motion",
      cta: "Open for projects",
      imgUrl: Jais,
      url: "https://jaistechworld.com",
    },
    {
      title: "EverythingByBecky",
      description: "A full e-commerce online store for selling nails and other beauty products, complete with product categorization, a secure checkout process, and a mobile-first approach.",
      techStack: "React, Node.js, Express, MongoDB, PayPal, Redux",
      cta: "WhatsApp me",
      imgUrl: background,
      url: "https://everythingbybecky.onrender.com",
    },
  ];

  const designProjects = [
    {
      title: "camera design demo",
      description: "UI/UX Design",
      imgUrl: camera3,
      url: "https://tommax2.github.io/camera/",
    },
    {
      title: "Industrial Landing Page demo",
      description: "Web Design",
      imgUrl: Machine,
      url: "https://tommax2.github.io/Engineering-website-/",
    },
  ];

  return (
    <section className="project" id="Projects">
      <Container>
        <Row>
          <Col>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2>Featured Projects</h2>
              <p>Explore a selection of my recent work, showcasing my expertise in building robust, scalable, and visually stunning web applications. Each project represents a unique challenge solved with modern technology.</p>
            </motion.div>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-item-center" id="pills-tab">
              <Nav.Item>
                <Nav.Link eventKey="first">Web Apps</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">UI/UX Design</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Future Projects</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey ="first">
                <Row className="g-4">
                  {projects.map((project) => (
                    <ProjectCards key={project.url} {...project} />
                  ))}
                </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <Row className="g-4">
                      {designProjects.map((project) => {
                        return (
                          <ProjectCards key={project.url} {...project} />
                        );
                      })}
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>I am always open to new opportunities and collaborations. If you have a project in mind, feel free to reach out!</p>
                </Tab.Pane>
            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
