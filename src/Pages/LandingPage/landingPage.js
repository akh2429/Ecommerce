import { useEffect, useState } from "react";
import Photoslider from "./Photoslider/Photoslider";
import PN from "../../Components/Header/ProductNavigator.js/ProductNavigator";
import axios from "axios";

function LandingPage() {
    const [state, setState] = useState([]);
    const [loading, setLoading] = useState(true); // State variable for tracking loading state

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.post("https://e-commerce-backend-qr89.onrender.com/landingpage");
                setState(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false); // Set loading state to false when data fetching is complete
            }
        }

        fetchData();
    }, []);

    return (
        <div className="bg-emerald-100">
            {loading ? (
                <div className="text-center text-xl font-extrabold">Loading...</div>
            ) : (
                <>
                    <PN data={state} />
                    <Photoslider />
                </>
            )}
        </div>
    );
}

export default LandingPage;
