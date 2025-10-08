import React from 'react';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';

                            // Home a dekha Product gulo..
function HomeCard() {
  const navigate = useNavigate();
  const products = [
    {
      id:'1',
      image: '/homeproduct/product-1.png',
      name: 'Modern Table Collection',
      size: "Queen",
      material: "Oak",
      color: "Grey",
      price: "৳1,200",
      rating: 4.5,
    },
    {
      id:'2',
      image: '/homeproduct/product-2.png',
      name: 'Luxury Gold Accent Table',
      size: "Queen",
      material: "Oak",
      color: "Grey",
      price: "৳1,300",
      rating: 4.3,
    },
    {
      id:'3',
      image: '/homeproduct/product-1.png',
      name: 'Classic Table Collection',
      size: "Queen",
      material: "Oak",
      color: "Grey",
      price: "৳2,250",
      rating: 4.2,
    },
    {
      id:'4',
      image: '/homeproduct/product-3.png',
      name: 'Furniture & Dining Sets',
      size: "Queen",
      material: "Oak",
      color: "Grey",
      price: "৳2,300",
      rating: 4.7,
    },
    {
      id:'5',
      image: '/homeproduct/product-4.png',
      name: 'Losh Design Lamp',
      size: "Queen",
      material: "Oak",
      color: "Grey",
      price: "৳2,800",
      rating: 4.9,
    },
    {
      id:'6',
      image: '/homeproduct/product-5.png',
      name: 'Ofula Glass Lamp',
      size: "Queen",
      material: "Oak",
      color: "Grey",
      price: "৳2,000",
      rating: 4.1,
    },
    {
      id:'7',
      image: '/homeproduct/product-6.png',
      name: 'Best Bedroom Lamp',
      size: "Queen",
      material: "Oak",
      color: "Grey",
      price: "৳3,500",
      rating: 4.6,
    },
    {
      id:'8',
      image: '/homeproduct/product-8.png',
      name: 'Furniture & Dining Sets',
      size: "Queen",
      material: "Oak",
      color: "Grey",
      price: "৳3,550",
      rating: 4.0,
    },

    {
      id:'9',
      image: '/catagori/popular-1.png',
      name: 'Modern Furniture Set',
      size: "Queen",
      material: "Oak",
      color: "Grey",
      price: "৳22,0000",
      rating: 4.8,
    },
    {
      id:'10',
      image: '/catagori/popular-4.png',
      name: 'Velvet Midnight Sofa',
      size: "Queen",
      material: "Oak",
      color: "Grey",
      price: "৳12,0000",
      rating: 4.7,
    },
    {
      id:'11',
      image: '/catagori/popular-7.png',
      name: 'Elle Decor Roux Arm Chair',
      size: "Queen",
      material: "Oak",
      color: "Grey",
      price: "৳2,590",
      rating: 4.5,
    },
    {
      id:'12',
      image: '/catagori/popular-8.png',
      name: 'Elle Decor Roux Arm Chair',
      size: "Queen",
      material: "Oak",
      color: "Grey",
      price: "৳1,000",
      rating: 4.4,
    },
  ];

  return (
    
    <section className="max-w-6xl mx-auto px-5 pb-10">
       <div className='flex justify-between text-black pb-5'>
                <h4 className='text-xl font-semibold'>All Product</h4>
                <button onClick={()=>navigate('/product')}><p className='font-medium cursor-pointer hover:text-blue-700'>See all</p></button>
            </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map((p) => (
          <Card key={p.id} id={p.id} image={p.image} name={p.name} price={p.price}  />
        ))}
      </div>
    </section>
  );
}
export default HomeCard;
