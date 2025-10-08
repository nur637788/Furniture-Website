import React from 'react'
import { useNavigate } from 'react-router-dom'

function Catagoris() {
    const navigate = useNavigate();
  return (
    <section>
        <div className='mx-5 md:mx-10 my-10'>
            <h1 className='text-black text-xl font-semibold text-center py-5'>Catagoris</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5  gap-4 text-white'>
                        {/* Chair catagoris */}
                <button onClick={() =>navigate("/chair")}>
                    <div className='min-h-40 m-auto p-5 rounded-2xl shadow-2xl bg-gray-600 hover:bg-[#527A9A]  hover:scale-95 duration-300 cursor-pointer'>
                    <img className='m-auto text-black' src="/catagori/catagori-1.png" alt="catagoris-image-1" />
                    <h2 className='text-xl font-medium'>Chair</h2>
                    <p>200 Item Available</p>
                    </div>
                </button>
                    {/* Sofa catagoris */}
                <button onClick={()=> navigate('/sofa')}>
                    <div className='min-h-40 m-auto p-5 rounded-2xl shadow-2xl bg-gray-600 hover:bg-[#527A9A]  hover:scale-95 duration-300 cursor-pointer'>
                    <img className='m-auto text-black' src="/catagori/catagori-2.png" alt="catagoris-image-1" />
                    <h2 className='text-xl font-medium'>Sofa</h2>
                    <p>240 Item Available</p>
                    </div>
                </button>
                    {/* Table catagoris */}
                <button onClick={()=> navigate('/table')}>
                    <div className='min-h-40 m-auto p-5 rounded-2xl shadow-2xl bg-gray-600 hover:bg-[#527A9A]  hover:scale-95 duration-300 cursor-pointer'>
                    <img className='m-auto text-black' src="/catagori/catagori-3.png" alt="catagoris-image-1" />
                    <h2 className='text-xl font-medium'>Table</h2>
                    <p>100 Item Available</p>
                    </div>
                </button>
                {/* Bed catagoris */}
                <button onClick={()=>navigate('/bed')}>
                    <div className='min-h-40 m-auto p-5 rounded-2xl shadow-2xl bg-gray-600 hover:bg-[#527A9A]  hover:scale-95 duration-300 cursor-pointer'>
                    <img className='m-auto text-black pb-3' src="/catagori/catagori-4.png" alt="catagoris-image-1" />
                    <h2 className='text-xl font-medium'>Bed</h2>
                    <p>220 Item Available</p>
                    </div>
                </button>
                        {/* Lamp catagoris */}
                <button onClick={()=>navigate('/lamp')}>
                    <div className='min-h-40 m-auto p-5 rounded-2xl shadow-2xl bg-gray-600 hover:bg-[#527A9A]  hover:scale-95 duration-300 cursor-pointer'>
                    <img className='m-auto text-black' src="/catagori/catagori-5.png" alt="catagoris-image-1" />
                    <h2 className='text-xl font-medium'>Lamp</h2>
                    <p>340 Item Available</p>
                    </div>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Catagoris
