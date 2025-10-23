
function setMobileHeight() {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}



const HeroSection = () => {
  return (
    <div className="hero-section pb-5">
      <div className="row align-items-end m-0 d-none">
        {/* Left Social Icon */}
        <div className="col-2 text-center">
          <a href="#" className="hero-socials-images">
            <img src="//Rattan-House/images/whatsApp.svg" alt="WhatsApp" />
          </a>
        </div>

        {/* Product Cards */}
        <div className="col-8">
          <div className="card products-conmtainer p-4">
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 text-center">

              {[
                { src: "dining sets.svg", title: "DINING SETS" },
                { src: "chairs.svg", title: "CHAIRS" },
                { src: "tables.svg", title: "TABLES" },
                { src: "bar stools.svg", title: "BAR STOOLS" },
                { src: "cocktail tablees.svg", title: "COCKTAIL TABLES" },
                { src: "outdoor sets.svg", title: "OUTDOOR SETS" },
                { src: "bean bags.svg", title: "BEAN BAGS" },
                { src: "lamps.svg", title: "LAMPS" },
                { src: "swings.svg", title: "SWINGS" },
                { src: "day beds.svg", title: "DAY BEDS" },
                { src: "sun beds.svg", title: "SUN BEDS" },
                { src: "fire pits.svg", title: "FIRE PITS" },
                { src: "shades.svg", title: "SHADES" },
                { src: "accessories.svg", title: "ACCESSORIES" },
                { src: "outdoor rugs.svg", title: "OUTDOOR RUGS" },
              ].map((item, index) => (
                <div className="col py-3" key={index}>
                  <a href="#" className="products">
                    <img src={`//Rattan-House/images/${item.src}`} alt={item.title} />
                    <h5 className="mt-2">{item.title}</h5>
                  </a>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* Right Social Icon */}
        <div className="col-2 text-center">
          <a href="#" className="hero-socials-images">
            <img src="//Rattan-House/images/messages.svg" alt="Messages" />
          </a>
        </div>
      </div>
    </div>
  );
};

setMobileHeight();
window.addEventListener('resize', setMobileHeight);

export default HeroSection;
