import { ItemsContainer } from "./shop-body";
import { popins, inter } from "../layout";

const NewArrival:React.FC = () => {
    return (
        <div className={`${popins.className} w-full`}>
            <div className="flex flex-row text-white w-full bg-headerBg justify-between p-2 md:p-4 items-center shadow">
            <p className=" text-2xl md:text-4xl">New Arrival</p>
            <div>
                <p>View All</p>
                <div>Arrow</div>
            </div>
            </div>
            <ItemsContainer/>
        </div>
    );
};

export default NewArrival;