import React from 'react';

export const Body = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center ml-10'>
            <div className='mt-10 md:mt-20'>
                <h1 className='text-white text-7xl'>
                    <span className='font-bold'>Groceries </span>
                    <br />
                    <span className='mt-5 inline-block'> delivery in 15 mins</span>
                </h1>
                <p className='text-white mt-5 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquid debitis asperiores minima quisquam. Sunt rerum cumque alias ea qui?</p>
                <div className='flex mt-5 gap-7'>
                    <button className='bg-yellow-400 text-black h-[40px] w-[100px] rounded-lg '>Order Now</button>
                    <button className='bg-transparent text-white border-2 border-white h-[40px] w-[150px] rounded-lg'>Download App</button>
                </div>
            </div>
            <div className='lg:h-[700px] md:h-[550px] hidden md:block'>
                <img className='lg:h-[600px] lg:w-[850px] md:h-[450px] md:w-[550px]' src="./images/grocery-image.png" alt="Grocery" />
            </div>
        </div>
    );
};

export default Body;
