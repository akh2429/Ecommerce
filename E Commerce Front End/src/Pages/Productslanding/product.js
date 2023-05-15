import Mobiles from "./productcomponent/productcomponent";
import { useLocation } from "react-router-dom";
import a from "./Images/Screenshot from 2023-05-15 15-52-18.png"
function ProductLanding() {
    const { search } = useLocation();
    const category = new URLSearchParams(search).get("category");

    return (
        <div>
            <div className="flex items-center justify-center bg-black" ><img src={a} ></img></div>
            <div className="contentHolder" >
                <div className="mobileComponent" ><Mobiles /></div>
            </div>
        </div>)
}
export default ProductLanding;