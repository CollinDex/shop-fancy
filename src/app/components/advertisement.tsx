import Image from "next/image";
import { popins } from "../layout";

export const Advertisement = () => {
    return (
        <div className="w-full pt-4 p-2 md:p-8 flex flex-row gap-8  justify-center">
            <div className="flex flex-row justify-between border-2 border-headerBg rounded-lg p-1 md:p-2 w-[80%] lg:w-[35%] bg-white shadow-md">
                <div className=" flex flex-col justify-between p-2 md:p-6 ">
                    <div>
                        <p className={`${popins.className} text-l md:text-3xl font-bold-sm uppercase whitespace-no-wrap`}>Clearance Sales!</p>
                        <p className={`${popins.className} uppercase text-sm md:text-lg font-bold-sm`}>Up to 40% off</p>
                    </div>
                    <button className="bg-headerBg border-2 rounded p-2 w-28 text-white">Shop Now</button>
                </div>
                <div>
                    <Image
                        src="/images/1.png"
                        alt="Item Icon"
                        width={250}
                        height={250}
                        priority= {true}
                        className="pt-8 w-full h-full"
                    />
                </div>
            </div>
            <div className="hidden lg:flex flex-row justify-between border-2 border-headerBg rounded-lg p-2 w-[80%] lg:w-[35%] bg-white shadow-md">
                <div className=" flex flex-col justify-between p-6 ">
                    <div>
                        <p className={`${popins.className} text-3xl font-bold-sm uppercase whitespace-no-wrap`}>Clearance Sales!</p>
                        <p className={`${popins.className} uppercase text-lg font-bold-sm`}>Up to 40% off</p>
                    </div>
                    <button className="bg-headerBg border-2 rounded p-2 w-28 text-white">Shop Now</button>
                </div>
                <div>
                    <Image
                        src="/images/1.png"
                        alt="Item Icon"
                        width={250}
                        height={250}
                        priority= {true}
                        className="pt-8 w-52 h-52"
                    />
                </div>
            </div>
        </div>
    );
};