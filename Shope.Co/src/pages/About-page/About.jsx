import Header from "../../components/Home-layout/Header-layout/Header";
import Footer from "../../components/Home-layout/Footer/Footer";
import "./about-modules.css";

function About() {
  return (
    <div className="about-page">
      <Header />
      <main className="about-main">
        <h1>About SHOPE.CO</h1>

        <p>
          Welcome to our online store! We are dedicated to providing
          high-quality products at affordable prices.
        </p>

        <section className="about-section">
          <h2>Who We Are</h2>
          <p>
            We are an online e-commerce store that makes shopping easy,
            convenient, and enjoyable. Our goal is to offer a wide range of
            products and provide a great shopping experience.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide quality products, competitive prices, fast
            delivery, and excellent customer service.
          </p>
        </section>

        <section className="about-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>High-quality products</li>
            <li>Affordable prices</li>
            <li>Fast and reliable delivery</li>
            <li>Easy and secure shopping</li>
            <li>Friendly customer support</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Thank You</h2>
          <p>
            Thank you for choosing our store. We look forward to serving you and
            making your online shopping experience better.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;
