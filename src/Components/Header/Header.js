import React from "react";
import chairimg from "../../assets/images/chair.png";
import bgimg from "../../assets/images/bg.png";
import clockicon from "../../assets/icons/clock.svg";
import locationicon from "../../assets/icons/marker.svg";
import phoneicon from "../../assets/icons/phone.svg";
const Header = () => {
  return (
    <div>
      <div
        className=" bg-cover px-10 py-20"
        style={{ backgroundImage: `url("${bgimg}")` }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="order-2 lg:order-1 py-10">
            <h1 className="text-xl font-semibold lg:text-5xl line- uppercase leading-snug">
              Your New Smile Starts Here
            </h1>
            <p className="text-sm text-justify lg:text-lg capitalize py-2 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              mollitia eligendi commodi, autem alias fugiat harum perspiciatis
              nam sit quam.
            </p>
            <button className="btn bg-gradient-to-l text-white from-secondary to-primary">
              GET STARTED
            </button>
          </div>
          <div className="order-1 lg:order-2  lg:pl-10">
            <img src={chairimg} alt="" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 mt-2 lg:grid-cols-3 gap-5 mx-10">
        <div className="bg-gradient-to-l text-white from-secondary to-primary p-5 flex justify-around items-center rounded ">
          <div className="mr-5">
            <img src={clockicon} className="w-[200px] h-[90px]" alt="" />
          </div>
          <div className="text-left ">
            <h4 className=" text-sm lg:text-xl font-semibold ">Opening Hours</h4>
            <p className=" text-xs lg:text-[15px] py-2 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, et.
            </p>
          </div>
        </div>
        <div className="bg-accent text-white p-5 flex justify-around items-center rounded ">
          <div className="mr-5">
            <img src={locationicon} className="w-[90px] h-[90px]" alt="" />
          </div>
          <div className="text-left ">
            <h4 className=" text-sm lg:text-xl font-semibold ">Visit our location</h4>
            <p className=" text-xs lg:text-[15px] py-2 leading-relaxed">
              Brooklyn, NY 10036, United States
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-l text-white from-secondary to-primary p-5 flex justify-around items-center rounded ">
          <div className="mr-5">
            <img src={phoneicon} className="w-[90px] h-[90px] " alt="" />
          </div>
          <div className="text-left ">
            <h4 className=" text-sm lg:text-xl font-semibold ">Contact us now</h4>
            <p className=" text-xs lg:text-[15px] py-2 leading-relaxed">+000 123 456789</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
