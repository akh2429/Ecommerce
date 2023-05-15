function Mobiles() {
    return (
        <div className="relative flex flex-col h-80 w-80 border-2 bg-slate-400">
            <img
                className="absolute top-0 left-0 h-full w-full object-cover"
            // src="https://example.com/image.jpg"
            // alt="Product Image"
            />
            <div className="flex justify-between bg-slate-800">
                <div className="flex p-1 bg-orange-700">Product Name</div>
                <div className="flex p-1 bg-orange-700">Price</div>
            </div>
            <button className="flex p-1 bg-orange-200 items-center justify-center">
                More Details
            </button>
        </div>
    );
}

export default Mobiles;
