import React from 'react';

const Pricings = (props) => {
    const { name, price } = props.option
    return (
        <div className='bg-white p-4 rounded-lg'>
            
                <h4 className='bg-indigo-300 rounded py-2 text-2xl font-bold'>Name:{name}</h4>
                <p>
                    <span className='text-5xl font-bold'> {price}</span>
                    <span className='text-xl font-bold text-gray-500'>/mo</span>
                </p>
          
        </div>
    );
};

export default Pricings;