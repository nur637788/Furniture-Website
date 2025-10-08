import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Menu } from "lucide-react"; // 3-dot icon

function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div className='fixed top-0 right-0 left-0 z-100 bg-gray-800' data-aos='fade-down'>
      
      <div className='flex justify-between items-center px-5 md:px-10 py-2'>
        
        {/* Logo */}
        <div>
            <img className='w-10 h-10 cursor-pointer' src="/images/logo.png" alt="Logo" />
        </div>

        {/* Desktop Menu */}
       
        <div className='hidden md:flex gap-4' data-aos='fade-down'>
          <NavLink className='text-white  px-2 hover:text-blue-500 hover:font-bold transition duration-500' to="/">Home</NavLink>
          <NavLink className='text-white  px-2 hover:text-blue-500 hover:font-bold transition duration-500' to="/product">Products</NavLink>
          <NavLink className='text-white  px-2 hover:text-blue-500 hover:font-bold transition duration-500' to="/about">About</NavLink>
          <NavLink className='text-white  px-2 hover:text-blue-500 hover:font-bold transition duration-500' to="/contact">Contact</NavLink>
        </div>

        {/* Account & Cart Icon Desktop  */}
        <div data-aos='zoom-in' className='hidden md:flex gap-4 '>
          <button onClick={()=>navigate('/account')} className='flex cursor-pointer'><img src="/images/account.png" alt="account icon" />Account</button>
          
          <button onClick={()=> navigate('/errorpage')} className='flex cursor-pointer'><img src="/images/cart.png" alt="cart icon" />Cart</button>
        </div>



        {/* Mobile Menu 3dot icon */}
        <button 
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <d iv className=" md:hidden flex flex-col items-start justify-center gap-3 px-5 py-2  bg-gray-600" data-aos='fade-in'>
          <NavLink className='text-white  px-2 hover:text-blue-500 hover:font-bold transition duration-500' to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink className='text-white  px-2 hover:text-blue-500 hover:font-bold transition duration-500' to="/product" onClick={() => setOpen(false)}>Products</NavLink>
          <NavLink className='text-white  px-2 hover:text-blue-500 hover:font-bold transition duration-500' to="/about" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink className='text-white  px-2 hover:text-blue-500 hover:font-bold transition duration-500' to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
         
          {/* Account & Cart icon Mobile Menu  */}
        <div data-aos='fade-left' className='flex gap-4 pb-4 '>
          <button onClick={()=>navigate('/account')} className='relative cursor-pointer hover:scale-95'><img onClick={() => setOpen(false)} className='pl-3' src="/images/account.png" alt="account icon" /><p className='text-center absolute z-50 -mt-2 opacity-0 hover:opacity-90'>Account</p></button>

          <button onClick={()=>navigate('/errorpage')} className='cursor-pointer hover:scale-95'><img onClick={() => setOpen(false)} className='pl-2' src="/images/cart.png" alt="cart icon" /> <p className='text-center absolute z-50 -mt-2 opacity-0 hover:opacity-90'>Cart</p></button>
        </div>
        </d>
      )}
    </div>
  )
}

export default Header;
