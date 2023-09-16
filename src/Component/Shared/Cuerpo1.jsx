import React, { useState } from 'react';
import {RiArrowRightLine,  RiSearchLine, RiStarFill } from "react-icons/ri";
import Comida2 from "../Img/Comida2.jpg"
function Cuerpo1() {
    const [placeholder, setPlaceholder] = useState('EMAIL ADDRESS');
    const [placeholder1, setPlaceholder1] = useState('SEARCH MINIMALIST BAKER');
  const handleInputClick = () => {
    setPlaceholder('');
  };
  const handleInputBlur = () => {
    if (placeholder === '') {
      setPlaceholder('EMAIL ADDRESS');
    }
  };
  const handleInputClick1 = () => {
    setPlaceholder1('');
  };
  const handleInputBlur1 = () => {
    if (placeholder1 === '') {
      setPlaceholder1('SEARCH MINIMALIST BAKER');
    }
  };
  return (
    <div>
    <div className='pl-7 pr-5 pb-6'>
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
    <div className='pt-6 pb-12'>
    <div className='grid grid-cols-6  bg-[#003811] p-6 items-center'>

        <div className='col-span-1  text-2xl text-[#FFDED6] font-bold'>
           <h1>*Want more deliciousness?</h1>
        </div>
        <div className='col-span-2 text-white text-[20px] ml-4 '>
            <p>Subscribe here and we’ll send you an email as new recipes are published AND our fan favorites ebook!</p>
        </div>
        <div className='col-span-3  '>
        <form className='flex h-14 ml-12  '>
            <input
              type='email'
              placeholder={placeholder}
              className={`w-[390px] placeholder:tracking-[5px] placeholder:text-[12px] placeholder:text-black font-serif font-bold  pl-5 outline-none`}
              onClick={handleInputClick}
              onBlur={handleInputBlur}
            />
            <button className='bg-red-200 w-[100px] font-bold hover:bg-[#FFB5A3]'>SUBMIT</button>
          </form>
        </div>
    </div>
    </div>
    <div className='bg-[#FBF8F3]  '>
        
        <div className='grid grid-cols-8 pt-16 pr-5 pl-7 justify-center '>
            <div className='col-span-6 pr-16'>
            <form className='flex items-center'>
            <input
              type='email'
              placeholder={placeholder1}
              className={`w-full placeholder:tracking-[5px] h-12 placeholder:text-[12px] placeholder:text-[#646664] font-serif font-bold pl-5 outline-none border border-black active:border-2 active:rounded-[4px] `}
              onClick={handleInputClick1}
              onBlur={handleInputBlur1}
            />
            <RiSearchLine className='m ml-[700px] font-bold absolute hover:text-[#D56638] h-8 w-8'/>
          </form>
          <div className=' grid justify-center  text-center bg-[#FFFFFF] mt-8 pb-8 pt-8 pl-28 pr-28'>
            <h1 className='text-2xl font-bold'>RECIPEY KEY</h1>
            <div className='grid grid-cols-4 gap-3 max-lg:gap-3  pt-3 max-sm:gap-2 items-center '>
                <div>
                    <button className='bg-[#f5baaf]  rounded-full w-8 h-8  max-lg:w-6  max-lg:h-7 font-bold hover:bg-[#f19d8b]  '>
                    GF
                    </button><a href='' className='ml-2 hover:underline '>Gluten-Free</a>
                </div>
                <div>
                    <button className='bg-[#F31A0A]  rounded-full w-8 h-8 max-lg:w-6  max-lg:h-7 text-white font-bold hover:bg-[#d83125]'>
                    VG
                    </button><a href='' className='ml-2 hover:underline' >Vegan</a>
                </div>
                <div>
                    <button className='bg-[#B45026] rounded-full w-8 h-8 max-lg:w-6  max-lg:h-7 text-white font-bold'> 
                    V
                    </button><a href='' className='ml-2 hover:underline'>Vegetarian</a>
                </div>
                <div>
                    <button className='bg-[#000502]  rounded-full w-8 h-8 max-lg:w-6  max-lg:h-7 text-white font-bold'>
                    DF
                    </button><a href='' className='ml-2 hover:underline'>Dairy-Free</a>
                </div>
                <div className=' w-60 ml-32 mt-2  '>
                    <button className='bg-[#111111]  rounded-full w-8 h-8 max-lg:w-6  max-lg:h-7 text-white font-bold'>
                    NS
                    </button><a href='' className='ml-2 hover:underline'>Naturally Sweetend</a>
                </div>

                </div>
          </div>
            <div className='mt-12 mb-12'>
                <hr className='border-t-2 border-[#2B2B2B]' />
        
            </div>
            <div className='flex items-center gap-60'>
                <p className='text-[28px] font-bold w-96'>RECENT READER FAVORITES</p>
                <div className='flex '>
                <RiStarFill className='h-7 w-7 text-[#D56638]'/>
                <RiStarFill className='h-7 w-7 text-[#D56638]' />
                <RiStarFill className='h-7 w-7 text-[#D56638]'/>
                <RiStarFill className='h-7 w-7 text-[#D56638]'/>
                <RiStarFill className='h-7 w-7 text-[#D56638]'/>
                </div>

            </div>
        </div>
            <div className='col-span-2 '>
                <div className='bg-[#F1F1F1] h-[200px]'>
                </div>
                 
            </div>
        </div>
        <div>

        </div>
        <div>

        </div>
    </div>

    </div>

  )
}

export default Cuerpo1