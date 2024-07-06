const ShopBody = () => {
    const links = ['Water Bottles', 'Tot Bags', 'Crocs', 'Bikers Shorts', 'Crop Tops', 'Bucket Hats', 'Jewelry Box'];
    return (
        <div className="w-full h-full grid grid-cols-[1fr_4fr] gap-4 p-8">
            <div>
                <p className="text-xl pb-4">Category</p>
                {
                    links.map((link, index) => {
                        return (
                            <p className="text-sm pb-2 hover:cursor-pointer" key={index}>{link}</p>
                        ) 
                    })
                }
            </div>
            <div className="">
                <div>Search Bar</div>
                <div>Items Conatiner</div>
            </div>
        </div>
    );
};

export default ShopBody;