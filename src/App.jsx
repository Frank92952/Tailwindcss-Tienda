import React from 'react'
import Sidebar from "./Component/Shared/Sidebar"
import Menu from './Component/Shared/Menu'
import Cuerpo from './Component/Shared/Cuerpo'
import Card from './Component/Shared/Card'
import Comida1 from './Component/Img/comida1.jpg'
import Cuerpo1 from './Component/Shared/Cuerpo1'
function App() {
  

  return (
    <>
    
    <Sidebar />
    
    <Menu />
    <div className='pl-7 pr-5  max-lg:pl-4 max-lg:pr-4 max-sm:pl-4 max-sm:pr-3  xl:pl-48 xl:pr-48'>
          <hr className='border-t-2 border-[#2B2B2B]' />
          
    </div>
    <Cuerpo />
    <div className='grid grid-cols-4 pb-6 pt-6 pl-7 pr-5 gap-5 max-lg:grid-cols-4 max-sm:grid-cols-2 xl:ml-40 xl:mr-40'>
      <Card img={Comida1} nombre="Creamy Vegan Broccoli Cheddar Soup" boton="New Recipes"/>
      <Card img={Comida1} nombre="Easy Vegan “Tuna” Melt" boton="New Recipes"/>
      <Card img={Comida1} nombre="Creamy Vegan Broccoli Cheddar Soup" boton="New Recipes"/>
      <Card img={Comida1} nombre="Creamy Vegan Broccoli Cheddar Soup" boton="New Recipes"/>
    </div>
    <Cuerpo1 />
    </>
  )
}

export default App
