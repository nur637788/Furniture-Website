import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../Card';
import Footer from '../Footer';

function Lamp() {
  const navigate = useNavigate();
    const products = [
  {
  id: "38",
  name: "Modern Desk Lamp",
  material: "Metal",
  color: "Black",
  price: "৳3500",
  rating: "4.3",
  image: "https://img.drz.lazcdn.com/static/bd/p/deab1a68a48d60f5bf1a11fa5b02dc79.jpg_720x720q80.jpg"
},
{
  id: "39",
  name: "Wooden Table Lamp",
  material: "Wood",
  color: "Brown",
  price: "৳4200",
  rating: "4.5",
  image: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2022-04/cratt-items--741--.jpg"
},
{
  id: "40",
  name: "Classic Bedside Lamp",
  material: "Fabric",
  color: "White",
  price: "৳2800",
  rating: "4.0",
  image: "https://images.unsplash.com/photo-1585128719715-46776b56a0d1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmlnaHQlMjBsYW1wfGVufDB8fDB8fHww"
},
{
  id: "41",
  name: "Vintage Floor Lamp",
  material: "Metal",
  color: "Bronze",
  price: "৳7500",
  rating: "4.6",
  image: "https://www.dekorcompany.com/cdn/shop/files/t05.png?v=1707198564"
},
{
  id: "42",
  name: "LED Study Lamp",
  material: "Plastic",
  color: "Blue",
  price: "৳2600",
  rating: "4.2",
  image: "https://cdn.britannica.com/88/212888-050-6795342C/study-lamp-electrical-cord.jpg"
},
{
  id: "43",
  name: "Crystal Table Lamp",
  material: "Glass",
  color: "Transparent",
  price: "৳9800",
  rating: "4.8",
  image: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/products/2024/7/30/rx_amazon_weilailux-outdoor-battery-operated-table-lamp-waterproof-4000mah-cordless-rechargeable-touch-dimmable-desk-lamp.jpeg.rend.hgtvcom.1280.960.85.suffix/1722370763597.webp"
},
{
  id: "44",
  name: "Scandinavian Lamp",
  material: "Wood",
  color: "Beige",
  price: "৳5200",
  rating: "4.4",
  image: "https://www.tiffanylightingdirect.co.uk/cdn/shop/files/110645_1.jpg?v=1744910163"
},
{
  id: "45",
  name: "Industrial Floor Lamp",
  material: "Metal",
  color: "Black",
  price: "৳10500",
  rating: "4.7",
  image: "https://images.squarespace-cdn.com/content/v1/57175058f8baf3040f53f942/1676914301238-2JLJXFZG8BSITEUP96M7/LampD5second.jpg?format=1500w"
},
{
  id: "46",
  name: "Bedside Night Lamp",
  material: "Fabric",
  color: "Grey",
  price: "৳3100",
  rating: "4.1",
  image: "https://lightsandlamps.com/cdn/shop/products/lightsandlamps.com_Sanvirattantablelamp_3.jpg?v=1659179080&width=2362"
},
{
  id: "47",
  name: "Kids Cartoon Lamp",
  material: "Plastic",
  color: "Red",
  price: "৳2400",
  rating: "3.9",
  image: "https://thelittlehaus.co.za/cdn/shop/collections/Little_Haus_-_14-02-2023-12520.jpg?v=1742458299"
},
{
  id: "48",
  name: "Luxury Chandelier Lamp",
  material: "Crystal",
  color: "Gold",
  price: "৳24500",
  rating: "4.9",
  image: "https://m.media-amazon.com/images/I/61ktXXCnRiL.jpg"
},
{
  id: "49",
  name: "Japanese Paper Lamp",
  material: "Paper",
  color: "White",
  price: "৳4200",
  rating: "4.3",
  image: "https://studioham.co.uk/cdn/shop/files/Studio-Ham-Bronze-Palm-Column-Lamp.jpg?v=1714126537"
},
{
  id: "50",
  name: "Adjustable Desk Lamp",
  material: "Metal",
  color: "Silver",
  price: "৳3700",
  rating: "4.2",
  image: "https://mandauefoam.ph/cdn/shop/files/127803TheauBlackAdjustableDeskLampd.png?v=1743124227&width=900"
},
{
  id: "51",
  name: "Smart LED Lamp",
  material: "Plastic",
  color: "White",
  price: "৳5600",
  rating: "4.5",
  image: "https://tekled.co.uk/cdn/shop/articles/what-is-desk-light-570992.jpg?v=1683457296"
},
{
  id: "52",
  name: "Traditional Lantern Lamp",
  material: "Metal",
  color: "Brown",
  price: "৳6900",
  rating: "4.4",
  image: "https://m.media-amazon.com/images/I/71XOQxUfG2L.jpg"
},
{
  id: "53",
  name: "Decorative Bed Lamp",
  material: "Glass",
  color: "Yellow",
  price: "৳8700",
  rating: "4.6",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShniFDgrm6M1E6EPYdtqwVa9nmi3yzAGynOA&s"
},
{
  id: "54",
  name: "Minimalist Table Lamp",
  material: "Wood",
  color: "Black",
  price: "৳4300",
  rating: "4.1",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtjbVkNsY3f6V-tEIkZ1ALG-rbPRr5_kx4sA&s"
},
{
  id: "55",
  name: "Rustic Lantern Lamp",
  material: "Metal",
  color: "Copper",
  price: "৳7200",
  rating: "4.5",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVATxvhEzpINTxCdBpa17135It9NC5nUJ2wQ&s"
},
{
  id: "56",
  name: "Luxury Bedside Lamp",
  material: "Crystal",
  color: "Silver",
  price: "৳11800",
  rating: "4.7",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTbmy2ktouyyr9yMI2-TmHbftdqRmdombQZFfj8yIUD2RiSN3tS_tr9Ftlm20bRikRL1Y&usqp=CAU"
},
{
  id: "57",
  name: "Portable USB Lamp",
  material: "Plastic",
  color: "White",
  price: "৳2100",
  rating: "3.8",
  image: "https://cdn.webshopapp.com/shops/214805/files/461748311/tate-twin-set-of-wooden-table-lamps-with-white-ple.jpg"
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

export default Lamp
