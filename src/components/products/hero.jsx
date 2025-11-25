

import { productsApi, categoriesApi } from "../../api";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IMAGE_BASE_URL } from "../../config";



function setMobileHeight() {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}



const HeroSection = () => {

  const [categories, setCategories] = useState([]);
  const [heroImage, setHeroImage] = useState(""); // 🖼️ store background image
  const [catName, setCatName] = useState("");
  const { id } = useParams();


  useEffect(() => {
    categoriesApi
      .getAllCategories()
      .then((data) => {
        setCategories(data);

        // ✅ If id is available, find matching category and set hero image
        if (id) {
          const selectedCategory = data.find((cat) => String(cat.id) === String(id));
          setCatName(selectedCategory.name)
          if (selectedCategory && selectedCategory.hero_image) {
            setHeroImage(selectedCategory.hero_image);
          } else {
            // fallback hero image if no hero_image found
            setHeroImage("https://fuadabdelhadi.github.io/Rattan-House/images/dinning-sets-hero.svg");
          }
        } else {
          // fallback for pages without id
          setHeroImage("https://fuadabdelhadi.github.io/Rattan-House/images/dinning-sets-hero.svg");
        }
      })
      .catch((err) => console.error("Error fetching categories:", err));
  }, [id]);


  return (
    <div className="hero-section  pb-5"style={{  backgroundImage: `url(${IMAGE_BASE_URL + heroImage})` }}>
      <div className="row align-items-center m-0 justify-content-center">
        <h2 className="text-center text-white hero-title mt-5">{catName}</h2>
        

        {/* Product Cards */}
        <div className="col-8">
          <div className="collapse row navbar-collapse-product"
                  id="collapseExample">
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 text-center">

              {categories.map((item, index) => (
                <div className="col-3 py-3" key={index}>
                  <Link className="products" to={`/category/${item.id}`}>
                      <img src={IMAGE_BASE_URL + item.image} alt={item.name} />
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
            <img src="https://fuadabdelhadi.github.io/Rattan-House/images/messages.svg" alt="Messages" />
          </a>
        </div> */}
      </div>
    </div>
  );
};

setMobileHeight();
window.addEventListener('resize', setMobileHeight);

export default HeroSection;
