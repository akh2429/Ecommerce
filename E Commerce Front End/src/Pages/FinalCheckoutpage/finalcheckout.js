import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function FinalCheckout() {
    const [state, setState] = useState();
    const { search } = useLocation();
    const id = { _id: new URLSearchParams(search).get("id") };

    useEffect(() => {
        async function data() {
            try {
                let response = await axios.post("http://localhost:5050/finalCheckout", id);
                setState(response.data);
            }
            catch (error) {
                console.log(error);
            }
        }
        data();
    }, []);

    return (
        <div className="flex justify-center  h-screen w-full bg-emerald-100 p-2" >
            <div className="flex h-max w-1/2 lg:w-screen gap-1 md:w-screen  sm:w-screen vsm:w-screen  sm:h-screen sm:flex-col vsm:flex-col   " >
                <div className="flex flex-col h-max gap-5 border-2 border-black mr-1 rounded-b-3xl overflow-hidden  " >
                    <div className="flex object-cover p-2 border-2 border-black m-1 shadow-sm" >
                        <img src={state?.images} />
                    </div>
                    <div className="flex justify-center items-center shadow-sm" >
                        <button className="bg-yellow-400 font-extrabold w-1/2  border border-black  mr-1 shadow-sm " >Add to Cart</button>
                        <button className="bg-yellow-400 w-1/2 font-extrabold border border-black shadow-sm" >BuY Now</button>
                    </div>
                </div>
                <div className="flex flex-col h-max p-8 gap-2 items-center justify-center w-1/2 font-extrabold text-2xl capitalize border-2 border-black bg-orange-300 rounded-b-2xl sm:w-screen vsm:w-screen " >
                    <div  >
                        {state?.brand}-
                        {state?.productname}
                    </div>
                    <div>
                        {state?.price}$/-
                    </div>
                    <div className="flex flex-col gap-2  " >
                        {Object.entries(state?.productspec || {}).map(([key, value]) => (
                            <p key={key} >
                                {key}:{value}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinalCheckout;