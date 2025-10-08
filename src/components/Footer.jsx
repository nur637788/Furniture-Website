import React from 'react'
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
  return (
    <footer className='bg-gray-800 '>
        <div data-aos='fade-up' className='grid grid-cols-2 md:grid-cols-4  justify-between px-5 md:px-20 py-5'>
            {/* Company Logo */}
            <div className='space-y-1'>
                <h3 className='text-2xl font-bold'>Company</h3>
                <h4 className='font-bold text-green-600'><span className='text-red-500'>Home</span> Decor</h4>
                <img className='cursor-pointer' src="/images/logo.png" alt="Logo" />
            </div>

            {/* Social Link */}
            <div className='flex flex-col space-y-1'>
                <h3 className='text-2xl font-bold'>Follow Us</h3>
                <a className='hover:text-blue-600' href="">Facebook</a>
                <a className='hover:text-blue-600' href="">Instagram</a>
                <a className='hover:text-blue-600' href="">YouTube</a>
            </div>

            {/* Privacy policy Link Button*/}
            <div className='flex flex-col items-start space-y-1'>
                <h3 className='text-2xl font-bold'>Important Links</h3>
                <button className='cursor-pointer hover:text-blue-600'>Shop</button>
                <button onClick={()=>navigate('/privacypolicy')} className='cursor-pointer hover:text-blue-600'>Privacy Policy</button>
                <button onClick={()=>navigate('/termcondition')} className='cursor-pointer hover:text-blue-600'>Terms & Condition</button>
            </div>

            {/* Catagoris Link button*/}
            <div className=' space-y-1'>
                <h3 className='text-2xl font-bold'>Category</h3>
                <div className='flex  gap-8'>
                    <button onClick={()=>navigate('/chair')} className='font-semibold cursor-pointer hover:text-blue-600'>Chair</button>
                    <button onClick={()=>navigate('/table')} className='font-semibold cursor-pointer hover:text-blue-600'>Table</button>
                </div>
                <div className='flex  gap-8'>
                    <button onClick={()=>navigate('/sofa')} className='font-semibold cursor-pointer hover:text-blue-600'>Sofa</button>
                    <button onClick={()=>navigate('/bed')} className='font-semibold cursor-pointer hover:text-blue-600'>Bed</button>
                </div>
                <div className='flex  gap-8'>
                    <button onClick={()=>navigate('/lamp')} className='font-semibold cursor-pointer hover:text-blue-600'>Lamp</button>
                    <button className='font-semibold cursor-pointer hover:text-blue-600'>...</button>
                </div>
            </div>

        </div>
        <h3 data-aos='fade-up' className='text-center py-2 bg-gray-700'>&copy; Copyrigth Home Decor. All Right Revers</h3>
    </footer>
  )
}

export default Footer;
