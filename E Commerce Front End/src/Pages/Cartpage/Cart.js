import axios from 'axios';
import React, { useEffect, useState } from 'react';
import jwtDecode from "jwt-decode";


export default function Cart() {
    const JWtoken = JSON.parse(localStorage.getItem("user"));
    const decoded = jwtDecode(JWtoken.token);
    const user = { id: decoded.userId };
    const [state, setState] = useState();


    useEffect(() => {

        async function data() {
            try {
                const response = await axios.post("http://localhost:5050/cartdata", user);
                setState(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        data();
    }, []);


    return (
        <div>
            {state && state.map((val) =>
                <div key={val._id} className='flex items-center h-40  w-full mx-auto font-extrabold m-5 p-4 ' >
                    <div className='flex justify-start w-1/2 bg-yellow-400 h-full items-center p-4 gap-2' >
                        <div className='h-full' >
                            <img src={val.prodId.images} className='w-full h-full object-contain' />
                        </div>
                        <div>{val.prodId.productname}</div>
                    </div>
                    <div className='flex justify-around w-1/2 bg-red-600 h-full shadow-md  rounded-ee-full items-center p-4 ' >
                        <div>Quantity:-{val.qty}</div>
                        <div className='flex text-white ' >
                            <button className='text-3xl' >+</button>
                            <div className='text-4xl' >|</div>
                            <button className='text-3xl' >-</button>
                        </div>
                        <div>{val.prodId.price}$/-</div>
                    </div>
                </div>)}

        </div>
    )
}
