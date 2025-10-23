import { useState } from "react";
import Inquire from "./inquire";




const DetailsPage = () => {
  // Images array defined inside the component
  const images = [
    "/Rattan-House/images/product-example1.svg",
    "/Rattan-House/images/product-example2.svg",
    "/Rattan-House/images/product-example3.svg",
    "/Rattan-House/images/product-example4.svg"
  ];

  // State to track the currently selected image
  const [mainImage, setMainImage] = useState(images[0]);

  const [showModal, setShowModal] = useState(false);

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
                {images.map((img, index) => (
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
                    border: mainImage === img ? "2px solid black" : "1px solid #ddd"
                    }}
                    onClick={() => setMainImage(img)}
                />
                ))}
            </div>

            {/* <button className="btn btn-dark btn-block mt-3" data-bs-toggle="modal" data-bs-target="#inquireModal" type="button">
                INQUIRE now
            </button> */}

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