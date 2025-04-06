import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";

const Buttons = () => {
  return (
    <div className='flex gap-5 ' >
        <button><FaCartShopping /></button>
        <button><FaUser /></button>
        <button><BsGlobe2 /></button>
    </div>
  )
}

export default Buttons