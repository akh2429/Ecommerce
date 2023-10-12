import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Products from './productcomponent/productcomponent';

import a from './ProductLandingImages/Screenshot from 2023-05-15 15-52-18.png';
import b from './ProductLandingImages/Screenshot from 2023-05-17 10-03-42.png';

function ProductLanding() {
    const { search } = useLocation();
    const [state, setState] = useState('');
    const [currentImage, setCurrentImage] = useState(0);
    const [loading, setLoading] = useState(true); // State variable for tracking loading state

    const Images = [a, b];

    useEffect(() => {
        const Interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % Images.length);
        }, 3000);
        return () => clearInterval(Interval);
    }, [Images.length]);

    const ImageUrl = Images[currentImage];

    useEffect(() => {
        async function fetchData() {
            try {
                const cat = { category: new URLSearchParams(search).get('category') };
                let response = await axios.post('http://localhost:5050/productlanding', cat);
                setState(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false); // Set loading state to false when data fetching is complete
            }
        }
        fetchData();
    }, [search]);

    return (
        <div className="h-max w-full bg-emerald-100">
            <div className="flex items-center justify-center bg-black shadow-sm">
                <img alt="Not available" src={ImageUrl} />
            </div>
            <div className="p-7 flex bg-emerald-100">
                {loading ? (
                    <div className="text-center font-extrabold text-2xl">Loading...</div>
                ) : (
                    <Products data={state} />
                )}
            </div>
        </div>
    );
}

export default ProductLanding;
