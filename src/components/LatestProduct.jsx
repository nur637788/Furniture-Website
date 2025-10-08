import React from 'react'
import { useNavigate } from 'react-router-dom';
import Card from './Card';

const PopularProduct = () => {
    const navigate = useNavigate();

    const products = [
     {
    id: "102",
    name: "Velvet Midnight Sofa",
    size: "Duble",
    material: "Leather",
    color: "Blue",
    price: "৳3,320",
    rating: "4.4",
    image: "/catagori/popular-5.png"
    },
     {
    id: "103",
    name: "Modern Furniture",
    size: "Single",
    material: "Leather",
    color: "Gray Blue",
    price: "৳2,620",
    rating: "4.0",
    image: "/catagori/popular-6.png"
    },
     {
    id: "104",
    name: "Modern Furniture Sofa",
    size: "Single",
    material: "Leather",
    color: "Brown",
    price: "৳2,890",
    rating: "4.2",
    image: "/catagori/popular-7.png"
    },
    {
    id: "105",
    name: "Furniture Sofa Single",
    size: "Single",
    material: "Leather",
    color: "Brown",
    price: "৳3,020",
    rating: "4.8",
    image: "/catagori/popular-8.png"
    },
    
    ]
    return (
        <section className='mx-5 md:mx-10 text-black'>
                
            {/* Latest Product-4 */}

            <div className='flex justify-between text-black py-5 mt-8'>
                <h4 className='text-xl font-semibold'>Latest Product</h4>
                <button onClick={()=>navigate('/sofa')}><p className='font-medium cursor-pointer hover:text-blue-600'>See all</p></button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
          
                 {products.map((p) => (
                <Card key={p.id} id={p.id} image={p.image} name={p.name} price={p.price}  />
                 ))}
            </div>
           

                    {/*Discount Card 1  */}
            <div className='py-10 grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className="max-w-[100%] max-h-[100%]">
                  <div data-aos='zoom-in' className='hero w-full h-full py-20' 
                style={{backgroundImage:"url(/catagori/catagori-hero1.png)"}}>
              
                    <div className='px-8 space-y-4'>
                        <h6 className='font-medium'>Up to 25% Discount</h6>
                        <h1 className='text-2xl font-medium'>Explore Our Luxurious Sofa 
                        <br /> Set Collection</h1>
                        <button className='px-4 py-1 text-white bg-[#092B42] rounded-md hover:bg-[#527A9A]  hover:scale-95 duration-300'>Shop Now</button>
                    </div>
                    </div>
                </div>

                    {/*Discount Card 2  */}
               <div className="max-w-[100%] max-h-[100%] text-white">
                  <div data-aos='zoom-in' className='hero w-full h-[100%] py-20' 
                style={{backgroundImage:"url(/catagori/catagori-hero2.png)"}}>
              
                    <div className='px-s space-y-4'>
                        <h6 className='font-medium text-green-300'>Up to 20% Discount</h6>
                        <h1 className='text-2xl font-medium'> New Combo Collection</h1>
                        <button className='px-4 py-1 text-black bg-white rounded-md hover:bg-[#527A9A]  hover:scale-95 duration-300'>Shop Now</button>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PopularProduct;