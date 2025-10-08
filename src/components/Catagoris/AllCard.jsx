import React from 'react';
import { Link } from 'react-router-dom';

function AllCard({ id,image, name, price,  }) {
  return (
    <article className=" items-center bg-white text-black shadow-2xl hover:scale-95 hover:shadow-blue-400/10 duration-300 rounded">
      {/* image design */}
    <div data-aos='zoom-in' className="relative overflow-hidden ">
        <img src={image} alt={name} loading="lazy"
        className="w-[100%] h-60 object-cover" />      
    </div>
            {/* text design */}
    <div className='p-2 space-y-2 text-center'>
          <h3 className="text-xl">{name}</h3>
          <p className="tetext-center"> <b>Price:</b> {price}</p>
    
                {/* button design */}
        <Link to={`/courses/${id}`}  
          className="w-full h-10 flex items-center justify-center rounded-md shadow-2xl bg-gray-600 hover:bg-[#527A9A]  hover:scale-95 duration-300">Add to Cart</Link>
    </div>
    </article>
  );
}

export default AllCard;