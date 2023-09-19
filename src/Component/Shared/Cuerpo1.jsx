import React, { useState } from 'react';
import {RiArrowRightLine,  RiSearchLine, RiStarFill, RiFacebookFill, RiInstagramLine, RiPinterestLine, RiTwitterFill, RiYoutubeFill } from "react-icons/ri";
import Comida2 from "../Img/Comida2.jpg"
import Comida3 from "../Img/Comida3.jpg"
import Comida4 from "../Img/comida4.jpg"
import Logo from "../Img/logo.jpg"
import Fondo1 from "../Img/fondo1.jpg"
import Fondo2 from "../Img/fondo2.jpg"
function Cuerpo1() {
  
    const [placeholder, setPlaceholder] = useState('EMAIL ADDRESS');
    const [placeholder1, setPlaceholder1] = useState('SEARCH MINIMALIST BAKER');
    const [placeholder2, setPlaceholder2] = useState('EMAIL ADDRESS...');
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
  const handleInputClick2 = () => {
    setPlaceholder2('');
  };
  const handleInputBlur2 = () => {
    if (placeholder2 === '') {
      setPlaceholder2('EMAIL ADDRESS...');
    }
  };
  return (
  <div>
    <div className='pl-7 pr-5 pb-6 xl:pl-[185px] xl:pr-[180px] max-sm:pr-4 max-sm:pl-4'>
      <div className='grid justify-center mt-5 pb-10 ' >
          <button className='flex items-center  text-orange-500 '>SHOW ME EVERYTHING<RiArrowRightLine className='w-8 h-8 ml-5 text-black' /></button>
      </div>
      <div className='grid grid-cols-2 text-center max-sm:grid-cols-1 '>
          <div className='bg-[#FBF8F3] pt-20 pb-20 p-2 '>
              <h2 className='text-[20px] tracking-[10px]'>PICK   OF   THE   WEEK</h2>
              <h1 className='text-[47px] tracking-[-2px] font-bold max-lg:text-[37px]'>Chessy Vegan pizza  </h1>
              <h1 className='text-[47px] tracking-[-2px] -mt-6 font-bold text-serif max-lg:text-[40px]  '>Beans (30 Minutes!)</h1>
              <p className='text-[15px] tracking-[1px] mt-5'>Savory, saucy, and CHEESY white beans that taste like pizza! An easy, 
                    comforting, plant-based entrée with just 10 ingredients and 30 minutes required!</p>
            <div className='mt-8'>
              <button className='border-[3px] text-xl tracking-[3px] font-bold border-black w-44 h-14 hover:bg-red-200 hover:border-red-200'>View Recipe</button>
            </div>     
          </div>
          <div className='bg-red-200 '>
            <a href='#' ><img src={Comida2} className='h-[500px] w-[550px] xl:w-full' /> </a>
          </div>
      </div>
    </div>
    <div className='pt-6 pb-12 xl:pl-[185px] xl:pr-[180px]'>
      <div className='grid grid-cols-6  bg-[#003811] p-6 items-center max-lg:grid-cols-1'>
        <div className='col-span-1  text-2xl text-[#FFDED6] font-bold max-lg:col-span-2 max-lg:text-center' >
           <h1>*Want more deliciousness?</h1>
        </div>
        <div className='col-span-2 text-white text-[20px] ml-4 max-lg:text-center max-lg:mt-5 max-lg:ml-8 '>
            <p>Subscribe here and we’ll send you an email as new recipes are published AND our fan favorites ebook!</p>
        </div>
        <div className='col-span-3 max-lg:mt-8 '>
          <form className='flex h-14 ml-12 max-sm:ml-3   '>
            <input
              type='email'
              placeholder={placeholder}
              className={`w-[390px] placeholder:tracking-[5px] placeholder:text-[12px] placeholder:text-black font-serif font-bold  pl-5 outline-none max-lg:w-[590px]`}
              onClick={handleInputClick}
              onBlur={handleInputBlur}
            />
            <button className='bg-red-200 w-[100px] font-bold hover:bg-[#FFB5A3] max-sm:w-[250px]'>SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
    <div className='bg-[#FBF8F3] '>
      <div className='grid grid-cols-8 pt-16 pr-5 pl-7 justify-center xl:pl-[185px] xl:pr-[180px] max-lg:grid-cols-1 max-sm:pl-4 max-sm:pr-4'>
        <div className='col-span-6 pr-16 max-lg:pr-2 max-sm:pr-0'>
          <form className='flex items-center'>
            <input
              type='email'
              placeholder={placeholder1}
              className={`w-full placeholder:tracking-[5px] h-12 placeholder:text-[12px] max-sm:placeholder:text-[10px] placeholder:text-[#646664] font-serif font-bold pl-5 max-sm:pl-1 outline-none border border-black active:border-2 active:rounded-[4px] `}
              onClick={handleInputClick1}
              onBlur={handleInputBlur1}
            />
            <RiSearchLine className=' ml-[700px] max-sm:ml-[320px] font-bold absolute hover:text-[#D56638] h-8 w-8'/>
          </form>
          <div className=' grid justify-center  text-center bg-[#FFFFFF] mt-8 pb-8 pt-8 pl-28 pr-28'>
            <h1 className='text-2xl font-bold  max-sm:w-[200px]'>RECIPEY KEY</h1>
            <div className='grid grid-cols-4 gap-3 max-sm:mt-5  pt-3 max-sm:gap-2 items-center max-lg:grid-cols-5 max-xl:-ml-24 max-sm:grid-cols-1 '>
                <div>
                    <button className='bg-[#f5baaf] max-sm:-ml-[90px]  rounded-full w-8 h-8  max-lg:w-6  max-lg:h-7 font-bold hover:bg-[#f19d8b]  '>
                    GF
                    </button><a href='' className='ml-2 hover:underline '>Gluten-Free</a>
                </div>
                <div>
                    <button className='bg-[#F31A0A] max-sm:-ml-[130px] rounded-full w-8 h-8 max-lg:w-6  max-lg:h-7 text-white font-bold hover:bg-[#d83125]'>
                    VG
                    </button><a href='' className='ml-2  hover:underline' >Vegan</a>
                </div>
                <div>
                    <button className='bg-[#B45026] max-sm:-ml-[100px] rounded-full w-8 h-8 max-lg:w-6  max-lg:h-7 text-white font-bold'> 
                    V
                    </button><a href='' className='ml-2 hover:underline'>Vegetarian</a>
                </div>
                <div>
                    <button className='bg-[#000502] max-sm:-ml-[100px] rounded-full w-8 h-8 max-lg:w-6  max-lg:h-7 text-white font-bold'>
                    DF
                    </button><a href='' className='ml-2 hover:underline'>Dairy-Free</a>
                </div>
                <div className=' w-60 ml-32 lg:mt-2  max-lg:-ml-5'>
                    <button className='bg-[#111111] max-sm:ml-[60px] rounded-full w-8 h-8 max-lg:w-6  max-lg:h-7 text-white font-bold'>
                    NS
                    </button><a href='' className='ml-2 hover:underline'>Naturally Sweetend</a>
                </div>
            </div>
          </div>
          <div className='mt-12 mb-12'>
            <hr className='border-t-2 border-[#2B2B2B]' />
          </div>
          <div className='flex items-center gap-60 max-sm:grid max-sm:grid-cols-1 max-sm:text-center max-sm:gap-2 '>
            <p className='text-[28px] font-bold w-96 max-sm:text-[25px]  max-sm:w-full'>RECENT READER FAVORITES</p>
            <div className='flex max-sm:justify-center max-sm:mx-auto '>
              <RiStarFill className='h-7 w-7 text-[#D56638]'/>
              <RiStarFill className='h-7 w-7 text-[#D56638]' />
              <RiStarFill className='h-7 w-7 text-[#D56638]'/>
              <RiStarFill className='h-7 w-7 text-[#D56638]'/>
              <RiStarFill className='h-7 w-7 text-[#D56638]'/>
            </div>
          </div>
          <div className='grid grid-cols-1  '>
            <div className='flex items-center group bg-[#FFFFFF] hover:bg-[#003811] hover:text-white mt-12 mb-5 max-sm:grid max-sm:grid-cols-1'>
              <a href='#' ><img src={Comida3} className='h-[140px] w-[140px] max-sm:p-4 max-sm:w-full max-sm:h-[320px] ' /> </a>
              <p className='rounded-full rounded-r-lg h-6 w-6 -ml-6 bg-[#FFFFFF]  group-hover:bg-[#003811] max-sm:hidden'></p>
              <div className='flex items-center gap-8 ml-6 max-sm:grid max-sm:grid-cols-1 max-sm:justify-center max-sm:mx-auto max-sm:text-center max-sm:gap-4 max-sm:-mt-3'>
                <h1 className='text-[30px] font-bold '>01</h1>
                <h1 className='text-[23px] w-48  max-sm:w-52 max-sm:ml-4 font-serif'>BBQ Sweet Potato Chickpea Tacos</h1>
                <div className='flex gap-3 max-lg:gap-3 ml-[86px] max-sm:ml-10  max-sm:gap-2 max-sm:mb-8 '>
                    <button className='bg-[#f5baaf]  rounded-full w-8 h-8  max-lg:w-6  max-lg:h-7 font-bold hover:bg-[#f19d8b]  '>
                    GF
                    </button>
                    <button className='bg-[#F31A0A]  rounded-full w-8 h-8 max-lg:w-6  max-lg:h-7 text-white font-bold hover:bg-[#d83125]'>
                    VG
                    </button>
                    <button className='bg-[#B45026] rounded-full w-8 h-8 max-lg:w-6  max-lg:h-7 text-white font-bold'> 
                    V
                    </button>
                    <button className='bg-[#000502]  rounded-full w-8 h-8 max-lg:w-6  max-lg:h-7 text-white font-bold'>
                    DF
                    </button>
                    <button className='bg-[#111111]  rounded-full w-8 h-8 max-lg:w-6  max-lg:h-7 text-white font-bold'>
                    NS
                    </button>
                </div>
              </div>
            </div>
            <div className='flex items-center  group hover:bg-[#003811] hover:text-white bg-[#FFFFFF] mb-5 max-sm:grid max-sm:grid-cols-1 ' >
              <a href='#' ><img src={Comida3} className='h-[140px] w-[140px] max-sm:p-4 max-sm:w-full max-sm:h-[320px]' /> </a>
              <p className='rounded-full rounded-r-lg h-6 w-6 -ml-6 bg-[#FFFFFF]  group-hover:bg-[#003811] max-sm:hidden '></p>
              <div className='flex items-center gap-8 ml-6 max-sm:grid max-sm:grid-cols-1 max-sm:justify-center max-sm:mx-auto max-sm:text-center max-sm:gap-4 max-sm:-mt-3'>
                <h1 className='text-[30px]  font-bold'>02</h1>
                <h1 className='text-[23px]  w-48 max-sm:w-52 max-sm:ml-4 font-serif'>No-Bake Peanut Butter Cup Bars</h1>
                <div className='flex gap-3 max-lg:gap-3 ml-[86px] max-sm:ml-12  max-sm:gap-2 max-sm:mb-8 '>
                    <button className='bg-[#F31A0A]  rounded-full w-8 h-8 max-lg:w-6  max-lg:h-7 text-white font-bold hover:bg-[#d83125]'>
                    VG
                    </button>
                    <button className='bg-[#B45026] rounded-full w-8 h-8 max-lg:w-6  max-lg:h-7 text-white font-bold'> 
                    V
                    </button>
                    <button className='bg-[#000502]  rounded-full w-8 h-8 max-lg:w-6  max-lg:h-7 text-white font-bold'>
                    DF
                    </button>
                    <button className='bg-[#111111]  rounded-full w-8 h-8 max-lg:w-6  max-lg:h-7 text-white font-bold'>
                    NS
                    </button>
                </div>
              </div>
            </div>
            <div className='flex items-center group hover:bg-[#003811] hover:text-white bg-[#FFFFFF] mb-5  max-sm:grid max-sm:grid-cols-1'>
              <a href='#' ><img src={Comida3} className='h-[140px] w-[140px] max-sm:p-4 max-sm:w-full max-sm:h-[320px]' /> </a>
              <p className='rounded-full rounded-r-lg h-6 w-6 -ml-6 bg-[#FFFFFF]  group-hover:bg-[#003811] max-sm:hidden'></p>
              <div className='flex items-center gap-8 ml-6 max-sm:grid max-sm:grid-cols-1 max-sm:justify-center max-sm:mx-auto max-sm:text-center max-sm:gap-4 max-sm:-mt-3'>
                <h1 className='text-[30px] font-bold'>03</h1>
                <h1 className='text-[23px] w-48  max-sm:w-52 max-sm:ml-4  font-serif'>Plum Upside Down Cake (Vegan + GF)</h1>
                <div className='flex gap-3 max-lg:gap-3 ml-[86px] max-sm:ml-14  max-sm:gap-2 max-sm:mb-8 '>
                    <button className='bg-[#F31A0A]  rounded-full w-8 h-8 max-lg:w-6  max-lg:h-7 text-white font-bold hover:bg-[#d83125]'>
                    VG
                    </button>
                    <button className='bg-[#B45026] rounded-full w-8 h-8 max-lg:w-6  max-lg:h-7 text-white font-bold'> 
                    V
                    </button>
                    <button className='bg-[#000502]  rounded-full w-8 h-8 max-lg:w-6  max-lg:h-7 text-white font-bold'>
                    DF
                    </button>
                    <button className='bg-[#111111]  rounded-full w-8 h-8 max-lg:w-6  max-lg:h-7 text-white font-bold'>
                    NS
                    </button>
                </div>
              </div>
            </div>
            <div className='flex items-center group hover:bg-[#003811] hover:text-white bg-[#FFFFFF] mb-5 max-sm:grid max-sm:grid-cols-1'>
              <a href='#' ><img src={Comida3} className='h-[140px] w-[140px] max-sm:p-4 max-sm:w-full max-sm:h-[320px]' /> </a>
              <p className='rounded-full rounded-r-lg h-6 w-6 -ml-6 bg-[#FFFFFF]  group-hover:bg-[#003811] max-sm:hidden '></p>
              <div className='flex items-center gap-8 ml-6 max-sm:grid max-sm:grid-cols-1 max-sm:justify-center max-sm:mx-auto max-sm:text-center max-sm:gap-4 max-sm:-mt-3'>
                <h1 className='text-[30px] max-sm:w-52 max-sm:ml-4 font-bold'>04</h1>
                <h1 className='text-[23px] w-48  max-sm:w-52 max-sm:ml-4  font-serif'>Easy Mediterranean-Inspired Nourish Bowls</h1>
                <div className='flex gap-3 max-lg:gap-3 ml-[86px] max-sm:ml-12  max-sm:gap-2 max-sm:mb-8 '>
                    <button className='bg-[#f5baaf]  rounded-full w-8 h-8  max-lg:w-6  max-lg:h-7 font-bold hover:bg-[#f19d8b]  '>
                    GF
                    </button>
                    <button className='bg-[#F31A0A]  rounded-full w-8 h-8 max-lg:w-6  max-lg:h-7 text-white font-bold hover:bg-[#d83125]'>
                    VG
                    </button>
                    <button className='bg-[#B45026] rounded-full w-8 h-8 max-lg:w-6  max-lg:h-7 text-white font-bold'> 
                    V
                    </button>
                    <button className='bg-[#000502]  rounded-full w-8 h-8 max-lg:w-6  max-lg:h-7 text-white font-bold'>
                    DF
                    </button>
                    <button className='bg-[#111111]  rounded-full w-8 h-8 max-lg:w-6  max-lg:h-7 text-white font-bold'>
                    NS
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-2 '>
          <div className='bg-[#F1F1F1] h-[200px]'>
          </div>        
        </div>
      </div>
      <div className='pl-6 pr-5 pt-10 pb-10 max-lg:pl-4 max-lg:pr-4 max-sm:pl-4 max-sm:pr-3  xl:pl-[185px] xl:pr-48'>
        <hr className='border-t-1 border-[#2B2B2B]' />  
      </div>
      <div className='pl-7 pr-5 pb-8 max-sm:pl-4 max-sm:pr-3'>
        <div className='flex justify-between items-center xl:pl-[160px] xl:pr-40'>
          <h1 className='text-[30px] font-bold'>RECIPE ROUND-UPS</h1>  
          <button className='flex items-center hover:text-orange-500  font-bold text-black max-sm:hidden '>SHOW ME EVERYTHING<RiArrowRightLine className='w-8 h-6' /></button>  
        </div>
        <div className='grid grid-cols-4 pb-6 pt-6   gap-5 max-lg:grid-cols-4 max-sm:grid-cols-1 xl:ml-40 xl:mr-40'>
          <div className=' flex flex-col items-center '> 
            <a href=""><img src={Comida4} /></a>
            <div className='flex gap-3 max-lg:gap-3  pt-3 max-sm:gap-2'>
              <button className='bg-[#f5baaf]  rounded-full w-8 h-8  max-lg:w-6  max-lg:h-7 font-bold hover:bg-[#f19d8b]  '>
                GF
              </button>
              <button className='bg-[#F31A0A]  rounded-full w-8 h-8 max-lg:w-6  max-lg:h-7 text-white font-bold hover:bg-[#d83125]'>
                VG
              </button>
            </div>
              <h1 className='text-[20px] mt-2 font-bold text-center'>25 Comforting Fall Dinner Ideas</h1>   
          </div>
          <div className=' flex flex-col items-center '> 
                <a href=""><img src={Comida4} /></a>
                <div className='flex gap-3 max-lg:gap-3  pt-3 max-sm:gap-2'>
                    <button className='bg-[#f5baaf]  rounded-full w-8 h-8  max-lg:w-6  max-lg:h-7 font-bold hover:bg-[#f19d8b]  '>
                    GF
                    </button>
                    <button className='bg-[#F31A0A]  rounded-full w-8 h-8 max-lg:w-6  max-lg:h-7 text-white font-bold hover:bg-[#d83125]'>
                    VG
                    </button>
                    <button className='bg-[#B45026] rounded-full w-8 h-8 max-lg:w-6  max-lg:h-7 text-white font-bold'> 
                    V
                    </button>
                </div>
                <h1 className='text-[20px] mt-2 font-bold text-center'>25 Cozy Drinks For Fall</h1>
                
          </div>
          <div className=' flex flex-col items-center '> 
                <a href=""><img src={Comida4} /></a>
                <div className='flex gap-3 max-lg:gap-3  pt-3 max-sm:gap-2'>
                    <button className='bg-[#f5baaf]  rounded-full w-8 h-8  max-lg:w-6  max-lg:h-7 font-bold hover:bg-[#f19d8b]  '>
                    GF
                    </button>
                    <button className='bg-[#F31A0A]  rounded-full w-8 h-8 max-lg:w-6  max-lg:h-7 text-white font-bold hover:bg-[#d83125]'>
                    VG
                    </button>
                    <button className='bg-[#B45026] rounded-full w-8 h-8 max-lg:w-6  max-lg:h-7 text-white font-bold'> 
                    V
                    </button>

                </div>
                <h1 className='text-[20px] mt-2 font-bold text-center'>Best Vegan Apple Desserts</h1>
                
          </div>
          <div className=' flex flex-col items-center '> 
            <a href=""><img src={Comida4} /></a>
            <div className='flex gap-3 max-lg:gap-3  pt-3 max-sm:gap-2'>
              <button className='bg-[#f5baaf]  rounded-full w-8 h-8  max-lg:w-6  max-lg:h-7 font-bold hover:bg-[#f19d8b]  '>
                 GF
              </button>
              <button className='bg-[#F31A0A]  rounded-full w-8 h-8 max-lg:w-6  max-lg:h-7 text-white font-bold hover:bg-[#d83125]'>
                VG
              </button>
              <button className='bg-[#B45026] rounded-full w-8 h-8 max-lg:w-6  max-lg:h-7 text-white font-bold'> 
                V
              </button>
            </div>
              <h1 className='text-[20px] mt-2 font-bold text-center'>EASY Make-Ahead Breakfasts (Plant-Based)</h1>    
          </div>  
        </div>
      </div>
    </div>
    <div className=' bg-[#FBF8F3] h-36 w-36 flex justify-center items-center mx-auto rounded-full -mt-20'>
      <img src={Logo} className='w-14 h-14 mt-12 object-cover rounded-full' />
    </div>
    <h1 className='text-center mt-4  text-[30px] font-bold'>Explore Recipes</h1>
    <div className='pl-7 pr-5'>
      <div className='grid grid-cols-4 pt-6 pb-6 max-lg:pb-1   gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1 xl:ml-40 xl:mr-40  '>
        <button className='border-[3px]  tracking-[5px] w-full h-12 font-bold border-[#D56638] text-[#D56638] hover:text-white active:bg-[#D56638] active:text-white rounded-md '>SWEET (DESERT)</button>
        <button className='border-[3px] tracking-[5px] w-full h-12 font-bold border-[#003811] text-[#003811] hover:text-white active:bg-[#003811] active:text-white rounded-md '>ENTREE</button>
        <button className='border-[3px]  tracking-[5px] w-full h-12 font-bold border-[#F74639] text-[#F74639] hover:text-white active:bg-[#F74639] active:text-white rounded-md '>SNACKS</button>
        <button className='border-[3px]  tracking-[5px] w-full h-12 font-bold border-[#2A2B2A] text-[#2A2B2A] hover:text-white active:bg-[#2A2B2A] active:text-white rounded-md '>HELPFUL HOW-TOS</button>
      </div>
      <div className='grid grid-cols-4 pb-6 pt-6   gap-5 max-lg:grid-cols-4 max-sm:grid-cols-2 xl:ml-40 xl:mr-40 '>
        <div className=' flex flex-col items-center '>    
          <a href=""><img src={Comida4} /></a>
          <h1 className='text-[20px] mt-2 font-bold text-center hover:text-orange-500'>Magical Vegan Cashew Whipped Cream</h1>
        </div>
        <div className=' flex flex-col items-center '>  
          <a href=""><img src={Comida4} /></a>
          <h1 className='text-[20px] mt-2 font-bold text-center hover:text-orange-500'>Gluten-Free Hamburger Buns (Vegan)</h1>   
        </div>
        <div className=' flex flex-col items-center '> 
          <a href=""><img src={Comida4} /></a>
          <h1 className='text-[20px] mt-2 font-bold text-center hover:text-orange-500'>Best 1:1 Gluten-Free Flour Blend (Our Secret Recipe!)</h1>    
        </div>
        <div className=' flex flex-col items-center '> 
          <a href=""><img src={Comida4} /></a>
          <h1 className='text-[20px] mt-2 font-bold text-center hover:text-orange-500'>The BEST Homemade Taco Seasoning</h1>        
        </div>
        <div className=' flex flex-col items-center '> 
          <a href=""><img src={Comida4} /></a>
          <h1 className='text-[20px] mt-2 font-bold text-center hover:text-orange-500'>The BEST Homemade Taco Seasoning</h1>
        </div>
        <div className=' flex flex-col items-center '> 
          <a href=""><img src={Comida4} /></a>
          <h1 className='text-[20px] mt-2 font-bold text-center hover:text-orange-500'>The BEST Homemade Taco Seasoning</h1>
        </div>
        <div className=' flex flex-col items-center '> 
          <a href=""><img src={Comida4} /></a>
          <h1 className='text-[20px] mt-2 font-bold text-center hover:text-orange-500'>The BEST Homemade Taco Seasoning</h1>
        </div>
        <div className=' flex flex-col items-center '> 
          <a href=""><img src={Comida4} /></a>
          <h1 className='text-[20px] mt-2 font-bold text-center hover:text-orange-500'>The BEST Homemade Taco Seasoning</h1>
        </div>
      </div>
    </div>
    <div className='flex justify-center pt-6 pb-14'>
      <button className='flex items-center  text-orange-500 '>GO TO ALL RECIPES<RiArrowRightLine className='w-8 h-8 ml-5 text-black' /></button>
    </div>
    <div className='relative  items-center justify-center'>
      <img src={Fondo1} className='max-lg:h-[550px]'/>
      <div className='absolute inset-0 flex items-center justify-center text-center  max-sm:p-8'>
        <div className='h-[340px] w-[500px] bg-[#FBF8F3] max-sm:h-[400px]'>
          <div className=' bg-[#FBF8F3] h-28 w-28 flex justify-center items-center mx-auto rounded-full -mt-10'>
            <img src={Logo} className='w-14 h-14 -mt-4 object-cover rounded-full' />
          </div>
          <h1 className='text-[35px] -mt-5 tracking-[7px]'>SHOP</h1>
          <p className='ml-10 mr-10 mt-2 text-[18px]'>Curious what equipment and pantry staples we love? Check out our shop, where we share our go-to and recommend appliances, ingredients, tools, and more!</p>
          <div className='flex justify-center  mx-auto border-2 w-24 mt-5 border-black '>
          </div>
          <button className='flex justify-center  mx-auto items-center mt-5  text-orange-500 max-sm:grid max-sm:grid-cols-1 '>SHOP OUR RECOMMENDATIONS<RiArrowRightLine className='w-8 h-8 ml-5 text-black max-sm:justify-center max-sm:mx-auto ' /></button>
        </div>
      </div>
    </div>
    <div className=' bg-[#FBF8F3]'>
      <div className='pl-7 pr-5 xl:pl-[185px] xl:pr-48 max-sm:pl-4 max-sm:pr-4'>
        <div className='grid grid-cols-2 mt-16 max-lg:grid-cols-1 '>
          <div className='bg-red-200  text-center pl-5 max-sm:pl-4 max-sm:pr-4 pr-5 xl:flex xl:gap-5  max-lg:pl-40  max-lg:pr-40 '>
            <img src={Fondo2} className='h-72 justify-center mx-auto mt-10'/>
            <div className=' '>
              <h1 className='text-[35px] tracking-[7px] mb-5 xl:text-[20px] xl:mt-6 max-lg:text-[24px] max-lg:mt-2'>Want More Deliciousness?</h1>
              <strong className='mt-10 '>Subscribe here and we'll send you an email as new recipes are published  </strong>
              <p >As a thank you, we'd also love to send you our fan favorites ebook!</p>
              <form className='mt-5 mb-5'>
                <input
                  type='email'
                  placeholder={placeholder2}
                  className={`w-full placeholder:tracking-[5px] h-12 placeholder:text-[12px] placeholder:text-[#646664] font-serif font-bold pl-5 outline-none border border-black bg-red-200 `}
                  onClick={handleInputClick2}
                  onBlur={handleInputBlur2}
                />
              </form>
              <button className='w-full bg-white mb-5 h-12 font-bold hover:bg-[#FFB5A3]'>GET MY EBOOK!</button>
            </div>
          </div>
          <div className='pl-12 mt-10 max-lg:pl-1 '>
            <div className='flex tracking-[3px] max-sm:text-[12px] '>
              <p>FIND US ELSEWHERE </p>
              <strong className='ml-5 '>@minimalistbaker</strong>
            </div>
            <div className='grid grid-cols-3 gap-4 mt-20 max-sm:grid-cols-1 max-sm:mt-7'>
              <div>
                <div className='flex text-black hover:text-[#D56638] justify-between'>
                  <p className='font-serif tracking-[2px] text-[11px]  mt-3'>INSTAGRAM</p>
                  <strong className='text-[23px] '>2.1 m</strong>
                </div>
                <div className='flex justify-center  mx-auto border-2 w-full border-[#D56638] '></div>
              </div>
              <div>
                <div className='flex text-black hover:text-[#D56638] justify-between'>
                  <p className='font-serif tracking-[2px] text-[11px]  mt-3'>PINTEREST</p>
                  <strong className='text-[23px] '>405K</strong>
                </div>
                <div className='flex justify-center  mx-auto border-2 w-full border-[#FFDED6] '></div>
              </div>
              <div>
                <div className='flex text-black hover:text-[#D56638] justify-between'>
                  <p className='font-serif tracking-[2px] text-[11px]  mt-3'>FACEBOOK</p>
                  <strong className='text-[23px]  '>505K</strong>
                </div>
                <div className='flex justify-center  mx-auto border-2 w-full border-[#D56638] '></div>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-3 mt-10  pb-10 max-lg:grid-cols-1  '>
          <div className='flex items-center max-sm:mx-auto max-sm:justify-center max-lg:mx-auto max-lg:justify-center max-lg:mt-12 '>
            <h1 className='text-[20px] tracking-[5px] max-sm:text-[14px]'>FIND US</h1>
            <div className='flex    '>
            <RiFacebookFill className='h-6 w-6 ml-2 max-sm:ml-3 max-sm:h-5 max-sm:w-5 max-lg:h-8 max-lg:w-8 max-lg:ml-3' /> 
            <RiInstagramLine className='h-6 w-6 ml-2 max-sm:ml-3 max-sm:h-5 max-sm:w-5 max-lg:h-8 max-lg:w-8 max-lg:ml-3'/>
            <RiPinterestLine className='h-6 w-6 ml-2 max-sm:ml-3 max-sm:h-5 max-sm:w-5 max-lg:h-8 max-lg:w-8 max-lg:ml-3' />
            <RiTwitterFill className='h-6 w-6 ml-2 max-sm:ml-3 max-sm:h-5 max-sm:w-5 max-lg:h-8 max-lg:w-8 max-lg:ml-3 '/>
            <RiYoutubeFill className='h-6 w-6 ml-2 max-sm:ml-3 max-sm:h-5 max-sm:w-5 max-lg:h-8 max-lg:w-8 max-lg:ml-3  '/>
            </div>
          </div>
          <div className='max-lg:mx-auto max-lg:justify-center max-lg:mt-5 max-sm:mx-auto max-sm:justify-center'>
            <img src={Logo} className='w-14 h-14 ml-48 max-lg:ml-1 object-cover rounded-full max-lg:h-28 max-lg:w-28 max-sm:h-20 max-sm:w-20'/>
          </div>
          <div className='text-[18px] ml-48 max-lg:mx-auto max-lg:justify-center  max-lg:mt-5 max-lg:w-48 max-sm:mx-auto max-sm:justify-center'>
              <strong>Simple Recipes That
              Make You Feel Good</strong>
          </div>
        </div>
        <div className='flex justify-center  mx-auto border-2 w-full border-[#100f0f]  '></div>
        <div className='flex justify-center  mx-auto gap-12 text-[25px] mt-10 max-lg:grid max-lg:grid-cols-1 max-lg:text-center max-lg:gap-5 '>
          <a>Recipes</a>
          <a>Cookbook</a>
          <a>Shop</a>
          <a>About</a>
        </div>
        <div className='flex justify-center  mx-auto gap-12 text-[15px] mt-10 pb-16 max-sm:grid max-sm:grid-cols-1 max-sm:text-center max-sm:gap-5'>
          <a>©MINIMALISTBAKER.COM</a>
          <a>PRIVACY POLICY </a>
          <a>TERMS</a>
        </div>
      </div>
    </div>
    <div >
      <div className='flex justify-center  mx-auto border-[1px]   border-[#A9A9B1] mt-10 w-44  '></div>
      <p className='text-center text-[#A9A9B1] mb-20'>A RAPTIVE PARTNER SITE</p>
    </div>
  </div>

  )
}

export default Cuerpo1