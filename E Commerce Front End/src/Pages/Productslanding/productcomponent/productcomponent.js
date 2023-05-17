import React from "react";
import { Link } from "react-router-dom";
function Products({ data }) {
    return (
        <div className="flex gap-3 shadow-md flex-wrap items-start justify-start  ">
            {data &&
                data.map((val) => (

                    <div className=" flex flex-col w-72 rounded-b-3xl p-1 items-center overflow-hidden flex-nowrap border-4 border-gray-950 border-solid gap-2" >
                        <img
                            className=" top-0 left-0 h-full w-full object-cover z-0"
                            src={val.images}
                            alt="Product Image"
                        />
                        <div className="flex justify-between z-10 font-bold bg-amber-400 rounded-b-2xl gap-2 hover:text-lg ">
                            <div className="flex p-1 bg-lime-500 border-r-4 ">
                                {val.productname}
                            </div>
                            <div className="flex p-1">{val.price}$/-</div>
                        </div>
                        <Link to={`/finalCheckout?id=${val._id}`}
                            className="flex p-1 items-center justify-center rounded-ss-xl z-10 bg-black bg-white  border-2  border-gray-950   font-extrabold   hover:text-lg  ">
                            More Details
                        </Link>
                    </div>
                ))
            }
        </div >
    );
}

export default Products;
