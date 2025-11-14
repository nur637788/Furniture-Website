import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../Redux/cartSlice";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Cart = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.cartItems);

    return (
        <div>
            <div className="p-6 max-w-3xl mx-auto mt-10 min-h-screen">
                <h1 className="text-3xl font-bold mb-6 text-center">Your Cart Product🛍️</h1>

                {items.length === 0 ? (
                    <p className="text-center text-red-300 text-xl">Cart is Empty!!!</p>
                ) : (
                    items.map((item) => (
                        <div
                            key={item.id}
                            className="flex gap-4 items-center justify-between bg-white p-4 rounded-xl shadow mb-4">
                            <div>
                                <img src={item.image} className="w-20 h-20 object-cover rounded-xl" />

                                <div className="flex-1">
                                    <h2 className="text-xl text-black font-semibold">{item.name}</h2>
                                    <p className="text-gray-700">{item.price}</p>
                                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <button
                                    onClick={() => dispatch(removeFromCart(item.id))}
                                    className="bg-red-500 hover:bg-red-600 hover:scale-95 duration-300 text-white px-3 py-1 rounded cursor-pointer">
                                    Delete
                                </button>

                                <button onClick={() => navigate('/shopnow')} className="bg-green-500 hover:bg-green-600 hover:scale-95 duration-300 text-white px-4 py-1 rounded cursor-pointer">
                                    Shop
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Cart;
