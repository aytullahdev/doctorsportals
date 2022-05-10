import React from "react";
import dentalimg from '../../assets/images/fluoride.png';
import cavityimg from '../../assets/images/cavity.png';
import teethimg from '../../assets/images/whitening.png';
import treatmentimg from '../../assets/images/treatment.png';
const Services = () => {
  return (
    <div className="px-10 py-5">
      <div className="text-center">
        <h5 className="text-secondary font-bold text-lg pb-2 ">OUR SERVICES</h5>
        <h1 className="text-3xl uppercase pb-10 ">Services We Provide</h1>
      </div>
      {/* Services Section */}
      <div className="grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
      <div className="p-5 my-10 lg:p-10 grid grid-cols-1 md:gap-5  md:grid-cols-2 lg:grid-cols-2">
          <div className="order-2 md:order-1 lg:order-1">
              <img src={treatmentimg} className="  lg:w-[460px] h-[580px] rounded " alt="" />
          </div>
          <div className="py-20 order-1 lg:order-2 ">
              <h2 className="text-2xl font-semibold lg:font-normal lg:text-4xl capitalize leading-tight ">Exceptional Dental Care, on Your Terms</h2>
              <p className="text-lg lg:text-xl leading-relaxed text-justify py-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
              <button className="btn bg-gradient-to-l border-none text-white from-secondary to-primary">
              GET STARTED
            </button>
          </div>
      </div>
    </div>
  );
};

export default Services;
