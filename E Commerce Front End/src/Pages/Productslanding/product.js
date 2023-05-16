import Products from "./productcomponent/productcomponent";
import { useLocation } from "react-router-dom";
import a from "./Images/Screenshot from 2023-05-15 15-52-18.png"
import { useEffect, useState } from "react";
import axios from "axios";


function ProductLanding() {

    const { search } = useLocation();
    const cat = { category: new URLSearchParams(search).get("category") };
    const [state, setState] = useState("");

    useEffect(() => {
        async function data() {
            try {
                let response = await axios.post("http://localhost:5050/productlanding", cat);
                setState(response.data)
            }
            catch (error) {
                console.log(error);
            }
        }
        data()
    }, []);

    return (
        <div  >
            <div className="flex items-center justify-center bg-black shadow-sm" ><img src={a} ></img></div>
            <div className="p-7 flex w-full bg-slate-500  " >
                <Products data={state} />
            </div>
        </div>
    )
}
export default ProductLanding;