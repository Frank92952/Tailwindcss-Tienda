import { useState } from 'react'
import { RiSearchLine, RiMenuFill,RiCloseLine, RiFacebookFill, RiInstagramLine, RiPinterestLine, RiTwitterFill, RiYoutubeFill } from "react-icons/ri";
import Menu from './Menu';
function Sidebar() {
  const [showMenu, setShowMenu]=useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);

  };
  return (
    <div >
        <div className='w-full bg-red-200 h-12 items-center grid lg:grid-cols-6 max-lg:h-14   '>
          {/*Menu1 */}
          <div className='max-sm:hidden max-lg:hidden col-span-5 ml-48 grid items-center '>
            <RiSearchLine className='m ml-2 font-bold absolute  h-6 w-6'/>
            
            <input className=' pl-12 text-xl h-12 w-[350px] bg-red-200 hover:bg-white hover:placeholder:text-white placeholder:text-black placeholder:text-[12px] placeholder:tracking-[5px] border border-red-200 hover:border-[#CCB56F] hover:border-2 outline-none font-serif' placeholder='SHEARCH MINALIST BAKER'/>
            
           
            </div>
            {/*Menu */}
            <div className='grid max-sm:ml-48 max-lg:ml-96'>
            <div className='flex -ml-24  '>
            <RiFacebookFill className='h-6 w-6 ml-2 max-sm:ml-3 max-sm:h-8 max-sm:w-8 max-lg:h-8 max-lg:w-8 max-lg:ml-3' /> 
            <RiInstagramLine className='h-6 w-6 ml-2 max-sm:ml-3 max-sm:h-8 max-sm:w-8 max-lg:h-8 max-lg:w-8 max-lg:ml-3'/>
            <RiPinterestLine className='h-6 w-6 ml-2 max-sm:ml-3 max-sm:h-8 max-sm:w-8 max-lg:h-8 max-lg:w-8 max-lg:ml-3' />
            <RiTwitterFill className='h-6 w-6 ml-2 max-sm:ml-3 max-sm:h-8 max-sm:w-8 max-lg:h-8 max-lg:w-8 max-lg:ml-3 '/>
            <RiYoutubeFill className='h-6 w-6 ml-2 max-sm:ml-3 max-sm:h-8 max-sm:w-8 max-lg:h-8 max-lg:w-8 max-lg:ml-3  '/>
            </div>
            </div>


        </div>
        {/* Menu 02 */}

        <div className='grid  ml-52 items-center grid-cols-3   pt-4'>
          {/* Boton izquierdo */}
          <div className='flex gap-4 -ml-1 max-lg:hidden '>
            <div  className=''>
              <a href=''>All Recipes</a>
            </div>
            
            <div className=''>
              <a href=''>Vegan</a>
            </div>
            <div className=''>
              <a href=''>Gluten-free</a>
            </div>
            
          </div>
          {/* Nombre */}   
          <div className='-ml-40 max-lg:flex max-lg:gap-32 max-sm:flex max-sm:gap-0  '>
            <div className='lg:hidden'>
            <button onClick={toggleMenu} className='fixed'>
            {showMenu ? <RiCloseLine className='h-16 w-16 -ml-12 mt-7 max-sm:mt-1' /> : <RiMenuFill className='h-12 w-12 mt-8 -ml-10 max-sm:h-9 max-sm:mt-3' />}
            
              </button>
            </div>
            <div >
            <div className='text-[50px] transform rotate-[-5deg] ml-40 text-font max-sm:text-[30px] max-sm:ml-20 max-lg:ml-24'>
              <a href='' className='font-serif  text-[#2B2B2B] '>Minimalist</a>
            </div> 
            <div className='text-[50px] transform rotate-[-5deg] -mt-7 text-center  max-sm:text-[30px] max-sm:-mt-5 max-lg:ml-36 max-sm:ml-24'>
              <a href='' className='font-serif text-[#2B2B2B]'>Baker</a>
            </div>
            </div>

            <div className='lg:hidden max-lg:ml-16 max-sm:ml-11'>
            <RiSearchLine className='h-12 w-12 mt-8 ml-10 max-sm:h-9 max-sm:mt-3 max-sm:ml-2' />
            </div> 
            
          </div>      

          {/* Boton derecho */}
          <div className='flex ml-2 gap-4 max-lg:hidden '>
            <div className=''> 
              <a href=''>All Recipes</a>
            </div>
            <div className=''>
              <a href=''>Vegan</a>
            </div>
            <div  className=''>
              <a href=''>Gluten-free</a>
            </div>
                      
          </div>

          </div>
          <Menu showMenu={showMenu} />
    </div>
  )
}

export default Sidebar