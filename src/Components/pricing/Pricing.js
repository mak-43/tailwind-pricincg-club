import React from 'react';
import Pricings from '../Pricings/Pricing';

const Pricing = () => {
    const pricingOptions=[
        {id:1,name:'free',price:0},
        {id:2,name:'regular',price:9.99},
        {id:3,name:'premium',price:19.99},
        {id:4,name:'free',price:0},
        {id:5,name:'free',price:0},
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h2 className='text-6xl font-mono text-white'>Best deal of the town</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aliquam dolorum sequi placeat quia aliquid labore corporis vero error? Sunt!</p>
            <div className='grid md:grid-cols-3 gap-3 mt-8 '>
                {
                    pricingOptions.map(option=> <Pricings
                    option={option}
                    ></Pricings>)
                }
            </div>
        </div>
    );
};

export default Pricing;