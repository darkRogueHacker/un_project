import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

import un_logo from "../../assets/UN-logo.svg";
import un_text from "../../assets/UN-text-EN.svg";

import "./donate.css";

const DonatePage = () => {
  return (
    <div>
      <>
        <Navbar />
        <div className="donate__header">
          <div className="donate__header-container section__container">
            <div className="donate__header-row d-flex item-center justify-between mb-7">
              <div className="donate__header-col left">
                <div className="d-flex item-center gap-1">
                  <div className="donate__header-logo d-flex item-center gap-2">
                    <div className="logo-img">
                      <Link to="https://www.un.org/en">
                        <img src={un_logo} alt="UN logo" />
                      </Link>
                    </div>
                    <div className="logo-text">
                      <Link to="https://www.un.org/en">
                        <img src={un_text} alt="United Nations" />
                      </Link>
                    </div>
                  </div>

                  <div className="donate__header-topic">
                    <a href="/donation-page">
                      <span> Donation </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="donate__header-col d-flex item-center "></div>
            </div>
          </div>
        </div>
      </>
      <div className="donation__page">
        <div className="donation__page-text">Donation Page</div>
      </div>
      <Footer />
    </div>
  );
};

export default DonatePage;
