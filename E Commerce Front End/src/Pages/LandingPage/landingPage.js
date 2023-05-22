import { useEffect, useState } from "react";
import Photoslider from "./Photoslider/Photoslider";
import PN from "../../Components/Header/ProductNavigator.js/ProductNavigator";
import axios from "axios";

function LandingPage() {
    const [state, setState] = useState([]);


    useEffect(() => {
        async function data() {
            try {
                const response = await axios.post("http://localhost:5050/landingpage");
                setState(response.data);
            }
            catch (error) {
                console.log(error);
            }
        }
        data();
    }, []);

    return (
        <div className="bg-emerald-100">
            <PN data={state} />
            <Photoslider />
        </div>)
}
export default LandingPage;