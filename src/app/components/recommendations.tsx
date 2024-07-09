import Image from "next/image";
import { Poppins } from "next/font/google";
import { Suspense } from "react";
import { Spinner } from "./spinner/spinner";
import { ItemCardProps } from "../types/types";


const popins = Poppins({
  weight: ['400', '500', '700'], // Specify the weights you want to use
  subsets: ['latin'], // Specify the character subsets you want to use
  display: 'swap', // Specify font display strategy
});

const Recomendations:React.FC = () => {
    return (
        <div className={`${popins.className} w-full`}>
            <div className="flex flex-row text-white w-full bg-headerBg justify-start p-2 md:p-4 items-center shadow">
            <p className=" text-2xl md:text-4xl">You may also like</p>
            </div>
            <ItemsContainer/>
        </div>
    );
};

export const ItemsContainer = () => {
    const items = [
        {name:'Gym Water Bottle', price:'5,000', img:'/images/1.png'},{name:'Cross Body Bag', price:'8,000', img:'/images/2.png'},{name:'Travel Bottle Set', price:'3,000', img:'/images/3.png'},{name:'Mirror', price:'7,000', img:'/images/4.png'}
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

export default Recomendations;