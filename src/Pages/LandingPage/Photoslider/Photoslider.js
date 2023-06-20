import React, { useState, useEffect } from "react";

import a from "./LandingPageImages/Customized_Home_Mela_May_3000x1200._CB588374306_.jpg"
import b from "./LandingPageImages/Home_mela_Common_Unrec_3000x1200._CB588374333_.jpg"
import c from "./LandingPageImages/Mobile_tall_Hero_revision_3000x1200._CB604857279_.jpg"
import d from "./LandingPageImages/PC-1500-Onecard._CB588373595_.jpg"
import e from "./LandingPageImages/TallHero_3000X1200_Unrec._CB593464763_.jpg"
import f from "./LandingPageImages/UNrec_3000._CB591865002_.jpg"

function Photoslider() {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [a, b, c, d, e, f];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [images.length]);

    const currentImageUrl = images[currentImage];

    return (
        <div
            className="w-full h-full  ">

            <img alt="Not Available"
                src={
                    currentImageUrl
                }
                className="w-full h-full object-fill"
            >
            </img>
        </div>
    );
}

export default Photoslider;
