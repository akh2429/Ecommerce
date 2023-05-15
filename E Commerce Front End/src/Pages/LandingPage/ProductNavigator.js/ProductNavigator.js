import React from 'react'
import { Link } from 'react-router-dom'
export default function PN({ data }) {
    return (
        <div className="flex justify-center items-center border-2 bg-slate-200
             flex-col text-lg xl:flex-row xl:text-3xl
             lg:flex-col lg:text-2xl
             md:flex-col md:text-xl
             sm:flex-col sm:text-lg
             vsm:flex-col vsm:text-lg
             capitalize font-extrabold" >
            {data.map((val, i) =>
                <Link key={i} className='flex  bg-orange-600 justify-center items-center h-24 w-2/6  rounded-bl-2xl border-2 border-pink-400 m-1 shadow-xl   text-gray-50  '
                    to={`/ProductLanding?category=${val}`}>{val} </Link >
            )}

        </div>
    )
};
