import Inquire from "./inquire";
import { productsApi } from "../../api";
import { useEffect, useState } from "react";




const DetailsPage = () => {


  const [products, setProducts] = useState([]);
  const [mainImage, setMainImage] = useState(""); // currently displayed image
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null); // selected product

  useEffect(() => {
    productsApi
      .getAllProducts()
      .then((data) => {
        setProducts(data);

        // Optionally, pick the first product to display
        if (data.length > 0) {
          setCurrentProduct(data[0]);
          // Set main image to first image of that product
          if (Array.isArray(data[0].images) && data[0].images.length > 0) {
            setMainImage(`${import.meta.env.BASE_URL}images/${data[0].images[0]}`);
          }
        }
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  if (!currentProduct) return <p>Loading...</p>;

  const productImages = Array.isArray(currentProduct.images)
    ? currentProduct.images
    : [];

  return (
    <div className="container details-page-container my-4 mt-5">
      <div className="row">
        {/* Left: Big image */}
        <div className="col-md-7 mb-3">
          <img
            src={mainImage}
            alt="Main"
            className="img-fluid rounded"
            style={{ width: "100%", height: "450px", objectFit: "contain" }}
          />
        </div>

        {/* Right: Small images and button */}
        <div className="col-md-5 d-flex flex-column align-items-start details-page-right-side">
          <div className="d-flex flex-wrap justify-content-center mb-3">
            {productImages.map((img, index) => (
              <img
                key={index}
                src={`${import.meta.env.BASE_URL}images/${img}`}
                alt={`Thumbnail ${index}`}
                className="img-thumbnail m-1"
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "contain",
                  cursor: "pointer",
                  border: mainImage.endsWith(img)
                    ? "2px solid black"
                    : "1px solid #ddd"
                }}
                onClick={() =>
                  setMainImage(`${import.meta.env.BASE_URL}images/${img}`)
                }
              />
            ))}
          </div>

            <button className="btn btn-dark btn-block mt-3" onClick={() => setShowModal(true)}>
                INQUIRE now
            </button>


            <Inquire show={showModal} onClose={() => setShowModal(false)} title="My Modal">
                <form action="submit">
                    <div className="row">
                        <div className="col-6 text-center py-2">
                            <input className="modal-form-input" type="text" placeholder="Enter your name"/>
                        </div>
                        <div className="col-6 text-center py-2">
                            <input className="modal-form-input" type="text" placeholder="Enter your email address"/>
                        </div>
                        <div className="col-6 text-center py-2">
                            <input className="modal-form-input" type="text" placeholder="Enter your phone Number"/>
                        </div>
                        <div className="col-6 text-center py-2">
                            <input className="modal-form-input" type="text" placeholder="Enter your Address"/>
                        </div>
                        <div className="col-12 text-center py-2">
                            <input className="modal-form-input" type="text" placeholder="Select Country"/>
                        </div>
                        <div className="col-12 text-center py-2">
                            <textarea className="modal-text-area modal-form-input" name="" id="" rows={10} placeholder="Message"></textarea>
                        </div>
                    </div>
                    <button className="btn btn-dark" onClick={() => setShowModal(false)}>Close</button>
                    <button className="btn btn-dark ms-2" type="submit">Send</button>
                </form>
            </Inquire>

            <h3 className="mt-auto">details</h3>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage