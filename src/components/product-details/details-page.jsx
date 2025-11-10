import Inquire from "./inquire";
import { productsApi } from "../../api";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";





const DetailsPage = () => {


  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    productsApi
      .getProductById(id)
      .then((data) => {
        // ✅ API returns an array with one product
        const productData = Array.isArray(data) ? data[0] : data;
        console.log("Fetched product:", productData);

        setProduct(productData);

        // ✅ Safely set main image
        if (Array.isArray(productData.images) && productData.images.length > 0) {
          setMainImage(productData.images[0]);
        }
      })
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const productImages = Array.isArray(product.images) ? product.images : [];
  
  

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
                src={img}
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
                  setMainImage(`${img}`)
                }
              />
            ))}
          </div>
          
          <h3>{product.name}</h3>

          <div className="d-flex justify-content-start align-items-center mt-3">
            <button className="btn btn-dark btn-block" onClick={() => setShowModal(true)}>
                INQUIRE now
            </button>

            <h3 className="m-0 ms-3">Price: ${product.price}</h3>
          </div>



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

            <h3 className="mt-5">Details:</h3>
            <p>{product.description}</p>
            <h3 className="mt-auto">Specs:</h3>
            <p>{product.specs}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage