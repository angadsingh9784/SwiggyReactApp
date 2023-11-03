import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: `url('YOUR_IMAGE_URL_HERE')`,
            }}
        >
            <div className="bg-white bg-opacity-90 rounded-lg p-8 shadow-md text-center">
                {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-16 h-16 mx-auto text-gray-400"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                </svg> */}
                <img className='mx-auto h-44 w-[90%]' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0'/>
                <h1 className="text-2xl text-gray-800 font-semibold mt-4">
                    Your cart is empty
                </h1>
                <p className="text-gray-600 mt-2">
                    Looks like you haven't added anything to your cart yet.
                </p>
                <Link to="/"
                    
                    className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out"
                >
                    Start Shopping
                </Link>
            </div>
        </div>
    );
};

export default EmptyCart;
