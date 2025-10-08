import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../Card';
import Footer from '../Footer';

function Table() {
  const navigate = useNavigate();
    const products = [
  {
  id: "78",
  name: "Wooden Dining Table",
  material: "Wood",
  color: "Brown",
  price: "৳14500",
  rating: "4.5",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0j9qSkwKImpaP9Ttd8Z4fmiYw6LFxLLDW7Q&s"
},
{
  id: "79",
  name: "Glass Coffee Table",
  material: "Glass",
  color: "Transparent",
  price: "৳12500",
  rating: "4.3",
  image: "https://m.media-amazon.com/images/I/81o2owE1N7L._AC_SL1500_.jpg"
},
{
  id: "80",
  name: "Metal Office Table",
  material: "Metal",
  color: "Grey",
  price: "৳10500",
  rating: "4.1",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SDauO5HTD3sj1AtFTg3fXjumzVksgNSemA&s"
},
{
  id: "81",
  name: "Round Wooden Table",
  material: "Oak",
  color: "Brown",
  price: "৳9800",
  rating: "4.0",
  image: "https://pngimg.com/d/table_PNG6988.png"
},
{
  id: "82",
  name: "Modern Study Table",
  material: "Wood",
  color: "White",
  price: "৳11200",
  rating: "4.4",
  image: "https://images.affordableseating.net/dpr_1.0,f_auto,q_auto,w_2000,h_2000/afd/media/catalog/product/s/w/swpl-set-3048-na-mfb-3048-bl-30h-1_2.png"
},
{
  id: "83",
  name: "Marble Table",
  material: "Marble",
  color: "White",
  price: "৳25500",
  rating: "4.8",
  image: "https://www.daals.co.uk/cdn/shop/files/BSD-141-OAK_scene1.jpg?v=1706551318&width=2000"
},
{
  id: "84",
  name: "Rustic Farmhouse Table",
  material: "Pine Wood",
  color: "Natural",
  price: "৳13500",
  rating: "4.2",
  image: "https://www.stillandbloom.co.uk/cdn/shop/files/Hoxton3-2.jpg?v=1724239069&width=1500"
},
{
  id: "85",
  name: "Glass Top Dining Table",
  material: "Glass & Metal",
  color: "Black",
  price: "৳17500",
  rating: "4.6",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV0pULmpp_kwKyyJSQ61B9FHdtPuI_cHRi0A&s"
},
{
  id: "86",
  name: "Folding Wooden Table",
  material: "Wood",
  color: "Brown",
  price: "৳7500",
  rating: "4.0",
  image: "https://pngimg.com/d/table_PNG6985.png"
},
{
  id: "87",
  name: "Office Confarence Table",
  material: "Wood & Metal",
  color: "Dark Brown",
  price: "৳32500",
  rating: "4.9",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStBuVhvdRQ7sh8zXWzkM0-mtiaCg-ggFN7og&s"
},
{
  id: "88",
  name: "Outdoor Picnic Table",
  material: "Wood",
  color: "Natural",
  price: "৳9500",
  rating: "4.1",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqH8aOXyuinKCDrKYnK371h7gbwQ2jVHIZ5Q&s"
},
{
  id: "89",
  name: "Round Glass Table",
  material: "Glass",
  color: "Transparent",
  price: "৳14200",
  rating: "4.4",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvsStIm3I1REE9ldh75HgszcJmZa40iOyfrS1F1k_spqYJb-zrFQ6wlh1VDfXX_k&usqp=CAU"
},
{
  id: "90",
  name: "Classic Coffee Table",
  material: "Wood",
  color: "Brown",
  price: "৳8800",
  rating: "4.2",
  image: "https://furnitexbd.com/cdn/shop/products/Workstation-Office-Table-for-4-Person-with-Front-Table-FT-004-Black-Furnitex-Limited-4175.jpg?v=1730364043"
},
{
  id: "91",
  name: "Scandinavian Side Table",
  material: "Pine Wood",
  color: "Beige",
  price: "৳7200",
  rating: "4.0",
  image: "https://cdn.tiptoe.fr/wp-content/uploads/2023/01/table-a-manger-new-modern-bois-ancien-160x95-noir.jpg?twic=v1/cover=760x760"
},
{
  id: "92",
  name: "Minimalist Study Table",
  material: "Wood",
  color: "White",
  price: "৳10200",
  rating: "4.3",
  image: "https://images.jdmagicbox.com/quickquotes/images_main/wooden-folding-study-table-sbue8t14.png"
},
{
  id: "93",
  name: "Luxury Dining Table",
  material: "Marble",
  color: "Black & White",
  price: "৳28500",
  rating: "4.7",
  image: "https://hoekhome.com/cdn/shop/files/The_Table_Birch_Black_GADs.jpg?v=1724438650"
},
{
  id: "94",
  name: "Wooden Tea Table",
  material: "Oak",
  color: "Dark Brown",
  price: "৳6500",
  rating: "4.0",
  image: "https://pngimg.com/d/table_PNG6997.png"
},
{
  id: "95",
  name: "Glass Console Table",
  material: "Glass & Steel",
  color: "Silver",
  price: "৳15800",
  rating: "4.5",
  image: "https://5.imimg.com/data5/SELLER/Default/2021/10/MB/UX/LH/10760255/glass-center-table-500x500.jpg"
},
{
  id: "96",
  name: "Wooden Bedside Table",
  material: "Wood",
  color: "White",
  price: "৳4800",
  rating: "4.1",
  image: "https://pngimg.com/d/table_PNG6973.png"
},
{
  id: "97",
  name: "Luxury Round Table",
  material: "Marble",
  color: "White",
  price: "৳21500",
  rating: "4.8",
  image: "https://houtlander.co.za/cdn/shop/products/round-dining-table-table-houtlander-449688.jpg?v=1685619394"
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

export default Table
