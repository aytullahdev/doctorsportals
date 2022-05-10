import React from "react";
import  bgoverlayimg from '../../assets/images/appointment.png'
const Contuctus = () => {
  return (
    <div className="p-10 " style={{backgroundImage:`url(${bgoverlayimg})`}}>
      <div className="text-center">
        <h3 className="text-secondary text-lg capitalize">Contact Us</h3>
        <h1 className="text-3xl text-white py-2 mb-5">Stay connected with us</h1>
      </div>
      <div className=" md:w-[450px] mx-auto flex flex-col space-y-5">
        <div>
          <input type="text" className="w-full py-2 px-2 rounded bg-white " placeholder="Email Address" />
        </div>
        <div>
          <input type="text" className="w-full py-2 px-2 rounded bg-white " placeholder="Subject" />
        </div>
        <div>
          <textarea className="w-full py-2 px-2 rounded bg-white " placeholder="Your message"></textarea>
        </div>
        <div>
          <button className="btn bg-gradient-to-l border-none text-white from-secondary to-primary mx-auto block">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contuctus;
