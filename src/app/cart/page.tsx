'use client'

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Header from "../components/header";
import Recomendations from '../components/recommendations';
import ShopFooter from "../components/shop-footer";

export default function Cart() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-customBg text-black antialiased">
        <Header/>
        <ShoppingCart/>
        <Recomendations/>
        <ShopFooter/>
    </div>
  );
};

const ShoppingCart = () => {
  const router = useRouter();

  const toCheckout = () => {
    router.push('/checkout');
  };

  const toHome = () => {
    router.push('/');
  };

  return (
    <div className="w-full min-h-screen p2 md:p-4 mt-4">
      <div className="w-full p-2">
        <header className="flex justify-start items-center border-b md:pb-4 mb-6">
          <h1 className="text-xl md:text-2xl font-semibold">Shopping Cart</h1>
        </header>
        <div className="w-full">
          <table className="w-full text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="p1 md:p-4 text-sm md:text-base">Product Detail</th>
                <th className="p1 md:p-4 text-sm md:text-base">Quantity</th>
                <th className="hidden md:block p1 md:p-4 text-sm md:text-base">Price</th>
                <th className="p1 md:p-4 text-sm md:text-base">Total</th>
                <th className="p1 md:p-4 text-sm md:text-base"></th>
              </tr>
            </thead>
            <tbody className='p-4'>
              {cartItems.map((item, index) => (
                <tr key={index} className="border-2 rounded-full">
                  <td className="p-2 md:p6 flex items-center space-x-1 md:space-x-4 mb-4">
                    <Image src={item.img} alt={item.name} width={50} height={50} />
                    <div className='flex flex-col justify-center items-between'>
                        <span className='text-sm md:text-base'>{item.name}</span>
                        <span className='md:hidden'>{item.price}</span>
                    </div>
                  </td>
                  <td>
                  <div className='flex flex-row justify-start items-center'>
                    <button className="px-2 py-1 border border-gray-300">-</button>
                    <span className="px-2 text-sm md:text-base">{item.quantity}</span>
                    <button className="px-2 py-1 border border-gray-300">+</button>
                  </div>
                  </td>
                  <td>
                    <div className="hidden md:block p-1 md:p-4 md:text-base">{item.price}</div>
                  </td>
                  <td className="p-1 md:p-4 relative">
                    <p>{item.total}</p>
                    <button className="text-searchBg absolute md:top-[30%] top-[25%] right-[-15%] md:right-[-20%] text-4xl">&times;</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <label htmlFor="promoCode" className="text-sm">Promo Code?</label>
            <input type="text" id="promoCode" className="border border-gray-300 p-2 rounded" placeholder="Enter promo code" />
          </div>
          <div className='w-full md:w-[40%]'>
            <div className='w-full  flex flex-row justify-between'>
                <p className="text-sm">Sub-Total <span className='text-searchBg'>(Tax Incl.)</span>: 
                </p>
                <span className="font-semibold">N33,000</span>
            </div>
            <div className='flex flex-row justify-between w-full'>
                <p className="text-sm">Promo <span className='text-searchBg'>(15%)</span>: 
                </p>
                <span className="font-semibold">N4590</span>
            </div>
            <p className=""></p>
            <div className='text-xl font-semibold border-dashed border-2 border-t-black flex flex-row justify-between w-full'>
                <p className="text-xl">TOTAL:</p>
                <span className="font-semibold">N28,050</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <button className="flex items-center space-x-2 text-orange-600 border border-orange-600 px-4 py-2 rounded"
          onClick={toHome}>
            <span>&larr;</span>
            <span>Back to Shop</span>
          </button>
          <button className="bg-orange-600 text-white px-4 py-2 rounded" onClick={toCheckout}>
            Check-Out &rarr;
          </button>
        </div>
      </div>
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
