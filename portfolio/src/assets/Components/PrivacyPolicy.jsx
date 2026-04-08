import { Container } from "react-bootstrap";

export const PrivacyPolicy = () => {
  return (
    <section className="legal-page">
      <Container>
        <h1>Privacy Policy</h1>
        <a href="#/" className="d-inline-block mb-3">
          ← Back to Home
        </a>
        <p>Last updated: April 8, 2026</p>

        <h2>Overview</h2>
        <p>
          This Privacy Policy explains how this portfolio website collects, uses,
          and protects your information when you visit the site or contact me.
        </p>

        <h2>Information I Collect</h2>
        <ul>
          <li>
            <strong>Contact details you provide:</strong> name, email, phone
            number, and message (when you submit the contact form or reach out).
          </li>
          <li>
            <strong>Usage information:</strong> basic technical data such as
            device/browser type, pages viewed, and approximate location, which
            may be collected through hosting logs and analytics.
          </li>
        </ul>

        <h2>How I Use Your Information</h2>
        <ul>
          <li>To respond to your inquiries and communicate with you.</li>
          <li>To improve site performance, content, and user experience.</li>
          <li>To prevent spam, abuse, or security issues.</li>
        </ul>

        <h2>Cookies and Analytics</h2>
        <p>
          This site may use cookies or similar technologies for basic
          functionality and analytics. You can control cookies through your
          browser settings.
        </p>

        <h2>Sharing of Information</h2>
        <p>
          I do not sell your personal information. Information may be processed
          by third-party service providers used to operate this website (for
          example hosting, email, or analytics) only as needed to provide their
          services.
        </p>

        <h2>Data Retention</h2>
        <p>
          Messages and contact details are retained only as long as necessary to
          respond to your request and keep relevant communication records.
        </p>

        <h2>Security</h2>
        <p>
          Reasonable measures are used to help protect your information, but no
          method of transmission or storage is 100% secure.
        </p>

        <h2>Your Choices</h2>
        <p>
          You can request access, correction, or deletion of the personal
          information you submitted by contacting me.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this Privacy Policy, please contact me via
          the contact section on this website.
        </p>
      </Container>
    </section>
    
  
  );
};
