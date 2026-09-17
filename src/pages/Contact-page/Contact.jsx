import { useState } from "react";
import Header from "../../components/Home-layout/Header-layout/Header";
import "./Contact-modules.css";
import Footer from "../../components/Home-layout/Footer/Footer";

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <div className="contact-page">
      <Header />
      <main className="contact-main">
        <h1>Contact Us</h1>
        <p>We&apos;d Love to Hear From You!</p>
        <p>
          Have a question about our products, orders, or delivery? Our team is
          here to help.
        </p>

        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            <strong>Email:</strong> support@ecommers.com
          </p>
          <p>
            <strong>Phone:</strong> +92 300 1234567
          </p>
          <p>
            <strong>Address:</strong> Bahawalpur, Pakistan
          </p>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />

            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
            />

            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Enter subject"
              required
            />

            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message"
              rows="5"
              required
            />

            <button type="submit">Send Message</button>
            {sent && <p role="status">Your message has been sent.</p>}
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
