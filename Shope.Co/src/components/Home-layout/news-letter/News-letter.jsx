import { useState } from "react";
import "./news-letter.css";

function NewsLetter() {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubscribed(true);
  }

  return (
    <div>
      <section className="emaildiv" aria-labelledby="newsletter-title">
        <h2 className="emaildiv1" id="newsletter-title">
          STAY UPTO DATE ABOUT
          <br />
          OUR LATEST OFFERS
        </h2>
        <form className="email-form" onSubmit={handleSubmit}>
          <label className="email-field">
            <span className="emailimg" aria-hidden="true">
              &#9993;
            </span>
            <span className="sr-only">Email address</span>
            <input
              className="emaildiv2"
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </label>
          <button className="emaildiv3" type="submit">
            Subscribe to Newsletter
          </button>
          {subscribed && <p role="status">You are subscribed. Thank you!</p>}
        </form>
      </section>
    </div>
  );
}

export default NewsLetter;
