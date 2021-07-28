import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-top__box">
            <h3>EXTRA</h3>
            <Link to="/">Brands</Link>
            <Link to="/">Gift Certificate</Link>
            <Link to="/">Affiliate</Link>
            <Link to="/">Special</Link>
            <Link to="/">Site Map</Link>
          </div>

          <div className="footer-top__box">
            <h3>INFORMATION</h3>
            <Link to="./">About Us</Link>
            <Link to="./">Privacy Policy</Link>
            <Link to="/">Terms & Conditions</Link>
            <Link to="/node_modules">Contact Us</Link>
            <Link to="/">Site Map</Link>
          </div>

          <div className="footer-top__box">
            <h3>EXTRA</h3>
            <Link to="/">My Account</Link>
            <Link to="/">Order History</Link>
            <Link to="/">Wish List</Link>
            <Link to="/">Newsletter</Link>
            <Link to="/">Returns</Link>
          </div>

          <div className="footer-top__box">
            <h3>CONTACT US</h3>
            <div className="">
              <span>
                <FontAwesomeIcon className="icon" icon="map-marker-alt" />
                42 Andhera House, Andheri Street, Andheri, Mumbai -47
              </span>
            </div>

            <div className="">
              <span>
                <FontAwesomeIcon className="icon" icon="envelope-square" />
                Company@gmail.com
              </span>
            </div>

            <div className="">
              <span>
                <FontAwesomeIcon className="icon" icon="phone" />
                +91-9876543210
              </span>
            </div>

            <div className="">
              <span>
                <FontAwesomeIcon className="icon" icon="paper-plane" />
                Andheri Street
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
