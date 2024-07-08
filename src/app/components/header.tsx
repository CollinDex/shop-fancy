'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header:React.FC = () => {

    const headerTags = ['Home', 'Market Place', 'About', 'Reviews', 'Delivery'];
    const icons = [{alt:'Notification', src: '/notification-icon.svg'}, {alt:'Cart', src: '/cart-icon.svg'}, {alt:'Profile', src: '/profile-icon.svg'}];

    const router = useRouter();

    const navigate = () => {
        router.push('/cart');
    };

    const navigateHome = () => {
        router.push('/');
    };

    return (
        <div className="text-white w-full bg-headerBg flex flex-row justify-between md:grid grid-cols-[1fr_2fr_1fr] gap-4 p-1 md:p-2 md:p-4 items-center shadow">
            <div className="hover:cursor-pointer pt-2 pl-1 md:pl-4">
                <Image
                    src="/hero-icon.svg"
                    width={150}
                    height={50}
                    alt="Hero Icon"
                    priority= {true}
                    className="w-sm md:w-60 md:h-auto"
                    onClick={navigateHome}
                />
            </div>
            <div className="w-full text-center hidden md:flex flex-row justify-center  md:gap-4 lg:gap-8 hover:cursor-pointer">
                {
                    headerTags.map((tag, index) => {
                        return(
                            <p key={index} className="text-sm lg:text-base">{tag}</p>
                        );
                    })
                }
            </div>
            <div className="flex flex-row justify-end gap-1 md:gap-2 pr-1 md:pr-4">
                {
                    icons.map((icon, index) => {
                        return (
                            <Image
                                key={index}
                                src= {icon.src}
                                width={30}
                                height={30}
                                alt={icon.alt}
                                priority= {true}
                                className=" w-6 lg:w-12 hover:cursor-pointer"
                                onClick={navigate}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Header;