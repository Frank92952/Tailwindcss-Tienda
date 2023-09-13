import React from 'react'

function Menu({ showMenu }) {
    
  return (
    <div className={`lg:hidden ${showMenu ?  'block' : 'hidden'}`}>
        <div >
          <hr className='border-t-2 border-[#CCB56F]' />
          
        </div>
        <div className='flex flex-col justify-between gap-4 bg-red-200 p-6'>
            <a href=''>About</a>
            <a href=''>Shop</a>
            <a href=''>Blogger Resources</a>
            <a href=''>All Recipes</a>
            <a href=''>Vegan</a>
            <a href=''>Gluten-Free</a>
        </div>
    </div>
  )
}

export default Menu