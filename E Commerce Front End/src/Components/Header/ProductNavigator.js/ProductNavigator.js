import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';


export default function PN({ data }) {
    const [open, setOpen] = useState(false);
    console.log(open);

    return (
        <div>
            <div className="flex justify-center items-center border-2 bg-slate-200 flex-col text-lg xl:flex-row xl:text-2xl lg:hidden md:hidden sm:hidden vsm:hidden capitalize font-extrabold">
                {data.map((val, i) => (
                    <Link
                        key={i}
                        className={`
              flex bg-orange-600 justify-center items-center h-10 w-2/6 rounded-bl-2xl 
              border-2 border-pink-400 m-1 lg:hidden md:hidden sm:hidden vsm:hidden 
              shadow-xl text-gray-50
            `}
                        to={`/ProductLanding?category=${val}`}
                    >
                        {val}
                    </Link>
                ))}
            </div>

            <div className="xl:hidden flex justify-center items-center relative">
                <button onClick={() => setOpen(!open)}><GiHamburgerMenu /></button>
            </div>

            <div
                className={`
          ${open === true ? 'flex' : 'hidden'} justify-center items-center border-2 
          bg-slate-200 flex-col text-lg xl:hidden lg:flex-col lg:text-2xl md:flex-col 
          md:text-2xl sm:flex-col sm:text-2xl vsm:flex-col vsm:text-2xl capitalize 
          font-extrabold absolute z-10 w-full
        `}
            >
                {data.map((val, i) => (
                    <Link
                        key={i}
                        className={`
              flex bg-orange-600 justify-center items-center h-10 w-2/6 rounded-bl-2xl 
              border-2 border-pink-400 m-1 xl:hidden shadow-xl text-gray-50
            `}
                        to={`/ProductLanding?category=${val}`}
                    >
                        {val}
                    </Link>
                ))}
            </div>
        </div>
    );
}
