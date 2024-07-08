import Header from "../components/header";
import ShopFooter from "../components/shop-footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-customBg text-black antialiased">
        <Header/>
        <ShopFooter/>
    </div>
  );
}
