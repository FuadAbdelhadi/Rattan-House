import Inquire from "./inquire";
import { productsApi, inquireForm } from "../../api";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IMAGE_BASE_URL } from "../../config";






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

  // console.log(product.price);

  // const productPrice = product.price
  

  const [form, setForm] = useState({
    client_name: "",
    client_email: "",
    client_phone: "",
    address: "",
    country: "",
    message: "",
    item_id: `https://fuadabdelhadi.github.io/Rattan-House/productdetails/${id}`,
    total_amount: 0,
    status: null,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      console.log(form); // <-- check here


    try {
      const response = await inquireForm.submitOrder(form);
      console.log("Order submitted:", response);
      // alert("Your order has been sent!");
      setShowModal(false);
    } catch (error) {
      console.error("Submit error:", error);
      alert("Something went wrong. Try again.");
    }
  };


  if (!product) return <p>Loading...</p>;

  const productImages = Array.isArray(product.images) ? product.images : [];


  

  
  

  return (
    <div className="container details-page-container my-4 mt-5">
      <div className="row">
        {/* Left: Big image */}
        <div className="col-md-7 mb-3">
          <img
            src={IMAGE_BASE_URL + mainImage}
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
                src={IMAGE_BASE_URL + img}
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

            {/* <h3 className="m-0 ms-3">Price: ${product.price}</h3> */}
          </div>



            <Inquire show={showModal} onClose={() => setShowModal(false)} title="My Modal">
                <form onSubmit={handleSubmit}>
                  <div className="row">

                    <div className="col-6 text-center py-2">
                      <input
                        className="modal-form-input"
                        type="text"
                        name="client_name"
                        placeholder="Enter your name"
                        value={form.client_name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-6 text-center py-2">
                      <input
                        className="modal-form-input"
                        type="email"
                        name="client_email"
                        placeholder="Enter your email address"
                        value={form.client_email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-6 text-center py-2">
                      <input
                        className="modal-form-input"
                        type="number"
                        name="client_phone"
                        placeholder="Enter your phone number"
                        value={form.client_phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-6 text-center py-2">
                      <input
                        className="modal-form-input"
                        type="text"
                        name="address"
                        placeholder="Enter your address"
                        value={form.address}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-12 text-center py-2">
                      <input
                        className="modal-form-input"
                        type="text"
                        name="country"
                        placeholder="Select country"
                        value={form.country}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-12 text-center py-2">
                      <textarea
                        className="modal-text-area modal-form-input"
                        name="message"
                        rows={10}
                        placeholder="Message"
                        value={form.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                  </div>

                  <button className="btn btn-dark" type="button" onClick={() => setShowModal(false)}>
                    Close
                  </button>

                  <button className="btn btn-dark ms-2" type="submit">
                    Send
                  </button>
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