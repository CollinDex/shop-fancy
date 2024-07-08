import Image from "next/image";
import { Suspense } from "react";
import { Spinner } from "./spinner/spinner";
import { ItemCardProps } from "../types/types";

export const ShopBody = () => {
    const links = ['Water Bottles', 'Tot Bags', 'Crocs', 'Bikers Shorts', 'Crop Tops', 'Bucket Hats', 'Jewelry Box'];

    return (
        <div className="w-full h-full flex justify-center md:grid grid-cols-[1fr_4fr] gap-4 p-8">
            <div className="hidden md:block">
                <p className="text-xl pb-4">Category</p>
                {
                    links.map((link, index) => {
                        return (
                            <p className="text-sm pb-2 hover:cursor-pointer" key={index}>{link}</p>
                        ) 
                    })
                }
            </div>
            <div className="flex flex-col">
                <div className="pb-2">
                    <input className="w-full border-2 border-searchBg rounded-full p-1 md:p-2 bg-itemBg" type="text" name="searchBox" id="searchBox" placeholder="Search..."/>
                </div>
                <ItemsContainer/>
            </div>
        </div>
    );
};

export const ItemsContainer = () => {
    const items = [
        {name:'Gym Water Bottle', price:'5,000', img:'/images/1.png'},{name:'Cross Body Bag', price:'8,000', img:'/images/2.png'},{name:'Travel Bottle Set', price:'3,000', img:'/images/3.png'},{name:'Mirror', price:'7,000', img:'/images/4.png'},{name:'Water Bottle', price:'5,000', img:'/images/5.png'},{name:'Melon Hat', price:'5,000', img:'/images/6.png'},{name:'Purse', price:'5,000', img:'/images/7.png'},{name:'Bucket Hat', price:'5,000', img:'/images/8.png'},{name:'Tongue Scraper', price:'5,000', img:'/images/9.png'},{name:'Face Cap', price:'5,000', img:'/images/10.png'},{name:'Gym Water Bottle', price:'5,000', img:'/images/1.png'},{name:'Cross Body Bag', price:'8,000', img:'/images/2.png'}
    ];

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-wrap justify-center">
                {items.map((item, index) => {
                    return (
                        <Item key={index} item={item}/>
                    );
                    })
                }
            </div>
            <div className="flex flex-row">
                <Image
                    src={"/left-arrow.svg"}
                    width={150}
                    height={50}
                    alt="Left Arrow"
                    priority= {true}
                    className="w-10 h-auto bgheaderBg"
                />
                <p className="p-4 bgheaderBg">1</p>
                <p className="p-4 bgheaderBg">of</p>
                <p className="p-4 bgheaderBg">2</p>
                <Image
                    src={"/right-arrow.svg"}
                    width={150}
                    height={50}
                    alt="Right Arrow"
                    priority= {true}
                    className="w-10 h-auto bgheaderBg"
                />
            </div>
        </div>
    ); 
};

export const Item:React.FC<ItemCardProps> = ({item}) => {
    const {name, price, img} = item;
    return (
        <div className="flex flex-col w-[50%] md:w-auto p-2 pt-4 hover:cursor-pointer">
            <div className="hover:cursor-pointer relative bg-itemBg   rounded-t-md ">
                <Image
                    src={"/shopping-cart-icon.svg"}
                    width={150}
                    height={50}
                    alt="Cart Icon"
                    priority= {true}
                    className="w-6 h-auto pt-1 absolute top-0 right-0"
                />
                <Suspense fallback= {<Spinner/>} >
                    <Image
                        src={img}
                        alt="Item Icon"
                        width={250}
                        height={250}
                        priority= {true}
                        className="pt-8"
                    />
                </Suspense>
            </div>
            <div className="flex flex-col justify-between bg-white p-2 rounded-b-md h-full">
                <div className="flex flex-col gap-2">
                    <p>{name}</p>
                    <p className="text-xs pb-1">{price}</p>
                </div>
                <Image
                    src="/stars.svg"
                    alt="Stars Icon"
                    width={250}
                    height={250}
                    priority= {true}
                    className="w-16 h-auto"
                />
            </div>
        </div>
    );
};