import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../img/contact.jpeg";
import { motion } from "framer-motion";

// Replace with your Formspree form ID from formspree.io
const FORMSPREE_URL = "https://formspree.io/f/xbdbblgw";

export const Contact = () => {
  const FormInitialDetails = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(FormInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formDetails.email || !formDetails.message) {
      setStatus({ success: false, message: "Please fill in all required fields." });
      return;
    }

    setButtonText("Sending...");
    setIsSending(true);
    setStatus({});

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: `${formDetails.firstname} ${formDetails.lastname}`.trim(),
          email: formDetails.email,
          phone: formDetails.phone,
          message: formDetails.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setFormDetails(FormInitialDetails);
        setStatus({ success: true, message: "Message sent successfully!" });
      } else {
        const errorMsg = result?.errors?.map((e) => e.message).join(", ") || "Something went wrong.";
        setStatus({ success: false, message: errorMsg });
      }
    } catch {
      setStatus({ success: false, message: "Network error. Please check your connection and try again." });
    } finally {
      setButtonText("Send");
      setIsSending(false);
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img src={contactImg} alt="Contact Us" />
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2>Let's Collaborate</h2>
              <p className="mb-4">
                Have a project in mind or just want to say hi? My inbox is always open. I'll get
                back to you as soon as possible!
              </p>
              <form onSubmit={handleSubmit}>
                <Row className="mt-3">
                  <Col md={6}>
                    <input
                      type="text"
                      value={formDetails.firstname}
                      placeholder="First Name"
                      onChange={(e) => onFormUpdate("firstname", e.target.value)}
                    />
                  </Col>
                  <Col md={6}>
                    <input
                      type="text"
                      value={formDetails.lastname}
                      placeholder="Last Name"
                      onChange={(e) => onFormUpdate("lastname", e.target.value)}
                    />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col md={12}>
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email Address"
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                    />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col md={12}>
                    <input
                      type="tel"
                      value={formDetails.phone}
                      placeholder="Phone Number"
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                    />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col md={12}>
                    <textarea
                      rows="6"
                      value={formDetails.message}
                      placeholder="Message"
                      onChange={(e) => onFormUpdate("message", e.target.value)}
                    />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col md={12}>
                    <button type="submit" disabled={isSending}>
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                </Row>

                {status.message && (
                  <Row className="mt-3">
                    <Col md={12}>
                      <p className={status.success ? "success" : "danger"}>{status.message}</p>
                    </Col>
                  </Row>
                )}
              </form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
