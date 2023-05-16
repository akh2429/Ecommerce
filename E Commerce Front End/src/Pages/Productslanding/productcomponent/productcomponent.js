function Products({ data }) {
    return (
        <>
            {
                data && data.map((val) => {
                    <div >
                        <div>{val.productname}</div>
                        <div className="relative flex flex-col h-72 w-72 rounded-b-3xl p-1 items-center overflow-hidden">
                            <img
                                className=" top-0 left-0 h-full w-full object-cover z-0"
                                src=""
                                alt="Product Image"
                            />
                            <div className="flex justify-between z-10">
                                <div className="flex p-1">Akhilesh</div>
                                <div className="flex p-1">Sharma</div>
                            </div>
                            <button className="flex p-1 items-center justify-center rounded-2xl z-10">
                                More Details
                            </button>
                        </div>
                    </div>

                })
            }
        </>
    );
}

export default Products;
