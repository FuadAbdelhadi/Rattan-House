import { Link, useParams } from "react-router-dom";
import { productsApi } from "../../api";
import { useEffect, useState } from "react";
import { IMAGE_BASE_URL } from "../../config";


const ProductsShowCase = () => {

   const { id } = useParams(); // get the category ID from the URL
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
  productsApi.getAllProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  const filteredProducts = products.filter(
    (product) => String(product.category_id) === String(id)
  );

  console.log(filteredProducts);
  


  return (
    <>
        <div className="container mt-5 pt-5">
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 text-center">

            {filteredProducts.length > 0 ? (
              filteredProducts.map((item, index) => (
                <div className="col py-3" key={index}>
                  <Link className="products" to={`/productdetails/${item.id}`}>
                    <img
                      src={IMAGE_BASE_URL + (item.images?.[0] || "")}
                      alt={item.name}
                    />
                    <h5 className="mt-2">{item.name}</h5>
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-center py-5">No products found in this category.</p>
            )}

          </div>
        </div>
    </>
  );
};


export default ProductsShowCase;
