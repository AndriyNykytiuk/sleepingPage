import React from 'react'
import Header from './components/Header'
import Main from './components/Main'


function App() {


  return (
    <>
      <div className='bg-[#375B68] h-screen font-[Cabinet-Grotesk] text-[#F5F7FA]'>
        <div className='container mx-auto'>
          <Header/>
          <Main/>
        </div>
      </div>
    </>
  )
}

export default App
