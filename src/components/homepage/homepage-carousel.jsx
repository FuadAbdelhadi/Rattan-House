import Slider from "react-slick";


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

  const images = [
    {
      src: "/Rattan-House/images/carousel image.svg",
      title: "01 LIVING SETS",
    },
    {
      src: "/Rattan-House/images/carousel image.svg",
      title: "02 DINING SETS",
    },
    {
      src: "/Rattan-House/images/carousel image.svg",
      title: "03 RUGS",
    },
    {
      src: "/Rattan-House/images/carousel image.svg",
      title: "04 UMBRELLAS",
    },
    {
      src: "/Rattan-House/images/carousel image.svg",
      title: "05 SUN BEDS",
    },
    {
      src: "/Rattan-House/images/carousel image.svg",
      title: "06 LONG CHAIRS",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-start mb-4">CATEGORIES</h2>

      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index} className="px-2">
            <div className="carousel-card position-relative rounded overflow-hidden">
                <div className="carousel-title mb-3">
                {item.title}
              </div>
              <img
                src={item.src}
                alt={item.title}
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