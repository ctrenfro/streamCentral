import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./header.css";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="header">
      <div className="header--content">
        <div className="header--logo">
          <h1>Stream Central</h1>
        </div>
        <div className="header--search">
          <input
            type="text"
            className="header--searchBar"
            placeholder="search"
          />
          <button className="header--mag">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        <div className="header--links">
          <a href="/" className="header--linkItems">
            My Account
          </a>
          <a href="/" className="header--linkItems">
            Settings
          </a>
        </div>

        <div className="hamburgerDiv">
          <Hamburger toggled={isOpen} toggle={setOpen} direction="left" />
        </div>
        {isOpen && (
          <div className="header--mobile">
            <a className="header--hamburgerLinks" href="/">
              Browse
            </a>
            <a className="header--hamburgerLinks" href="/">
              Following
            </a>
            <a className="header--hamburgerLinks" href="#footer">
              Contact Us
            </a>

            <a className="header--hamburgerLinks" href="#testimonials">
              Testimonials
            </a>
            <a className="header--hamburgerLinks" href="#community">
              Community
            </a>
            <a className="header--hamburgerLinks" href="#news">
              News
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
