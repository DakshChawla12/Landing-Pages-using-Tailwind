import React from 'react'

const Body = () => {
    return (
        <div className='space-y-4 lg:flex flex-row-reverse'>

            <div className='flex items-center justify-center lg:flex-1 lg:h-[400px]'>
                <img src="./assets/Blue-Shape.svg" alt="1st" className='-rotate-[45deg] h-64 md:h-72' />
                <img src="./assets/Pink-Shape.svg" alt="1st" className='absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]' />
                <img src="./assets/Purple-Shape.svg" alt="1st" className='absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]' />
                <img src="./assets/Hero-Model.png" alt="1st" className='absolute h-64 md:h-72 lg:h-[400px]' />
            </div>

            <div className='lg:flex-1'>
                <h1 className='text-5xl font-bold leading-tight'>Host your website in less than 5 minutes</h1>
                <p className='text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt eveniet in ex iste obcaecati ducimus magni eum facere quibusdam tenetur!</p>
                <form action="" className='flex flex-col gap-4 mt-4 md:flex-row'>
                    <input type="email" placeholder='enter email address'className='rounded-md px-4 py-3 placeholder:text-gray-400'/>
                    <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white'>Join Waitlist</button>
                </form>
                <div className='flex gap-3'>
                    <img src="./assets/Checkmark.svg" alt="" />
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, saepe.</p>
                </div>
            </div>

        </div>
    )
}

export default Body
