import React from "react";
import quoteimg from "../../assets/icons/quote.svg";
import peopleImg from '../../assets/images/people1.png';
const Testimonial = () => {
  return (
    <div className="px-10">
      <div className="flex justify-between">
        <div>
          <h3 className="text-secondary font-bold text-xl pb-2">
            Testimonials
          </h3>
          <h1 className="text-2xl capitalize font-semibold">
            What Our Patients Says
          </h1>
        </div>
        <div>
          <img src={quoteimg} className="w-20 lg:w-[192px] lg:h-[156]" alt="" />
        </div>
      </div>
      <div className="py-10">
        {/* Clients Reviews */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {/* Single Reviews */}
                <div className="shadow-lg rounded-lg p-5 text-left">
                    <p className="px-2 text-justify">It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className="flex px-5 pt-5 pb-0  text-center items-center space-x-5">
                        <div>
                            <img src={peopleImg} className=" border-2 border-secondary rounded-full" alt="" />
                        </div>
                        <div>
                        <h2 className="text-lg font-bold">Winson Herry</h2>
                        <p>California</p>

                        </div>
                    </div>
                </div>
                <div className="shadow-lg rounded-lg p-5 text-left">
                    <p className="px-2 text-justify">It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className="flex px-5 pt-5 pb-0  text-center items-center space-x-5">
                        <div>
                            <img src={peopleImg} className=" border-2 border-secondary rounded-full" alt="" />
                        </div>
                        <div>
                        <h2 className="text-lg font-bold">Winson Herry</h2>
                        <p>California</p>

                        </div>
                    </div>
                </div>
                <div className="shadow-lg rounded-lg p-5 text-left">
                    <p className="px-2 text-justify">It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className="flex px-5 pt-5 pb-0  text-center items-center space-x-5">
                        <div>
                            <img src={peopleImg} className=" border-2 border-secondary rounded-full" alt="" />
                        </div>
                        <div>
                        <h2 className="text-lg font-bold">Winson Herry</h2>
                        <p>California</p>

                        </div>
                    </div>
                </div>
        </div>

      </div>
    </div>
  );
};

export default Testimonial;
