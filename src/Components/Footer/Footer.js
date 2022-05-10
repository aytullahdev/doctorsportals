import React from "react";
import bgimage from "../../assets/images/footer.png";
const Footer = () => {
  return (
    <div
      className="px-5 py-20 bg-cover"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <footer class="footer px-5 flex  justify-between text-black  text-neutral-content">
        <div>
          <span class="footer-title">Services</span>
          <a class="link link-hover">Emergency Checkup</a>
          <a class="link link-hover">Monthly Checkup</a>
          <a class="link link-hover">Weekly Checkup</a>
          <a class="link link-hover">Deep Check up</a>
        </div>
        <div>
          <span class="footer-title">ORAL HEALTH</span>
          <a class="link link-hover">Fluoride Treatment</a>
          <a class="link link-hover">Cavity Filling</a>
          <a class="link link-hover">Teath Whitening</a>
        </div>
        <div>
          <span class="footer-title">OUR ADDRESS</span>
          <a class="link link-hover">New York - 101010 Hudson</a>
        </div>
      </footer>
      <div className="pt-10 text-center text-xs font-bold">
        <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
      </div>
    </div>
  );
};

export default Footer;
