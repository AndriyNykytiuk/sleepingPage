import React from 'react'
import '../css/customHover.css'
const Menu = () => {
  return (
    <>
        <div>
            <ul className='flex gap-5 justify-between  items-center text-md'>
                <li><a href="" className='customHover '>Home</a></li>
                <li><a href="" className='customHover '>About</a></li>
                <li><a href="" className='customHover '>Payment</a></li>
                <li><a href="" className='customHover '>Catalog</a></li>
                <li><a href="" className='customHover '>Shop</a></li>
                <li><a href="" className='customHover '>Blog</a></li>
            </ul>
        </div>
    </>
  )
}

export default Menu