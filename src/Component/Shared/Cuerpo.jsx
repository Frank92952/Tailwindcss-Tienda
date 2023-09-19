import React from 'react'
import Logo from '../Img/logo.jpg'
import {RiArrowRightLine } from "react-icons/ri";
function Cuerpo() {
  return (
    <div>
        <div className='grid grid-cols-8  pt-8 items-center max-lg:grid-cols-1 '>
            <div className='col-span-1 lg:hidden' >
            </div>
            <div className='col-span-2 flex font-serif font-bold gap-4 items-center max-lg:justify-center  ml-6 justify-center  xl:w-[500px]'>          
              <div className=' max-sm:flex max-sm:justify-center max-sm:items-center max-sm:gap-4  xl:ml-20 '>
                <img src={Logo} className='w-12 h-12 object-cover rounded-full '   />
                {/*celular 
                <div className=' lg:hidden flex justify-center'>
                <p className='text-sm' > Simple Recipes That Make You Feel </p>
                <p className='fixed mt-5 text-sm '>Good</p>
                </div>
                */}
              </div>
              <div className='text-lg  max-lg:items-center  '>
                <div className='max-lg:flex max-lg:gap-2  max-sm:text-[13px] max-sm:gap-1 '>
                  <p className=''>Simple Recipes That</p>
                  <p className='lg:-mt-1 '>Make You Feel Good</p>
                </div>
              </div>
            </div>
            <div className='col-span-2 max-sm:mt-4  max-lg:ml-2 ml-56 xl:ml-80 '>
              <h1 className='text-center text-[35px] font-bold'>RECIPES</h1>
            </div>
            <div className='col-span-2  ml-80 w-60'>
              <button className='flex items-center  max-lg:hidden'>SHOW ME EVERYTHING<RiArrowRightLine className='w-8 h-8 ml-5' /></button>
            </div>
            <div className='col-span-1 lg:hidden'>
            </div>
        </div> 
    </div>
  )
}

export default Cuerpo