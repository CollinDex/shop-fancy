'use-client'
import { Inter, Roboto, Open_Sans } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
    weight: ['400', '500', '700'], // Specify the weights you want to use
    subsets: ['latin'], // Specify the character subsets you want to use
    display: 'swap', // Specify font display strategy
});

const ShopFooter = () => {
    const icons = [{alt:'Facebook', src: '/facebook-icon.svg'}, {alt:'Instagram', src: '/instagram-icon.svg'}, {alt:'X', src: '/x-icon.svg'}, {alt:'Pininterest', src: '/pininterest-icon.svg'}];

    return (
        <div className="text-white w-full bg-headerBg pl-2 md:pl-4 grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-2 md:gap-4 p-4 items-start shadow">
            <div><p className="italic font-thin sm:text-l md:text-xl lg:text-2xl">Shop Fancy!</p></div>
            <div className="flex flex-col gap-1 md:gap-2">
                <p className="italic text-l pb-4">About Shop Fancy!</p>
                <p className="font-thin text-xs">Contact US</p>
                <p className="font-thin text-xs">About US</p>
            </div>
            <div className="flex flex-col gap-1 md:gap-2">
                <p className="text-l pb-4">Payment</p>
                <p className="font-thin text-xs">Master Card</p>
                <p className="font-thin text-xs">Visa</p>
                <p className="font-thin text-xs">Verve</p>
                <p className="font-thin text-xs">USSD Code</p>
            </div>
            <div className="flex flex-col gap-1 md:gap-2">
                <p className="text-l pb-4">Terms & Policy</p>
                <p className="font-thin text-xs">Terms & Conditions</p>
                <p className="font-thin text-xs">Privacy Policy</p>
            </div>
            <div className="flex flex-row gap-1 md:gap-2 justify-end md:pr-4">
            {
                    icons.map((icon, index) => {
                        return (
                            <Image
                                key={index}
                                src= {icon.src}
                                width={24}
                                height={24}
                                alt={icon.alt}
                                priority= {true}
                                className="hover:cursor-pointer w-3 md:w-auto"
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default ShopFooter;