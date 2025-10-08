import React from 'react'
import Card from '../components/Card';
import Footer from '../components/Footer'

function Products() {
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
    {
    id: "13",
    name: "Metal Twin Bed",
    size: "Twin",
    material: "Metal",
    color: "White",
    price: "৳13500",
    rating: 3.8,
    image: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2025-07/bdh-391.jpg"
    },
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
},
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
},
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
},
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
},
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

  ];

  return (
    <div>
    <section id='home' className="max-w-6xl mx-auto px-4 py-15">

      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-5">
        {products.map((p) => (
          <Card key={p.id} id={p.id} image={p.image} name={p.name} price={p.price} rating={p.rating} button={p.button} skill={p.skill} sit={p.sit} />
        ))}
      </div>

      {/* Button nich theke upore  */}
       <div className='py-5 text-end fixed z-10 bottom-0 right-0'>
      <a className='bg-gray-300/90 text-black py-5 px-4 rounded-md hover:bg-blue-500 duration-300' href="#home">⇑</a>
    </div>
    </section>

          <Footer />
    </div>
  )
}

export default Products
