import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../Header-layout/Header";
import { addToCart } from "../../Cart/cart-functions";
import { products } from "./new-arrival-data";
import { topSellingProducts } from "../Top-selling-clothes/top-selling-data";
import "../New-ariwal-clothes/new-arrival.css";

const allProducts = [...products, ...topSellingProducts];
export { allProducts, products };

function NewArrival() {
  return <ProductSection title="NEW ARRIVALS" products={products} />;
}

export function ProductSection({
  products: sectionProducts,
  showViewAll = true,
}) {
  const navigate = useNavigate();

  return (
    <section className="toprow">
      <div className="toprow2">
        {sectionProducts.map((product) => (
          <article className="ch2 product-card" key={product.id}>
            <button
              className="product-image-button"
              type="button"
              onClick={() => navigate(`/product/${product.id}`)}
              aria-label={`View ${product.name}`}
            >
              <img
                className="product-image"
                src={product.image}
                alt={product.name}
              />
            </button>
            <h3>{product.name}</h3>
            <img
              className="product-rating"
              src={product.rating}
              alt="Product rating"
            />
            <strong>${product.price}</strong>
            <button
              className="product-buy-button"
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
      {showViewAll && (
        <div className="toprowbuttondiv">
          <button
            className="toprowbutton"
            type="button"
            onClick={() => navigate("/products")}
          >
            View All
          </button>
        </div>
      )}
    </section>
  );
}

export function Product() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = allProducts.find((item) => item.id === productId);

  if (!product) {
    return (
      <>
        <Header />
        <main className="product-page">
          <h1>Product not found</h1>
          <Link to="/">Back to home</Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="product-page">
        <div className="product-detail">
          <img
            className="product-detail-image"
            src={product.image}
            alt={product.name}
          />
          <div className="product-detail-content">
            <h1>{product.name}</h1>
            <img
              className="product-detail-rating"
              src={product.rating}
              alt="Product rating"
            />
            <strong className="product-detail-price">${product.price}</strong>
            <p>{product.description}</p>
            <button
              className="checkout-button"
              type="button"
              onClick={() => {
                addToCart(product);
                navigate("/cart");
              }}
            >
              Buy Now
            </button>
            <button
              className="checkout-button"
              type="button"
              onClick={() => {
                addToCart(product);
                navigate("/cart");
              }}
            >
              Add to cart
            </button>
          </div>
        </div>

        <ProductSection products={allProducts} showViewAll={false} />
      </main>
    </>
  );
}

export default NewArrival;
