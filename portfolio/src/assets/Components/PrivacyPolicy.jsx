import { Container } from "react-bootstrap";

export const PrivacyPolicy = () => (
  <section className="legal-page">
    <Container>
      <a href="#/" className="legal-back" aria-label="Return to the home page">
        <span aria-hidden="true">←</span> Back to Home
      </a>

      <header className="legal-header">
        <span className="eyebrow">Legal</span>
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: August 13, 2026</p>
        <p>This policy explains what information this portfolio may collect and how it is handled.</p>
      </header>

      <h2>Information You Provide</h2>
      <p>When you use the contact form, you may provide your first and last name, email address, phone number, and message. The email address and message are required so I can receive and respond to your enquiry.</p>

      <h2>How Your Information Is Used</h2>
      <ul>
        <li>To respond to enquiries and discuss potential projects.</li>
        <li>To maintain relevant communication records.</li>
        <li>To prevent spam, misuse, or security problems.</li>
      </ul>

      <h2>Contact-Form Processing</h2>
      <p>The contact form is submitted through Formspree, a third-party form-processing service. Information you submit is sent to Formspree so it can deliver your message. Formspree processes that information under its own privacy terms.</p>

      <h2>Hosting and Technical Data</h2>
      <p>The website host may automatically process limited technical information, such as your IP address, browser type, request time, and requested pages. This information may be used to deliver the site, maintain reliability, and detect abuse.</p>

      <h2>Cookies and Local Storage</h2>
      <p>This website stores your light or dark theme preference in your browser&apos;s local storage. The site does not currently use advertising cookies or its own analytics cookies. Third-party services you open from this website may use their own technologies.</p>

      <h2>Sharing of Information</h2>
      <p>I do not sell or rent your personal information. Information is shared only with service providers needed to operate the website or when disclosure is required by law.</p>

      <h2>Data Retention</h2>
      <p>Contact details and messages are kept only for as long as reasonably necessary to respond, maintain relevant business records, resolve disputes, or meet legal obligations.</p>

      <h2>Data Security</h2>
      <p>Reasonable safeguards are used to protect your information. However, no internet transmission or electronic-storage method can be guaranteed to be completely secure.</p>

      <h2>Your Choices</h2>
      <p>You may ask to access, correct, or delete personal information you submitted, subject to any information that must be retained for legitimate or legal reasons.</p>

      <h2>External Links</h2>
      <p>This portfolio links to services such as GitHub, LinkedIn, WhatsApp, and project websites. Their privacy practices are governed by their own policies.</p>

      <h2>Changes to This Policy</h2>
      <p>This policy may be updated when the website or its services change. The date above indicates when the latest version took effect.</p>

      <h2>Contact</h2>
      <p>For privacy questions or requests, use the <a href="#connect">contact form</a>.</p>
    </Container>
  </section>
);
