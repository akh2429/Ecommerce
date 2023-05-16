import React from "react";
function Products({ data }) {
    console.log(data);
    return (
        <>
            {
                data && data.map((val) => (
                    <div className="relative flex flex-col h-72 w-72 rounded-b-3xl p-1 items-center overflow-hidden">
                        <img
                            className=" top-0 left-0 h-full w-full object-cover z-0"
                            src={val.images}
                            alt="Product Image"
                        />
                        <div className="flex justify-between z-10">
                            <div className="flex p-1">{val.productname}</div>
                            <div className="flex p-1">{val.price}</div>
                        </div>
                        <button className="flex p-1 items-center justify-center rounded-2xl z-10">
                            More Details
                        </button>
                    </div>
                ))
            }
        </>
    );
}

export default Products;
