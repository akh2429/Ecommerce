import React, { useState, useEffect } from "react";
import a from "./Images/Screenshot from 2023-05-14 18-11-33.png";
import c from "./Images/Screenshot from 2023-05-14 18-15-26.png";
import d from "./Images/Screenshot from 2023-05-14 18-15-37.png";
import e from "./Images/Screenshot from 2023-05-14 18-15-57.png";
import f from "./Images/Screenshot from 2023-05-14 18-16-53.png";
import g from "./Images/Screenshot from 2023-05-14 19-49-02.png";
import h from "./Images/Screenshot from 2023-05-14 19-49-39.png";
import i from "./Images/Screenshot from 2023-05-14 19-50-15.png";

function Photoslider() {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [a, c, d, e, f, g, h, i];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const currentImageUrl = images[currentImage];
    console.log(currentImageUrl)

    return (
        <div
            className="w-screen h-72  m-auto  relative bg-black ">

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
