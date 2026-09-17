import { useNavigate } from "react-router-dom";
import { addToCart } from "../../Cart/cart-functions";
import { topSellingProducts } from "./top-selling-data";
import "./top-selling.css";

function TopSellingClothes() {
  const navigate = useNavigate();

  return (
    <section className="middlerow" aria-labelledby="top-selling-title">
      <h2 className="middlerow1" id="top-selling-title">
        TOP SELLING
      </h2>
      <div className="middlerow2">
        {topSellingProducts.map((product) => (
          <article className="top-selling-card" key={product.id}>
            <button
              className="top-selling-image-button"
              type="button"
              onClick={() => navigate(`/product/${product.id}`)}
              aria-label={`View ${product.name}`}
            >
              <img
                className="top-selling-image"
                src={product.image}
                alt={product.name}
              />
            </button>
            <h3>{product.name}</h3>
            <img
              className="top-selling-rating"
              src={product.rating}
              alt="Product rating"
            />
            <div>
              <b>${product.price}</b>
              {product.oldPrice && (
                <>
                  <del>${product.oldPrice}</del> <span>{product.discount}</span>
                </>
              )}
            </div>
            <button
              className="top-selling-buy-button"
              type="button"
              onClick={() => {
                addToCart(product);
                navigate("/cart");
              }}
            >
              Buy Now
            </button>
          </article>
        ))}
      </div>
      <div className="middlerowbuttondiv">
        <button
          className="middlerowbutton"
          type="button"
          onClick={() => navigate("/products")}
        >
          View All
        </button>
      </div>
    </section>
  );
}

export default TopSellingClothes;
