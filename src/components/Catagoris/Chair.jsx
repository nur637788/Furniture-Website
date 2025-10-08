import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../Card';
import Footer from '../Footer';


function Chair() {
const navigate = useNavigate();
    const products = [
  {
  id: "28",
  name: "Leather Office Chair",
  material: "Leather",
  color: "Black",
  price: "৳8200",
  rating: "4.4",
  image: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2025-03/csc-301view-02.jpg"
},
{
  id: "29",
  name: "Wooden Dining Chair",
  material: "Wood",
  color: "Brown",
  price: "৳5600",
  rating: "4.2",
  image: "https://pngimg.com/d/chair_PNG6897.png"
},
{
  id: "30",
  name: "Modern Plastic Chair",
  material: "Plastic",
  color: "White",
  price: "৳3200",
  rating: "3.9",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEyKc0T5DR5rFbyRdZmK1klsL1Uhg_0t0I2w&s"
},
{
  id: "31",
  name: "Fabric Lounge Chair",
  material: "Fabric",
  color: "Grey",
  price: "৳9500",
  rating: "4.6",
  image: "https://mislayer.com/public/img/BFL/fg-1722340479.webp"
},
{
  id: "32",
  name: "Metal Bar Chair",
  material: "Metal",
  color: "Black",
  price: "৳7500",
  rating: "4.3",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHp7aPqqM0TNQy0YlkHkKsiMr-deLq2vfEzWRaStYSsKFUGCeybT-Ynb3gIU3ARIR-NDU&usqp=CAU"
},
{
  id: "33",
  name: "Wooden Rocking Chair",
  material: "Wood",
  color: "Beige",
  price: "৳12000",
  rating: "4.7",
  image: "https://www.estre.in/cdn/shop/files/1-min_1a7b23d8-e00c-4bca-86fe-9c65a55bcd1d.png?v=1743763634"
},
{
  id: "34",
  name: "Rattan Outdoor Chair",
  material: "Rattan",
  color: "Brown",
  price: "৳6800",
  rating: "4.1",
  image: "https://images-cdn.ubuy.co.in/65d107b9e1bb794c430039e9-winsome-wood-robin-4-pc-folding-chair.jpg"
},
{
  id: "35",
  name: "Upholstered Armchair",
  material: "Fabric",
  color: "Blue",
  price: "৳13500",
  rating: "4.5",
  image: "https://sofaland.ca/cdn/shop/products/ND_SL_JAX_CHAIR_FRONT_IMG_2510_0da748c5-c764-4d37-961e-07ad5e63d72a.jpg?v=1751513536"
},
{
  id: "36",
  name: "Classic Dining Chair",
  material: "Wood",
  color: "White",
  price: "৳5600",
  rating: "4.0",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9iK0H2_GfyMpuGKe1VbaJTH0ewtNbwb_dPA&s"
},
{
  id: "37",
  name: "Ergonomic Mesh Chair",
  material: "Plastic",
  color: "Black",
  price: "৳10500",
  rating: "4.8",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzm0uxYbdgIxDbTZrJ62RG91nYIpdZdJHk2g&s"
}

]

  return (
    <div>
   <section className="max-w-6xl mx-auto px-4 py-20">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          
        {products.map((p) => (
          <Card key={p.id} id={p.id} image={p.image} name={p.name} price={p.price}  />
        ))}
      </div>

      <div className='mt-10 text-center'>
        <button onClick={() => navigate(-1)} // -1 মানে এক step back
          className=" px-4 py-1 bg-pink-500 text-white rounded hover:bg-pink-600 transition-colors">
            ← Go Back </button>
      </div>
    </section>

          <Footer />
    </div>
  )
}

export default Chair
