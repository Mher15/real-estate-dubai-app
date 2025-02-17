import { useEffect, useState } from "react";
import "./styles.scss";

const RealEstateSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="real-estate-wrapper">
      <div className="left-box">
        <div className="left-box-header">
          <div className={`icon-box ${animate ? "animate" : ""}`}>
            <img src="public/images/logo-png.png" alt=""></img>
          </div>
          <div className="menu-items-box">
            <div className={`menu-item icon-box ${animate ? "animate" : ""}`}>
              <img src="src/icons/group.svg" alt="Home Icon" />
            </div>
            <div className={`menu-item icon-box ${animate ? "animate" : ""}`}>
              <img src="src/icons/menu.svg" alt="Home Icon" />
            </div>
          </div>
        </div>
        <div className={`left-box-content-wrapper ${animate ? "animate" : ""}`}>
          <div className="left-box-content">
            <span className="left-box-content-title">Building Your Dreams</span>
            <p className="left-box-content-text">Real Estate in Dubai:</p>
            <p className="left-box-content-text">Ideal for Living and</p>
            <p className="left-box-content-text">Investing</p>
          </div>
        </div>
        <div className="left-box-footer">
          <div className={`contact-us-wrapper ${animate ? "animate" : ""}`}>
            <div className="fake-icon-box-wrapper">
              <div className="phone-icon-box icon-box">
                <img src="src/icons/contact-us.svg" />
              </div>
            </div>
            <button className="contact-us-button">Contact Us Now</button>
          </div>
          <div className="explore-all-properties-box">
            <div className="arrow-45-box">
              <img src="src/icons/arrow-45.svg"></img>
            </div>
            <span className="explore-all-properties-text">
              Explore All Our Properties
            </span>
            <div className="explore-all-properties-image-box"></div>
          </div>
        </div>
      </div>
      <div className={`right-box ${animate ? "animate" : ""}`}>
        <div className="right-box-header">
          <div className="right-box-texts">
            <p>More than 1500 real</p>
            <p>estate properties</p>
            {/* More than 1500 real estate properties */}
          </div>
          <div className="right-box-texts">
            <p>From $145,000 with a</p>
            <p>yield of 10% per annum</p>
            {/* From $145,000 with a yield of 10% per annum */}
          </div>
          <div className="right-box-icons-wrapper">
            <div className="heart-icon-box">
              <img src="src/icons/heart.svg" />
            </div>
            <div className="home-icon-box">
              <img src="src/icons/home.svg" />
            </div>
          </div>
        </div>
        <div className="catalog-download-box-wrapper">
          <div className="catalog-download-box">
            <span className="catalog-download-text">catalog download </span>

            <div className="download-icon-box">
              <img src="src/icons/download.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateSection;
