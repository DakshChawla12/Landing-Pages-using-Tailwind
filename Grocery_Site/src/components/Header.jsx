import React from 'react'

const Header = () => {
    return (
        <div className='flex items-center justify-between'>

            <div className='flex '>
                <img className='h-13 w-[250px]' src="./images/logo.png" alt="logo" />
            </div>

            <ul className='flex gap-14'>
                <li className='text-white text-xl'>Home</li>
                <li className='text-white text-xl'>About</li>
                <li className='text-white text-xl'>Features</li>
                <li className='text-white text-xl'>Contact</li>
            </ul>

            <img src="./images/cart.png" alt="cart" className='h-12'/>

        </div>
    )
}

export default Header;
