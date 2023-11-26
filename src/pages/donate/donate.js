import React, { useState } from 'react';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

import un_logo from "../../assets/UN-logo.svg";
import un_text from "../../assets/UN-text-EN.svg";
import btc_barcode from "../../assets/btc-barcode.jpg";
import { AiFillCopy } from "react-icons/ai";


import "./donate.css";

const DonatePage = () => {
  const [walletAddress] = useState('bc1qx9wdx3ulmw2k5tt3s8cl5at0v220nns49nr82f');
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(walletAddress).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };


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

      <div className='d-flex justify-center item-center'>
        <div className="donate-container">
          <h1>Support Our Cause with Crypto</h1>
          <p className="instruction-text">Scan the barcode below to make a BTC donation</p>

          <div className="barcode-container">
            <img className="barcode" src={btc_barcode} alt="BTC Barcode" />
          </div>

          <div className="wallet-info">
            <p>Or copy the BTC Wallet Address</p>
            <div className="address-container">
              <span className="wallet-address">{walletAddress}</span>
              <button className="copy-icon" onClick={handleCopyClick}>
                <AiFillCopy />
                <span className={`copied-popup ${copied ? 'show' : ''}`}>Copied!</span>
              </button>
            </div>
          </div>

          <div>
            <p>For further inquiries regarding donation procedures or assistance, contact us <a href='mailto:unctu@unctu.org'>here</a></p>
          </div>

          <p className="donation-message">Thank you for considering a donation and helping us make a positive impact. Your contribution makes a difference!</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DonatePage;
