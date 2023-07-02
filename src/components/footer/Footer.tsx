import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer" id="footer">
        <div className="footer--columns">
          <div className="footer--contactColumn footer--column">
            <h1 className="footer--title--name">Stream Central</h1>
            <p className="footer--columnItem">
              123 allison ave. 47300 Indianapolis, Indiana
            </p>
            <p className="footer--columnItem">765 300 8769</p>
            <p className="footer--columnItem">johndoe123@email.com</p>
            <p className="footer--columnItem">
              copyright 2023 Stream Central All RIghts Reserved
            </p>
          </div>
          <div className="footer--companyColumn footer--column">
            <h2 className="footer--title">Company</h2>
            <ul>
              <li className="footer--columnItem">About Us</li>
              <li className="footer--columnItem">Blog</li>
              <li className="footer--columnItem">Partnerships</li>
              <li className="footer--columnItem">Careers</li>
            </ul>
          </div>
          <div className="footer--resourcesColumn footer--column">
            <h2 className="footer--title">Resources</h2>
            <ul>
              <li className="footer--columnItem">Privacy Policy</li>
              <li className="footer--columnItem">Cookie Policy</li>
              <li className="footer--columnItem">Support</li>
              <li className="footer--columnItem">Documentation</li>
              <li className="footer--columnItem">Terms & Conditions</li>
            </ul>
          </div>
          <div className="footer--newsletterColumn footer--column">
            <h2 className="footer--title">Newsletter</h2>
            <p>
              Subscribe to our newsletter to get the latest information from us.
            </p>
            <div className="footer-newsletterInput">
              <input type="text" alt="newsletterInput" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
