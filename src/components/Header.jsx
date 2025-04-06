import React from 'react'
import Menu from './Menu'
import Buttons from './Buttons'

const Header = () => {
  return (
    <>
    
        <header className='flex justify-between items-center py-5'>
            <Menu/>
            <Buttons/>
        </header>

    </>
  )
}

export default Header