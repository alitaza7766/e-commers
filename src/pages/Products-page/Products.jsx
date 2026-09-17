import { useSearchParams } from "react-router-dom";
import Header from "../../components/Home-layout/Header-layout/Header";
import Footer from "../../components/Home-layout/Footer/Footer";
import {
  allProducts,
  ProductSection,
} from "../../components/Home-layout/New-ariwal-clothes/new-ariwal";

function Products() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search")?.toLowerCase() ?? "";
  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(query),
  );

  return (
    <div>
      <Header />
      <main>
        <h2 className="toprow1">All Products</h2>
        <ProductSection products={filteredProducts} showViewAll={false} />
      </main>
      <Footer />
    </div>
  );
}

export default Products;
