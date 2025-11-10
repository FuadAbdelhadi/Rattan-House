
import { productsApi, categoriesApi } from "../../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



function setMobileHeight() {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}



const HeroSection = () => {

    const [categories, setProducts] = useState([]);
  
    useEffect(() => {
      categoriesApi.getAllCategories()
        .then((data) => setProducts(data))
        .catch((err) => console.error("Error fetching categories:", err));
    }, []);

  return (
    <div className="hero-section pb-5">
      <div className="row align-items-end m-0 justify-content-center">
        {/* Left Social Icon */}
        {/* <div className="col-2 text-center">
          <a href="#" className="hero-socials-images">
            <img src="/images/whatsApp.svg" alt="WhatsApp" />
          </a>
        </div> */}

        {/* Product Cards */}
        <div className="col-8">
          <div className="collapse row navbar-collapse-product"
                  id="collapseExample">
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 text-center">

              {categories.map((item, index) => (
                <div className="col-3 py-3" key={index}>
                  <Link className="products" to={`/category/${item.id}`}>
                      <img src={item.image} alt={item.name} />
                      <h5 className="mt-2">{item.name}</h5>
                  </Link>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* Right Social Icon */}
        {/* <div className="col-2 text-center">
          <a href="#" className="hero-socials-images">
            <img src="/images/messages.svg" alt="Messages" />
          </a>
        </div> */}
      </div>
    </div>
  );
};

setMobileHeight();
window.addEventListener('resize', setMobileHeight);

export default HeroSection;
