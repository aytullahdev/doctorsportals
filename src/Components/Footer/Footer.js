import React from "react";
import bgimage from "../../assets/images/footer.png";
const Footer = () => {
  return (
    <div
      className="px-5 py-20 bg-cover"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <footer className="footer px-5 flex  justify-between text-black">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Emergency Checkup</a>
          <a className="link link-hover">Monthly Checkup</a>
          <a className="link link-hover">Weekly Checkup</a>
          <a className="link link-hover">Deep Check up</a>
        </div>
        <div>
          <span className="footer-title">ORAL HEALTH</span>
          <a className="link link-hover">Fluoride Treatment</a>
          <a className="link link-hover">Cavity Filling</a>
          <a className="link link-hover">Teath Whitening</a>
        </div>
        <div>
          <span className="footer-title">OUR ADDRESS</span>
          <a className="link link-hover">New York - 101010 Hudson</a>
        </div>
      </footer>
      <div className="pt-10 text-center text-xs font-bold">
        <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
      </div>
    </div>
  );
};

export default Footer;
