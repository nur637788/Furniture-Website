import React from "react";
import Footer from './../components/Footer';
import { useNavigate } from "react-router-dom";


function About() {
  const naviget = useNavigate();
  return (
    <div>
    <section className="bg-gray-900 text-gray-100 py-16 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side (Text) */}
        <div data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-6 text-pink-500">About Us</h2>

          <p className="mb-4 text-gray-300 leading-relaxed">
            Welcome to <span className="font-semibold text-white">Furniture Collection</span> — 
            where <span className="text-pink-400">style</span> meets <span className="text-pink-400">comfort</span>!  
            We design premium-quality furniture that transforms your house into a home.
          </p>

          <p className="mb-4 text-gray-400 leading-relaxed">
            Our mission is to make elegant, durable, and affordable furniture available for everyone in Bangladesh.  
            Every product is crafted with care, combining <span className="text-pink-400">creativity, craftsmanship, and comfort</span>.
          </p>

          <ul className="space-y-2 mb-6 text-gray-300">
            <li>✅ Premium Quality Materials</li>
            <li>✅ Affordable Pricing</li>
            <li>✅ Nationwide Delivery</li>
            <li>✅ Trusted by Thousands</li>
          </ul>

          <button onClick={()=>naviget('/contact')} className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300">
            Contact us
          </button>
        </div>

        {/* Right Side (Image) */}
        <div data-aos="zoom-in" className="flex justify-center">
          <img
            src="https://img.freepik.com/free-photo/luxury-living-room-interior-with-modern-sofa-decor-empty-dark-wall-background-3d-rendering_41470-4840.jpg"
            alt="Modern Furniture"
            className="rounded-2xl shadow-2xl hover:scale-105 duration-500"
          />
        </div>
      </div>

            {/* Payment Methode section*/}
        <div className="mt-10 pt-10">
          <h2 className="text-center text-2xl font-bold">Our <i>Payment</i> Methode</h2>
          <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-7">
          <div className="bg-gray-600 rounded-md hover:scale-110 duration-300">
            <img data-aos='zoom-in' className="h-60 w-full" src="/images/bkash.jpg" alt="bkash-image" />
            <p className="p-5"><b>Bkash Payment:</b> You can purchase merit from our website through <b>Bkash</b> Payment.</p>
          </div>
          <div className="bg-gray-600 rounded-md hover:scale-110 duration-300">
            <img data-aos='zoom-in' className="h-60 w-full" src="/images/rocket.png" alt="bkash-image" />
            <p className="p-5"><b>Rocket Payment:</b> You can purchase merit from our website through <b>Rocket</b> Payment.</p>
          </div>
          <div className="bg-gray-600 rounded-md hover:scale-110 duration-300">
            <img data-aos='zoom-in' className="h-60 w-full" src="/images/bank.jpg" 
            alt="bkash-image" />
            <p className="p-5"><b>Bank Transfare:</b> You can purchase merit from our website through <b>Bank</b> transfer.</p>
          </div>
        </div>
        </div>


    </section>

      <Footer />
    </div>
  );
}

export default About;
