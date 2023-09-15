import React from 'react'

function Card(props) {
    const{img,nombre,boton}=props;
  return (
    <>
         {/* Content */}
           {/* card */} 
        
            <div className=' flex flex-col items-center '> 
                <a href=""><img src={img} /></a>
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
                    <button className='bg-[#000502]  rounded-full w-8 h-8 max-lg:w-6  max-lg:h-7 text-white font-bold'>
                    DF
                    </button>
                    <button className='bg-[#111111]  rounded-full w-8 h-8 max-lg:w-6  max-lg:h-7 text-white font-bold'>
                    NS
                    </button>
                </div>
                
                <button className='p-2 text-[20px]  font-bold   h-14 hover:text-[#D56638]'>
                {nombre}
                </button>
                <button className='w-full mt-6 xl:w-60 xl:justify-center max-lg:mt-16 border rounded-[4px] h-12 bg-[#FF8C70] text-white font-bold text-[22px] hover:bg-[#F74639]  '>{boton}</button>
                
            </div>
 
       
 
        
    </>
  )
}

export default Card