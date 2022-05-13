import React from 'react';
import Footer from '../Footer/Footer';
import Appoinimentdatebanner from './Appoinimentdatebanner';
import Availableappoinments from './Availableappoinments';

const Appoinment = () => {
    return (
        <div>
            <Appoinimentdatebanner/>
            <Availableappoinments/>
            <Footer/>
        </div>
    );
};

export default Appoinment;