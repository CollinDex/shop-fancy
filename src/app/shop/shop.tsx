import Header from "../components/header";
import NewArrival from "../components/new-arrival";
import ShopBody from "../components/shop-body";
import ShopFooter from "../components/shop-footer";

const Shop:React.FC = () => {
    
    return(
        <div className="flex min-h-screen flex-col items-center justify-between bg-customBg text-black antialiased">
            <Header/>
            <ShopBody/>
            <NewArrival/>
            <ShopFooter/>
        </div>
    );
};


export default Shop;