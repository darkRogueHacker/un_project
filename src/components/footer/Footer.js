import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

import un_logo from "../../assets/logo-en-reverse.svg";

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { IoLogoFlickr } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="app__footer py-7 px-8">
      <div className="app__footer-container">
        <div className="app__footer-row d-flex item-center justify-between">
          <div className="app__footer-col logo">
            <Link to="https://www.un.org">
              <img src={un_logo} alt="UN logo" />
            </Link>
          </div>

          <div className="d-flex item-center app__footer-col">
            <div className="social_links">
              <div className="app__footer-social_links d-flex item-center gap-2">
                <div className="app__footer-social_link">
                  <a
                    href="https://www.facebook.com/unitednations"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsFacebook className="icon" />
                  </a>
                </div>
                <div className="app__footer-social_link">
                  <a
                    href="https://twitter.com/un_oct"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsTwitter className="icon" />
                  </a>
                </div>
                <div className="app__footer-social_link">
                  <a
                    href="https://www.youtube.com/unitednations"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsYoutube className="icon" />
                  </a>
                </div>
                <div className="app__footer-social_link">
                  <a
                    href="https://www.flickr.com/photos/un_photo/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IoLogoFlickr className="icon" />
                  </a>
                </div>
                <div className="app__footer-social_link">
                  <a
                    href="https://instagram.com/unitednations"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsInstagram className="icon" />
                  </a>
                </div>
              </div>
            </div>

            <div className="btn">
              <Link to="/donation-page">
                <button>Donate </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="app__footer-row d-flex justify-right">
          <ul className="app__footer-links d-flex item-center">
            <li className="app__footer-link">
              <Link to="https://www.un.org/en/site-index">
                <span> A-z site index </span>
              </Link>
            </li>
            <li className="app__footer-link">
              <Link to="https://www.un.org/en/contact-us-0">
                <span> Contact </span>
              </Link>
            </li>
            <li className="app__footer-link">
              <Link to="https://www.un.org/en/about-us/copyright">
                <span>Copyright </span>
              </Link>
            </li>
            <li className="app__footer-link">
              <Link to="https://www.un.org/en/about-us/frequently-asked-questions">
                <span> FAQ </span>
              </Link>
            </li>
            <li className="app__footer-link">
              <Link to="https://www.un.org/en/about-us/fraud-alert">
                <span> Fraud Alert </span>
              </Link>
            </li>
            <li className="app__footer-link">
              <Link to="https://www.un.org/en/about-us/privacy-notice">
                <span> Privacy Notice </span>
              </Link>
            </li>
            <li className="app__footer-link">
              <Link to="https://www.un.org/en/about-us/terms-of-use">
                <span> Terms of use </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
