import { useEffect, useState } from "react";
import { galleryApi, productsApi } from "../../api";
import { IMAGE_BASE_URL } from "../../config";
import { Link } from "react-router-dom";


const HomepageGallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [hotspots, setHotspots] = useState({});
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [tooltipProduct, setTooltipProduct] = useState(null);

  useEffect(() => {
    galleryApi
      .getAllGalleryImages()
      .then((images) => {
        setGalleryImages(images);

        const hotspotPromises = images.map((img) =>
          galleryApi.getHotspotById(img.id)
        );

        Promise.all(hotspotPromises).then((results) => {
          const hotspotMap = {};
          results.forEach((hotspotList, index) => {
            const imageId = images[index].id;
            hotspotMap[imageId] = hotspotList;
          });

          setHotspots(hotspotMap);
        });
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const handleHoverIn = (spot, uniqueKey) => {
    setActiveTooltip(uniqueKey);

    productsApi
      .getProductById(spot.product_id)
      .then((product) => {
        setTooltipProduct(product);
      })
      .catch((err) => {
        console.error("Error loading product:", err);
        setTooltipProduct(null);
      });
      console.log(tooltipProduct);
  };

  const handleHoverOut = () => {
    setActiveTooltip(null);
    setTooltipProduct(null);
  };


  

  const renderHotspots = (imageId) => {
    return hotspots[imageId]?.map((spot, index) => {
      const uniqueKey = `${imageId}-${index}`;

      return (
        <Link to={`/productdetails/${spot.product_id}`} key={uniqueKey}>
        <div
          key={uniqueKey}
          className="hotspot-dot"
          style={{
            top: `${spot.top_percent}%`,
            left: `${spot.left_percent}%`,
          }}
          // onMouseEnter={() => handleHoverIn(spot, uniqueKey)}
          // onMouseLeave={handleHoverOut}
        >
          
            
          
          {activeTooltip === uniqueKey && tooltipProduct && (
            <div className="hotspot-tooltip">
              <strong>{tooltipProduct.name}</strong>
              <div className="text-muted mb-2">{tooltipProduct.price} USD</div>

              {/* <img
                src={IMAGE_BASE_URL + tooltipProduct.images}
                alt=""
                className="img-fluid rounded"
              /> */}
            </div>
          )}
        </div>
        </Link>
      );
    });
  };
  


  return (
    <div className="container my-5">
      <div className="py-5 gallery">
        <div className="row g-3">

          {/* LEFT LARGE IMAGE */}
          <div className="col-lg-8">
            {galleryImages[0] && (
              <div className="position-relative">
                <img
                  src={IMAGE_BASE_URL + galleryImages[0].image}
                  className="big-img img-fluid"
                  alt=""
                />
                {renderHotspots(galleryImages[0].id)}
              </div>
            )}
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-lg-4">

            {/* TOP RIGHT IMAGE */}
            {galleryImages[1] && (
              <div className="position-relative mb-3">
                <img
                  src={IMAGE_BASE_URL + galleryImages[1].image}
                  className="small-img img-fluid"
                  alt=""
                />
                {renderHotspots(galleryImages[1].id)}
              </div>
            )}

            {/* BOTTOM GRID */}
            <div className="row g-3">

              {/* BOTTOM LEFT SMALL */}
              <div className="col-12 col-md-7">
                {galleryImages[2] && (
                  <div className="position-relative">
                    <img
                      src={IMAGE_BASE_URL + galleryImages[2].image}
                      className="small-img img-fluid"
                      alt=""
                    />
                    {renderHotspots(galleryImages[2].id)}
                  </div>
                )}
              </div>

              {/* BOTTOM RIGHT SMALL */}
              <div className="col-12 col-md-5">
                {galleryImages[3] && (
                  <div className="position-relative">
                    <img
                      src={IMAGE_BASE_URL + galleryImages[3].image}
                      className="small-img img-fluid"
                      alt=""
                    />
                    {renderHotspots(galleryImages[3].id)}
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomepageGallery;
