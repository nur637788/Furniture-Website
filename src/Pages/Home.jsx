import { useNavigate } from 'react-router-dom';
import Catagoris from '../components/Catagoris'
import PopularProduct from './../components/PopularProduct';
import LatestProduct from './../components/LatestProduct'
import HomeCard from '../components/HomeCard';
import Footer from '../components/Footer';


function Home() {
  const navigate = useNavigate();
  return (
    <div id='home' className='bg-white'>

      <div className="hero min-h-screen" style={{
    backgroundImage:"url(/images/hero-image1.png)" }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5 text-2xl">
        Elevate Your Home Decor with Our 
        Premium Furniture Collection.</p>
      <button onClick={()=>navigate('/contact')} className="btn btn-primary">Contact Us</button>
    </div>
  </div>
</div>

    <Catagoris />
    <PopularProduct />
    <LatestProduct />
    <HomeCard />
    <Footer />

    <div className='py-5 text-end fixed z-10 bottom-0 right-0'>
      <a className='bg-gray-700/30 text-black py-5 px-4 rounded-md hover:bg-blue-500 duration-300' href="#home">⇑</a>
    </div>
    </div>
  )
}

export default Home
