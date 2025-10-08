import React from 'react'
import { useNavigate } from 'react-router-dom'

import Card from '../Card';
import Footer from '../Footer';

function Bed() {
  const navigate = useNavigate();
const products = [
   {
  id: "14",
  name: "Leather Double Bed",
  size: "Double",
  material: "Leather",
  color: "Black",
  price: "৳15000",
  rating: "4.0",
  image: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg"
},
{
  id: "15",
  name: "Oak Queen Bed",
  size: "Queen",
  material: "Oak",
  color: "Grey",
  price: "৳17500",
  rating: "4.2",
  image: "https://images-cdn.ubuy.co.in/6366357bc8e6f5565479065a-queen-size-storage-bed-btmway-modern.jpg"
},
{
  id: "16",
  name: "Pine King Bed",
  size: "King",
  material: "Pine",
  color: "Beige",
  price: "৳20000",
  rating: "4.5",
  image: "https://www.bigw.com.au/medias/sys_master/images/images/h52/hfb/97291611996190.jpg"
},
{
  id: "17",
  name: "Wood Single Bed",
  size: "Single",
  material: "Wood",
  color: "Brown",
  price: "৳22000",
  rating: "4.7",
  image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg"
},
{
  id: "18",
  name: "Metal Twin Bed",
  size: "Twin",
  material: "Metal",
  color: "White",
  price: "৳24000",
  rating: "4.9",
  image: "https://styla-prod-us.imgix.net/683498d3-8b36-42b2-b3fb-2692914e024c/1689776687460_b21fc69e-707e-4612-a075-16a326a1b250?auto=format%2Ccompress&w=1280&h=1280&fit=original&fm=webp"
},
{
  id: "19",
  name: "Leather Double Bed",
  size: "Double",
  material: "Leather",
  color: "Black",
  price: "৳26000",
  rating: "5.0",
  image: "https://img.zcdn.com.au/lf/8/hash/39258/19737332/4/custom_image.jpg"
},
{
  id: "20",
  name: "Oak Queen Bed",
  size: "Queen",
  material: "Oak",
  color: "Grey",
  price: "৳12000",
  rating: "3.5",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUb3yMYysS-M-CAthoXSC8BfOIcSMbpCD8PA&s"
},
{
  id: "21",
  name: "Pine King Bed",
  size: "King",
  material: "Pine",
  color: "Beige",
  price: "৳13500",
  rating: "3.8",
  image: "https://d2emch4msrhe87.cloudfront.net/image/data/bed-without-storage/adolph-bed-without-storage/updated/honey/new-images/new-logo/new%20-3D/8.jpg"
},
{
  id: "22",
  name: "Wood Single Bed",
  size: "Single",
  material: "Wood",
  color: "Brown",
  price: "৳15000",
  rating: "4.0",
  image: "https://m.media-amazon.com/images/I/71fhcItc5hL.jpg"
},
{
  id: "23",
  name: "Metal Twin Bed",
  size: "Twin",
  material: "Metal",
  color: "White",
  price: "৳17500",
  rating: "4.2",
  image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
},
{
  id: "24",
  name: "Leather Double Bed",
  size: "Double",
  material: "Leather",
  color: "Black",
  price: "৳20000",
  rating: "4.5",
  image: "https://www.royaloakindia.com/media/catalog/product/b/d/bd122202-5_1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=300&width=480&canvas=480:300"
},
{
  id: "25",
  name: "Oak Queen Bed",
  size: "Queen",
  material: "Oak",
  color: "Grey",
  price: "৳22000",
  rating: "4.7",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg415etiU-twHFrmiXx_vmZvJbaA4g7p9QNQ&s"
},
{
  id: "26",
  name: "Pine King Bed",
  size: "King",
  material: "Pine",
  color: "Beige",
  price: "৳24000",
  rating: "4.9",
  image: "https://www.nilkamalsleep.com/cdn/shop/files/GRANDEBED_PLUSQueenWhiteLS1_650x.jpg?v=1726053952"
},
{
  id: "27",
  name: "Wood Single Bed",
  size: "Single",
  material: "Wood",
  color: "Brown",
  price: "৳26000",
  rating: "5.0",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKjxbTOgtiuCpCLXUGxVx3aZgJtLWqNxfHPw&s"
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

export default Bed
