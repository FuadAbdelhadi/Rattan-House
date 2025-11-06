import { productsApi } from "../../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const SalesSection = () => {


    const [products, setProducts] = useState([]);
    
    useEffect(() => {
    productsApi.getAllProducts()
        .then((data) => setProducts(data))
        .catch((err) => console.error("Error fetching categories:", err));
    }, []);
    
    return (
        <div className="container my-5">
  <h3 className="mb-5">SALES</h3>

  {/* ✅ Check if there's at least one product on sale */}
  {products.some((product) => product.onSale === 1) ? (
    <div className="row m-0">
      {products
        .filter((product) => product.onSale === 1) // ✅ Only show products with onSale = 1
        .slice(0, 4)
        .map((product) => (
          <div className="col-12 col-md-3 px-4" key={product.id}>
            <div className="sales-images-container">
              {/* ✅ Render first two images if available */}
              {Array.isArray(product.images) && product.images.length > 0 ? (
                <>
                  <img
                    className="sales-first-image"
                    src={product.images[0]}
                    alt={product.name}
                  />
                  {product.images[1] && (
                    <img
                      className="sales-second-image"
                      src={product.images[1]}
                      alt={product.name}
                    />
                  )}
                </>
              ) : (
                // ✅ Fallback if no images
                <img
                  className="sales-first-image"
                  src={`${import.meta.env.BASE_URL}images/placeholder.svg`}
                  alt="No Image Available"
                />
              )}
            </div>

            <div className="d-flex justify-content-between align-items-center mt-2">
              <h5>{product.name || "Unnamed Product"}</h5>

              <Link
                className="btn sales-button"
                to={`/productdetails/${product.id}`}
              >
                INQUIRE Now
              </Link>
            </div>
          </div>
        ))}
    </div>
  ) : (
    // ✅ Display message if no onSale products found
    <div className="text-center my-5">
      <h4>Sales Are Coming Soon</h4>
    </div>
  )}
</div>
    )
}

export default SalesSection;