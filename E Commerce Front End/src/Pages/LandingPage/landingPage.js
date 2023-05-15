import { useEffect, useState } from "react";
import Photoslider from "./Photoslider/Photoslider";
import PN from "./ProductNavigator.js/ProductNavigator";
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
    }, [])
    return (
        <div>
            <Photoslider />
            <PN data={state} />
        </div>)
}
export default LandingPage;