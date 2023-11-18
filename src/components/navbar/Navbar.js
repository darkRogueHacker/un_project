import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

import { FaHome } from "react-icons/fa";

const Navbar = () => {
  const [open, set_open] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        set_open(false);
      }
    });
  }, []);
  return (
    <nav className={`app__navbar ${open ? "-active" : ""}`}>
      <div className="app__navbar-container app__container py-1">
        <div className="app__navbar-row d-flex item-center justify-between">
          <div className="app__navbar-col -left">
            <div className="d-flex item-center gap-0">
              <FaHome />
              <Link>
                <span> Welcome to the United Nations </span>
              </Link>
            </div>
          </div>
          <div className="app__navbar-col -right">
            <ul className="app__navbar-links d-flex item-center gap-1">
              <li className="app__navbar-link">
                <a href="">
                  <span> عربي </span>
                </a>
              </li>
              <li className="app__navbar-link">
                <a href="">
                  <span> 中文 </span>
                </a>
              </li>
              <li className="app__navbar-link -active">
                <a href="">
                  <span> English </span>
                </a>
              </li>
              <li className="app__navbar-link">
                <a href="">
                  <span> Français </span>
                </a>
              </li>
              <li className="app__navbar-link">
                <a href="">
                  <span> Русский </span>
                </a>
              </li>
              <li className="app__navbar-link">
                <a href="">
                  <span> Español </span>
                </a>
              </li>
            </ul>

            <div className="app__navbar-toggle" onClick={() => set_open(!open)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
