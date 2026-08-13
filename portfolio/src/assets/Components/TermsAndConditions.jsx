import { Container } from "react-bootstrap";

export const TermsAndConditions = () => (
  <section className="legal-page">
    <Container>
      <a href="#/" className="legal-back" aria-label="Return to the home page">
        <span aria-hidden="true">←</span> Back to Home
      </a>

      <header className="legal-header">
        <span className="eyebrow">Legal</span>
        <h1>Terms and Conditions</h1>
        <p className="legal-updated">Last updated: August 13, 2026</p>
        <p>Please read these terms carefully before using this portfolio website.</p>
      </header>

      <h2>Agreement to Terms</h2>
      <p>By accessing or using this website, you agree to these Terms and Conditions. If you do not agree, please do not use the website.</p>

      <h2>Purpose of This Website</h2>
      <p>This personal portfolio showcases projects, skills, services, and professional information. Its content is provided for general informational purposes.</p>

      <h2>Intellectual Property</h2>
      <p>Unless otherwise stated, the text, images, branding, and design on this website belong to the site owner and are protected by applicable intellectual-property laws. You may share links to the website, but you may not reproduce or distribute its content without permission.</p>

      <h2>Acceptable Use</h2>
      <ul>
        <li>Use the website lawfully and respectfully.</li>
        <li>Do not attempt to disrupt, damage, hack, or misuse the website.</li>
        <li>Do not submit harmful, misleading, unlawful, or abusive messages.</li>
      </ul>

      <h2>Third-Party Links</h2>
      <p>This website may link to third-party services or websites. Those links are provided for convenience. I do not control their content, availability, or privacy practices, and you use them at your own risk.</p>

      <h2>Disclaimer</h2>
      <p>The website is provided &ldquo;as is&rdquo; without warranties of any kind. Although I aim to keep its information accurate and current, I do not guarantee its completeness, reliability, or availability.</p>

      <h2>Limitation of Liability</h2>
      <p>To the fullest extent permitted by law, I will not be liable for indirect, incidental, or consequential loss arising from access to or use of this website.</p>

      <h2>Changes to These Terms</h2>
      <p>I may revise these Terms and Conditions when necessary. The updated date above will show when the latest revision took effect. Continued use of the website means you accept the revised terms.</p>

      <h2>Contact</h2>
      <p>For questions about these terms, return to the <a href="#/">home page</a> and use the contact form.</p>
    </Container>
  </section>
);
