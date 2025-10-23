const HomepageGallery = () => {
  return (
    <div className="container my-5">
      <div className="py-5 gallery">
        <div className="row g-3">
          {/* Left large image */}
          <div className="col-lg-8">
            <img
              src="/Rattan-House/images/gallery 1.svg"
              alt="Main"
              className="big-img img-fluid"
            />
          </div>

          {/* Right stacked smaller images */}
          <div className="col-lg-4">
            <img
                  src="/Rattan-House/images/gallery 1.svg"
                  alt="Image 1"
                  className="small-img img-fluid mb-3"
                />
            <div className="row g-3">
              <div className="col-12 col-md-7">
                <img
                  src="/Rattan-House/images/gallery 1.svg"
                  alt="Image 1"
                  className="small-img img-fluid"
                />
              </div>
              <div className="col-12 col-md-5">
                <img
                  src="/Rattan-House/images/gallery 1.svg"
                  alt="Image 2"
                  className="small-img img-fluid"
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageGallery;