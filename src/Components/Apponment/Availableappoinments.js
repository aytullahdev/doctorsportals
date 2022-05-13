import React from 'react';
import Appoinmentcard from './Appoinmentcard';

const Availableappoinments = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-10'>
            <Appoinmentcard/>
            <Appoinmentcard/>
            <Appoinmentcard/>
        </div>
    );
};

export default Availableappoinments;