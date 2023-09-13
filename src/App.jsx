import React from 'react'
import Sidebar from "./Component/Shared/Sidebar"
import Menu from './Component/Shared/Menu'
import Cuerpo from './Component/Shared/Cuerpo'

function App() {
  

  return (
    <>
    <Sidebar />
    
    <Menu />
    <div className='pl-48 pr-48  max-lg:pl-4 max-lg:pr-4 max-sm:pl-4 max-sm:pr-5 '>
          <hr className='border-t-2 border-[#2B2B2B]' />
          
    </div>
    <Cuerpo />
    </>
  )
}

export default App
