import React from 'react';
import doctorimg from '../../assets/images/doctor.png';
import backgroundImage from '../../assets/images/appointment.png';

const Appoinmentbanner = () => {
    return (
        <div className='px-5 grid my-20 grid-cols-1 lg:grid-cols-2 bg-cover text-white' style={{backgroundImage:`url(${backgroundImage})`}}>
            <div className=' hidden lg:block'>
                <img src={doctorimg} className="mt-[-200px]" alt="" />
            </div>
            <div className='text-center  lg:text-left py-10'>
                <h3 className='text-secondary text-xl uppercase py-2'>Appointment</h3>
                <h1 className='text-3xl capitalize py-2 font-semibold'>Make an appointment Today </h1>
                <p className='text-lg lg:pr-10 text-justify py-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn mt-2 bg-gradient-to-l border-none text-white from-secondary to-primary">
              GET STARTED
            </button>
            </div>
        </div>
    );
};

export default Appoinmentbanner;