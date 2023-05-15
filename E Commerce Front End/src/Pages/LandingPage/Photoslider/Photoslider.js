import React, { useState, useEffect } from "react";
import a from "./Images/Screenshot from 2023-05-14 18-11-33.png";
import g from "./Images/Screenshot from 2023-05-14 19-49-02.png";
import h from "./Images/Screenshot from 2023-05-14 19-49-39.png";
import i from "./Images/Screenshot from 2023-05-14 19-50-15.png";

function Photoslider() {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [a, g, h, i];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const currentImageUrl = images[currentImage];

    return (
        <div
            className="w-screen h-72    relative m-1  ">

            <img
                src={
                    currentImageUrl
                }
                className="w-full h-full rounded-2xl object-contain"
            >
            </img>
        </div>
    );
}

export default Photoslider;
