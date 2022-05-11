import React from "react";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from 'date-fns';
import chairimg from "../../assets/images/chair.png";
import bgimg from "../../assets/images/bg.png";
const Appoinimentdatebanner = () => {
  const [selected, setSelected] = useState(new Date());
  return (
    <div>
      <div
        className=" bg-cover px-10 py-20"
        style={{ backgroundImage: `url("${bgimg}")` }}
      >
        <div className="grid grid-cols-1  lg:grid-cols-2">
          <div className="order-2  mt-10 lg:mt-0  flex justify-center items-center  lg:order-1 ">
            <DayPicker
              mode="single"
              className="bg-white shadow rounded-lg p-10"
              selected={selected}
              onSelect={setSelected}
              onDayClick={setSelected}
            />
          </div>
          <div className="order-1 lg:order-2  lg:pl-10">
            <img src={chairimg} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-white py-10">
            <h1 className="text-secondary text-center text-lg font-bold">Available Appoinments on {format(selected, 'PP')}</h1>
      </div>
    </div>
  );
};

export default Appoinimentdatebanner;
