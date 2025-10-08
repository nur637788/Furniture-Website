import React from 'react'
import { useNavigate } from 'react-router-dom';
import Card from './Card';

const PopularProduct = () => {
    const navigate = useNavigate();

    const products = [
   {
    id: "98",
    name: "Armless Solid Dining Chair",
    size: "Body",
    material: "Leather",
    color: "Brown",
    price: "৳1,570",
    rating: "4.3",
    image: "/catagori/popular-1.png"
    },
    {
    id: "99",
    name: "Elle Decor Roux Arm Chair",
    size: "Body xl",
    material: "Leather",
    color: "Brown",
    price: "৳1,900",
    rating: "4.7",
    image: "/catagori/popular-2.png"
    },
    {
    id: "100",
    name: "Elle Decor Roux Arm Chair",
    size: "Body Decor",
    material: "Roux",
    color: "Brown",
    price: "৳2,250",
    rating: "4.9",
    image: "/catagori/popular-3.png"
    },
    {
    id: "101",
    name: "Armless Solid Dining Chair",
    size: "Dining",
    material: "Leather",
    color: "Brown",
    price: "৳1,320",
    rating: "4.1",
    image: "/catagori/popular-4.png"
    },
 
    
    ]
    return (
        <section className='mx-5 md:mx-10 py-10 text-black'>
                
             {/* Popular Product-4 */}
            <div className='flex justify-between text-black py-5'>
                <h4 className='text-xl font-semibold'>Popular Product</h4>
                <button onClick={()=>navigate('/chair')}><p className='font-medium cursor-pointer hover:text-blue-600'>See all</p></button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
          
                {products.map((p) => (
                <Card key={p.id} id={p.id} image={p.image} name={p.name} price={p.price}  />
                 ))}
            </div>

        </section>
    )
}

export default PopularProduct;