import Header from "../components/header";

const Shop:React.FC = () => {
    
    return(
        <div className="flex min-h-screen flex-col items-center justify-between bg-customBg text-black antialiased">
            <Header/>
            <div>Body</div>
            <div>Demaecation Body</div>
            <div>Footer</div>
        </div>
    );
};


export default Shop;