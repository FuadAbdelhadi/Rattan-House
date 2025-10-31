import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container my-5">
        <div className="row m-0 footer-container">
          {/* Logo Section */}
          <div className="col-12 col-md-4">
            <img
              src={`${import.meta.env.BASE_URL}images/footer logo.svg`}
              alt="Footer Logo"
              className="img-fluid"
            />
          </div>

          {/* Links Section */}
          <div className="col-12 col-md-8 row m-0">
            {/* Quick Links */}
            <div className="col-12 col-md-3">
              <h4>Quick links</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/offers">Offers</Link></li>
                <li><Link to="/delivery">Delivery</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Online Shop */}
            <div className="col-12 col-md-3">
              <h4>Online shop</h4>
              <ul>
                <li><Link to="/category/dining">Dining Inspiration</Link></li>
                <li><Link to="/category/living">Living Sets</Link></li>
                <li><Link to="/category/accessories">Accessories</Link></li>
                <li><Link to="/category/chairs">Dining Chairs</Link></li>
              </ul>
            </div>

            {/* Our Stores */}
            <div className="col-12 col-md-3">
              <h4>Our stores</h4>
              <ul>
                <li><Link to="/catalogue">Download Catalogue</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-12 col-md-3">
              <p>
                Sheikh Zayed Rd - Al Quoz - Al Quoz 1 - Dubai - United Arab Emirates<br />
                +971 4 338 2977
              </p>
              <p>
                Before Marina Home - Umm Suqeim St - Dubai - United Arab Emirates<br />
                +971 4 352 2889
              </p>
              <a className="footer-email" href="mailto:info@rattan-house.com">
                info@rattan-house.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
