'use client'

import React, { FormEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Header from "../components/header";
import ShopFooter from "../components/shop-footer";

export default function Checkout() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-customBg text-black antialiased">
        <Header/>
        <OrderSummary/>
        <ShopFooter/>
    </div>
  );
};

const cartItems = [
  {
    img: "/images/2.png",
    name: "Sippy Cup",
    quantity: 2,
    price: "2,000",
    total: "N4,000",
  },
  {
    img: "/images/3.png",
    name: "Smiley Bucket Hat",
    quantity: 1,
    price: "N5,000",
    total: "N5,000",
  },
  {
    img: "/images/5.png",
    name: "Pink Barbie Scrunchie",
    quantity: 1,
    price: "N3,000",
    total: "N3,000",
  },
  {
    img: "/images/6.png",
    name: "Floating Metal Rack",
    quantity: 1,
    price: "N5,000",
    total: "N5,000",
  },
];

const OrderSummary = () => {
  const router = useRouter();

  const toHome = (event:any) => {
    event.preventDefault();
    router.push('/');
  };

  return (
    <div className="h-full bg-gray-100 p-4 md:p-8">
      <div className="flex flex-col justify-center items-center max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div key={index} className="bg-white border-2 border-gray-300 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Image src={item.img} alt={item.name} width={50} height={50} className="rounded" />
                    <span>{item.name} ({item.quantity})</span>
                  </div>
                  <span>{item.total}</span>
                </div>
              ))}
            </div>
            <button className="flex items-center space-x-2 text-orange-600 border border-orange-600 px-4 py-2 rounded mt-4"
            onClick={toHome}>
              <span>&larr;</span>
              <span>Back to Shop</span>
            </button>
          </div>
          <div className='md:border-l-4 md:p-4 border-gray-100'>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Payment Information</h2>
            <form className="space-y-4" onSubmit={toHome}>
              <div className="flex items-center space-x-4">
                <input type="checkbox" id="creditCard" className="form-checkbox" checked readOnly />
                <label htmlFor="creditCard" className="text-sm">Debit/Credit Card</label>
              </div>
              <div className="flex items-center space-x-4">
                <input type="checkbox" id="payOnDelivery" className="form-checkbox" />
                <label htmlFor="payOnDelivery" className="text-sm">Pay on Delivery</label>
              </div>
              <div>
                <label htmlFor="cardNumber" className="text-sm">Card number</label>
                <input type="text" id="cardNumber" className="border border-gray-300 p-2 rounded w-full" value="1234 5678 9012 3456" readOnly />
              </div>
              <div>
                <label htmlFor="name" className="text-sm">Name</label>
                <input type="text" id="name" className="border border-gray-300 p-2 rounded w-full" value="Catherine Smith" readOnly />
              </div>
              <div className="flex space-x-4">
                <div>
                  <label htmlFor="expiryDate" className="text-sm">Expiry date</label>
                  <input type="text" id="expiryDate" className="border border-gray-300 p-2 rounded w-full" value="04/27" readOnly />
                </div>
                <div>
                  <label htmlFor="cvv" className="text-sm">CVV</label>
                  <input type="text" id="cvv" className="border border-gray-300 p-2 rounded w-full" value="246" readOnly />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <input type="checkbox" id="saveCard" className="form-checkbox" checked readOnly />
                <label htmlFor="saveCard" className="text-sm">Save Card for future use</label>
              </div>
              <button className="bg-orange-600 text-white px-4 py-2 rounded w-full">Continue</button>
            </form>
          </div>
        </div>
        
      </div>
    </div>
  );
};