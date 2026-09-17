import { useState } from "react";
import "./rate-customer.css";
import fiveStar from "../pictures/5star.png";

const customers = [
  {
    name: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "James L.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    name: "Daniel R.",
    review:
      "Great experience from start to finish! I found some amazing pieces for my wardrobe, and the ordering process was simple and smooth. I'll definitely be shopping here again.",
  },
  {
    name: "Emily T.",
    review:
      "The collection at Shop.co is amazing! I love the variety of styles and how easy it is to find clothes that fit my personal style. Everything I've ordered has been great quality.",
  },
  {
    name: "Michael B.",
    review:
      "I'm really impressed with Shop.co. The clothes look great, feel comfortable, and the whole shopping experience is simple. I will definitely be ordering more in the future.",
  },
];

function RateCustomer() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((index) => (index + 1) % customers.length);
  };

  const previousSlide = () => {
    setCurrentIndex(
      (index) => (index - 1 + customers.length) % customers.length,
    );
  };

  const visibleCustomers = [0, 1, 2].map(
    (offset) => customers[(currentIndex + offset) % customers.length],
  );

  return (
    <section aria-labelledby="customer-reviews-title">
      <div className="customers-heading">
        <h2 className="CUSTOMERS" id="customer-reviews-title">
          OUR HAPPY CUSTOMERS
        </h2>
        <div className="slider-buttons">
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous reviews"
          >
            ←
          </button>
          <button type="button" onClick={nextSlide} aria-label="Next reviews">
            →
          </button>
        </div>
      </div>
      <div className="CUSTOMERS1">
        {visibleCustomers.map((customer) => (
          <article className="customer-card" key={customer.name}>
            <img
              className="customer-rating"
              src={fiveStar}
              alt="5 star rating"
            />
            <h3>
              {customer.name}
              <span className="verified-badge" aria-label="Verified customer">
                ✓
              </span>
            </h3>
            <p className="CUSTOMERS4P">&quot;{customer.review}&quot;</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default RateCustomer;
