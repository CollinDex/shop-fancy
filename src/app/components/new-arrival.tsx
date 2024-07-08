import { ItemsContainer } from "./shop-body";
import { Poppins } from "next/font/google";


const popins = Poppins({
  weight: ['400', '500', '700'], // Specify the weights you want to use
  subsets: ['latin'], // Specify the character subsets you want to use
  display: 'swap', // Specify font display strategy
});

const NewArrival:React.FC = () => {
    return (
        <div className={`${popins.className} w-full`}>
            <div className="flex flex-row text-white w-full bg-headerBg justify-start p-2 md:p-4 items-center shadow">
            <p className=" text-2xl md:text-4xl">New Arrival</p>
            </div>
            <ItemsContainer/>
        </div>
    );
};

export default NewArrival;