import React, { useState } from 'react';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

import un_logo from "../../assets/UN-logo.svg";
import un_text from "../../assets/UN-text-EN.svg";
import { AiFillCopy } from "react-icons/ai";


import "./donate.css";

const DonatePage = () => {
  const [walletAddress, setWalletAddress] = useState('0xB8b69925e10dc9ef587A3DaDD3AD4Ce488d106c2');
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
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
          <p className="instruction-text">Follow the instructions below to make a BTC donation:</p>

          {/* Your cool instruction texts go here */}

          <div className="barcode-container">
            {/* BTC Barcode image goes here */}
            <img className="barcode" src="your-btc-barcode-image-url.jpg" alt="BTC Barcode" />
          </div>

          <div className="wallet-info">
            <p>Your BTC Wallet Address:</p>
            <div className="address-container">
              <span className="wallet-address">{walletAddress}</span>
              <button className="copy-icon" onClick={handleCopyClick}>
                <AiFillCopy />
                {copied && <span className="copied-popup">Copied!</span>}
              </button>
            </div>
          </div>

          <p className="donation-message">Thank you for supporting our cause. Your contribution makes a difference!</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DonatePage;
