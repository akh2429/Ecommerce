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

    console.log(state);
    return (
        <div className="flex" >
            <div className="flex" >
                <div className="flex" >
                    <div><img src={state.images} /></div>
                    <div>
                        <button>Add to Cart</button>
                        <button>BuY Now</button>
                    </div>
                </div>
                <div className="flex" >
                    <div>
                        {state.brand}
                        {state.productname}
                    </div>
                    <div>
                        {state.price}
                    </div>
                    <div>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinalCheckout;