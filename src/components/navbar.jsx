import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


const Navbar = () => {

  const location = useLocation();

  // Check if the current path includes "/ProductDetails"
  const isProductDetailsPage = location.pathname.includes("/ProductDetails");
  
  return (
    <header className={`navbar-container ${isProductDetailsPage ? "navbar-product-details" : ""}`}>
      <nav className="navbar navbar-inner-container navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand navbar-brand-mobile" to="/">
            <img src={isProductDetailsPage ? "/Rattan-House/images/footer logo.svg" : "/Rattan-House/images/logo 1.svg"}  alt="Logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <Link className="navbar-brand" to="/">
              <img className="header-logo" src={isProductDetailsPage ? "/Rattan-House/images/footer logo.svg" : "/Rattan-House/images/logo 1.svg"}  alt="Logo" />
            </Link>

            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  HOME
                </Link>
              </li>

              {/* PRODUCTS Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link"
                  data-bs-toggle="collapse"
                  to="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  PRODUCTS
                </Link>

                <div
                  className="collapse row navbar-collapse-product"
                  id="collapseExample"
                >
                  {[
                    "DINING SETS",
                    "BAR STOOLS",
                    "COCKTAIL TABLE",
                    "OUTDOOR SETS",
                    "LAMPS",
                    "BEAN BAGS",
                    "TABLES",
                    "SWINGS",
                    "DAYBEDS",
                    "CHAIRS",
                    "SUNBEDS",
                    "SHADES",
                    "FIRE PITS",
                    "ACCESSORIES",
                    "OUTDOOR RUGS",
                  ].map((item, index) => (
                    <div className="col-4" key={index}>
                      <Link className="dropdown-item" to="/product">
                        {item}
                      </Link>
                    </div>
                  ))}
                </div>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/design-and-care">
                  DESIGN&CARE
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/projects">
                  OUR PROJECTS
                </Link>
              </li>

              {/* ABOUT US Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link"
                  data-bs-toggle="collapse"
                  to="#collapseExample2"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample2"
                >
                  ABOUT US
                </Link>

                <div
                  className="collapse navbar-collapse-about-us"
                  id="collapseExample2"
                >
                  {[
                    { name: "OUR STORY", path: "/about/story" },
                    { name: "OUR PHILOSOPHY", path: "/about/philosophy" },
                    { name: "OUR FACTORY", path: "/about/factory" },
                    { name: "CONTACT US", path: "/contact" },
                  ].map((item, index) => (
                    <div key={index}>
                      <Link className="dropdown-item" to={item.path}>
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </li>
            </ul>

            <button className="navbar-cta">GET A CATALOG</button>
          </div>
        </div>
      </nav>

      <hr className="mt-0 text-white header-seperator" />

      <div className="d-flex justify-content-end align-items-center">
        <form className="d-flex">
          <input
            className="form-control me-2 search-box"
            type="search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success search-button"
            type="submit"
          ></button>
        </form>
      </div>
    </header>
  );
};

export default Navbar;
