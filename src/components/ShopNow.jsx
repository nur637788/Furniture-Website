import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from './Footer';

function ShopNow() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    productID: "",
    quantity: "1",
    payment: "",
    transactionId: ""
  });

  // Random Transaction Number generate
  const generateRandomNumber = () => {
    const random = Math.floor(1000000000 + Math.random() * 9000000000);
    setFormData({ ...formData, transactionId: random });
  };

  // Input Change Handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save to LocalStorage
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    existingOrders.push(formData);
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    alert("✅ Order Placed Successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      productID: "",
      quantity: "1",
      payment: "",
      transactionId: ""
    });
  };


  

  return (
    <div>
    <section data-aos='zoom-in' className="bg-gray-900 min-h-screen flex justify-center items-center py-20 px-4">
      <div data-aos='zoom-out' className="bg-gray-100 p-8 rounded shadow-2xl w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-pink-500 mb-6">
          🛍️ Order Your Product
        </h2>
            {/* Product Purches From */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-pink-500 outline-none hover:scale-105 duration-300"/>

          {/* Input Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-pink-500 outline-none hover:scale-105 duration-300"/>

          {/* Input Phone */}
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-pink-500 outline-none hover:scale-105 duration-300"/>

          {/* Input Address */}
          <textarea
            name="address"
            placeholder="Your Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-pink-500 outline-none hover:scale-105 duration-300"/>

          {/* Input Product ID */}
          <input
            type="text"
            name="productID"
            placeholder="Product ID"
            value={formData.productID}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-pink-500 outline-none hover:scale-105 duration-300"/>

          {/* Select Product Sonkha */}
          <div>
            <label className="block text-gray-800 mb-1">Quantity</label>
            <select
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-pink-500 outline-none hover:scale-105 duration-300">
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          {/* Select Mayment Method*/}
          <div>
            <label className="block text-gray-700 mb-1">Payment Method</label>
            <select
              name="payment"
              value={formData.payment}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-pink-500 outline-none hover:scale-105 duration-300">
              <option value="">Select Payment</option>
              <option value="Bkash">Bkash</option>
              <option value="Rocket">Rocket</option>
              <option value="Bank">Bank</option>
            </select>
          </div>

          {/* Random Numbar Genarate  */}
          <div className="flex items-center gap-3">
            <input
              type="text"
              name="transactionId"
              placeholder="Transaction ID"
              value={formData.transactionId}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-pink-500 outline-none hover:scale-105 duration-300"/>
            <button
              type="button"
              onClick={generateRandomNumber}
              className=" px-3 py-2 rounded-lg text-sm font-semibold bg-gray-600 hover:bg-[#527A9A] hover:scale-105 duration-300">
              Generate
            </button>
          </div>

          {/* From Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-600 hover:bg-[#527A9A] hover:scale-95 hover:font-bold duration-300 text-white font-semibold py-3 rounded-lg shadow-lg">
            Confirm Order
          </button>
        </form>

            {/* Back Button */}
      <div className=' m-auto pt-5'>
        <button onClick={() => navigate(-1)}
          className=" px-2 py-1 bg-pink-500 text-white rounded hover:bg-pink-600 transition-colors">
            ← Go Back </button>
      </div>
      </div>
    </section>


    <Footer />
</div>
  );
}

export default ShopNow;
