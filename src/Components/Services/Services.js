import React from "react";
import dentalimg from '../../assets/images/fluoride.png';
import cavityimg from '../../assets/images/cavity.png';
import teethimg from '../../assets/images/whitening.png';
const Services = () => {
  return (
    <div className="px-10 py-5">
      <div className="text-center">
        <h5 className="text-secondary font-bold text-lg pb-2 ">OUR SERVICES</h5>
        <h1 className="text-3xl uppercase pb-10 ">Services We Provide</h1>
      </div>
      {/* Services Section */}
      <div className="grid mt-5 grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Services card */}
          <div className="rounded  shadow-md flex p-5 flex-col items-center justify-center">
              <div>
                  <img src={dentalimg} alt="" />
              </div>
              <div className="text-center">
                  <h2 className="text-xl font-semibold ">Fluoride Treatment</h2>
                  <p className="text-md py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quod?</p>
              </div>
          </div>
          <div className="rounded  shadow-md flex p-5 flex-col items-center justify-center">
              <div>
                  <img src={cavityimg} alt="" />
              </div>
              <div className="text-center">
                  <h2 className="text-xl font-semibold ">Cavity Filling</h2>
                  <p className="text-md py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quod?</p>
              </div>
          </div>
          <div className="rounded  shadow-md flex p-5 flex-col items-center justify-center">
              <div>
                  <img src={teethimg} alt="" />
              </div>
              <div className="text-center">
                  <h2 className="text-xl font-semibold ">Teeth Whitening</h2>
                  <p className="text-md py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quod?</p>
              </div>
          </div>
          
      </div>
      {/* Details about work */}
    </div>
  );
};

export default Services;
