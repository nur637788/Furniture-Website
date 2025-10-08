import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../Card';
import Footer from '../Footer';


function Sofa() {
  const navigate = useNavigate();
    const products = [
  {
  id: "58",
  name: "Modern Fabric Sofa",
  material: "Fabric",
  color: "Grey",
  price: "৳28500",
  rating: "4.6",
  image: "https://www.duroflexworld.com/cdn/shop/files/1_30.jpg?v=1746614755"
},
{
  id: "59",
  name: "Classic Leather Sofa",
  material: "Leather",
  color: "Brown",
  price: "৳32500",
  rating: "4.8",
  image: "https://bonprix.scene7.com/is/image/OttoUK/600w/Miami-Grey-Sofa-Range~20E004FRSP_COL_GREY.jpg"
},
{
  id: "60",
  name: "Minimalist Wooden Sofa",
  material: "Wood",
  color: "Beige",
  price: "৳24500",
  rating: "4.4",
  image: "https://pngimg.com/d/sofa_PNG6958.png"
},
{
  id: "61",
  name: "Luxury Velvet Sofa",
  material: "Velvet",
  color: "Blue",
  price: "৳35500",
  rating: "4.9",
  image: "https://pngimg.com/d/sofa_PNG6959.png"
},
{
  id: "62",
  name: "Scandinavian Sofa",
  material: "Fabric",
  color: "White",
  price: "৳26500",
  rating: "4.3",
  image: "https://pngimg.com/d/sofa_PNG6960.png"
},
{
  id: "63",
  name: "Contemporary Sofa",
  material: "Leather",
  color: "Black",
  price: "৳31000",
  rating: "4.7",
  image: "https://pngimg.com/d/sofa_PNG6961.png"
},
{
  id: "64",
  name: "Rattan Sofa",
  material: "Rattan",
  color: "Brown",
  price: "৳21500",
  rating: "4.2",
  image: "https://pngimg.com/d/sofa_PNG6962.png"
},
{
  id: "65",
  name: "Vintage Sofa",
  material: "Wood & Fabric",
  color: "Green",
  price: "৳29500",
  rating: "4.5",
  image: "https://www.estre.in/cdn/shop/files/2_c32d5f1a-ea18-4ef7-90bc-e96f0a58366a.jpg?v=1743762907"
},
{
  id: "66",
  name: "Corner Sectional Sofa",
  material: "Fabric",
  color: "Grey",
  price: "৳36500",
  rating: "4.8",
  image: "https://bohubd.com/cdn/shop/files/M23MidCenturyModernSofa_LoveSeater_1100x.jpg?v=1713693961"
},
{
  id: "67",
  name: "Classic Chesterfield Sofa",
  material: "Leather",
  color: "Brown",
  price: "৳42500",
  rating: "5.0",
  image: "https://cdn.bdstall.com/product-image/giant_250304.jpg"
},
{
  id: "68",
  name: "Single Seater Sofa",
  material: "Fabric",
  color: "Beige",
  price: "৳14500",
  rating: "4.1",
  image: "https://pngimg.com/d/sofa_PNG6966.png"
},
{
  id: "69",
  name: "Recliner Sofa",
  material: "Leather",
  color: "Black",
  price: "৳38500",
  rating: "4.7",
  image: "https://www.skfdecor.com/uploaded-files/product-images/thumbs/U-Shape-Fabric-Sofa-Set-thumbs-436X436.jpg"
},
{
  id: "70",
  name: "Wooden Frame Sofa",
  material: "Wood & Fabric",
  color: "Grey",
  price: "৳22500",
  rating: "4.3",
  image: "https://www.royaloakindia.com/media/catalog/product/s/f/sf751_17.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=300&width=480&canvas=480:300"
},
{
  id: "71",
  name: "L-shaped Sofa",
  material: "Fabric",
  color: "Dark Grey",
  price: "৳34500",
  rating: "4.6",
  image: "https://i5.walmartimages.com/asr/f621c66a-42f3-44a0-b63b-9f1c27b8b7ca.1f78ffe3b7f9e7e4b4e65e272897fcc2.jpeg"
},
{
  id: "72",
  name: "Traditional Sofa",
  material: "Fabric",
  color: "Red",
  price: "৳27500",
  rating: "4.2",
  image: "https://www.laura-james.co.uk/cdn/shop/files/annabelle-corner-sofa-with-chaise-cloud-grey-with-pale-oak-legs-laura-james-2copy_2821x.jpg?v=1742477412"
},
{
  id: "73",
  name: "Two Seater Sofa",
  material: "Leather",
  color: "Brown",
  price: "৳24500",
  rating: "4.4",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCp625vr1aFlpy3nJKqHmYt8EiB5Whbs7PzA&s"
},
{
  id: "74",
  name: "Contemporary Grey Sofa",
  material: "Fabric",
  color: "Grey",
  price: "৳29500",
  rating: "4.5",
  image: "https://mysleepyhead.com/media/catalog/product/s/l/sleepyhead_sectional_sofa.jpg"
},
{
  id: "75",
  name: "Luxury Royal Sofa",
  material: "Velvet",
  color: "Blue",
  price: "৳45500",
  rating: "4.9",
  image: "https://www.insaraf.com/cdn/shop/products/1copy_1024x1024.jpg?v=1640110316"
},
{
  id: "76",
  name: "Outdoor Sofa",
  material: "Rattan",
  color: "Red",
  price: "৳19500",
  rating: "4.0",
  image: "https://image.made-in-china.com/202f0j00UWFoOnvgZQca/Modern-Lazy-Sofa-Elegant-Single-Sofa-Relax-Leisure-Lounge-Home-Bedroom-Living-Room-Furniture-Chair.webp"
},
{
  id: "77",
  name: "Minimalist Studio Sofa",
  material: "Fabric",
  color: "White",
  price: "৳26500",
  rating: "4.3",
  image: "https://angiehomes.co/cdn/shop/files/DualStylishSofa.jpg?v=1722582579&width=600"
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

export default Sofa
