import React from 'react'
import {RiArrowRightLine } from "react-icons/ri";
import Comida2 from "../Img/Comida2.jpg"
function Cuerpo1() {
  return (
    <div>
    <div className='pl-6 pr-9 pb-6'>
        <div className='grid justify-center mt-5 pb-10 ' >
            <button className='flex items-center  text-orange-500 max-lg:hidden'>SHOW ME EVERYTHING<RiArrowRightLine className='w-8 h-8 ml-5 text-black' /></button>

        </div>
         <div className='grid grid-cols-2 text-center '>
            <div className='bg-[#FBF8F3] pt-20 pb-20 p-2'>
                <h2 className='text-[20px] tracking-[10px]'>PICK   OF   THE   WEEK</h2>
                <h1 className='text-[47px] tracking-[-2px] font-bold'>Chessy Vegan pizza  </h1>
                <h1 className='text-[47px] tracking-[-2px] -mt-6 font-bold text-serif'>Beans (30 Minutes!)</h1>
                <p className='text-[15px] tracking-[1px] mt-5'>Savory, saucy, and CHEESY white beans that taste like pizza! An easy, 
                    comforting, plant-based entrée with just 10 ingredients and 30 minutes required!</p>
             <div className='mt-8'>
             <button className='border-[3px] text-xl tracking-[3px] font-bold border-black w-44 h-14 hover:bg-red-200 hover:border-red-200'>View Recipe</button>
            </div>   
                
            </div>
            <div className='bg-red-200 '>
                <a href='#' ><img src={Comida2} className='h-[500px] w-[550px]' /> </a>
            </div>
         </div>
    </div>
    <div className='pt-6 pb-6'>
    <div className='grid grid-cols-6  bg-[#003811] p-6 items-center'>

        <div className='col-span-1  text-2xl text-[#FFDED6] font-bold'>
           <h1>*Want more deliciousness?</h1>
        </div>
        <div className='col-span-2 text-white text-[21px]'>
            <p>Subscribe here and we’ll send you an email as new recipes are published AND our fan favorites ebook!</p>
        </div>
        <div className='col-span-3'>
        sa
        </div>
    </div>
    </div>

    </div>

  )
}

export default Cuerpo1