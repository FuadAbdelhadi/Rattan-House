import Slider from "react-slick";
import { categoriesApi } from "../../api";
import { useEffect, useState } from "react";


const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  const [categories, setProducts] = useState([]);
  
  useEffect(() => {
    categoriesApi.getAllCategories()
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-start mb-4">CATEGORIES</h2>

      <Slider {...settings}>
        {categories.map((item, index) => (
          <div key={index} className="px-2">
            <div className="carousel-card position-relative rounded overflow-hidden">
                <div className="carousel-title mb-3">
                {item.name}
              </div>
              <img
                src={item.image}
                alt={item.name}
                className="img-fluid w-100"
                style={{
                  height: "300px",
                  objectFit: "cover",
                }}
              />
              
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;