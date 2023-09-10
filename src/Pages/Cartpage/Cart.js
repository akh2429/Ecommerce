import axios from 'axios';
import React, { useEffect, useState, useMemo } from 'react';
import jwtDecode from "jwt-decode";
import { toast } from 'react-toastify';

export default function Cart() {

    const [state, setState] = useState();
    const [cartUpdated, setCartUpdated] = useState(false);

    const user = useMemo(() => {
        const JWtoken = JSON.parse(localStorage.getItem("user"));
        const decoded = jwtDecode(JWtoken.token);
        return { id: decoded.userId };
    }, []);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.post("https://e-commerce-backend-qr89.onrender.com/cartdata", user);
                setState(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [cartUpdated, user]);

    async function addHandler(id) {
        const JWtoken = JSON.parse(localStorage.getItem("user"));
        const decoded = jwtDecode(JWtoken.token);
        const data = { userId: decoded.userId, productId: id, quantity: 1, action: "addProductQuantity" };
        if (data.userId && data.productId) {
            const response2 = await axios.post("https://e-commerce-backend-qr89.onrender.com/cart", data);
            if (response2.data === "Quantity Increased") {
                toast.success(`Quantity of item has been increased`);
                setCartUpdated(!cartUpdated);
            }
        }
    }

    async function DecreaseHandler(id) {
        const JWtoken = JSON.parse(localStorage.getItem("user"));
        const decoded = jwtDecode(JWtoken.token);
        const data = { userId: decoded.userId, productId: id, quantity: 1, action: "decreasequantity" };
        if (data.userId && data.productId) {
            const response2 = await axios.post("https://e-commerce-backend-qr89.onrender.com/cart", data);
            if (response2.data === "Quantity Decreased") {
                toast.success(`Quantity of item has been decreased`);
                setCartUpdated(!cartUpdated);
            } else if (response2.data === "Quantity Can not be less than one") {
                toast.error(`Quantity can't be less than one`);
            }
        }
    }

    async function deleteHandler(id) {
        const JWtoken = JSON.parse(localStorage.getItem("user"));
        const decoded = jwtDecode(JWtoken.token);
        const data = { userId: decoded.userId, productId: id, quantity: 1, action: "deleteItem" };
        if (data.userId && data.productId) {
            const response2 = await axios.post("https://e-commerce-backend-qr89.onrender.com/cart", data);
            if (response2.data === "Item Deleted") {
                toast.success(`Item sucessfully deleted`);
                setCartUpdated(!cartUpdated);
            }
        }
    }

    return (
        <div>
            <div>
                {state && state.length === 0 ? (
                    <div className='flex justify-center w-full  h-screen   shadow-md rounded-full items-center p-4' >Items Not available. Please add items first.</div>
                ) : (
                    state && state.map((val) => (
                        <div key={val._id} className='flex items-center h-40 w-full mx-auto font-extrabold m-5 p-4 lg:text-2xl md:text-xl sm:text-sm vsm:text-sm '>
                            <div className='flex justify-start w-1/2 shadow-md  h-full items-center p-4 gap-5 lg:text-2xl md:text-xl sm:text-sm vsm:text-sm '>
                                <div className='h-full'>
                                    <img alt='Not Available' src={val.prodId.images} className='w-full h-full object-contain' />
                                </div>
                                <div>{val.prodId.productname}</div>
                                <div>Qty: {val.qty}</div>
                            </div>
                            <div className='flex justify-around w-1/2  h-full shadow-md  items-center p-4 lg:text-2xl md:text-xl sm:text-sm vsm:text-sm'>
                                <div className='flex  gap-4'>
                                    <button className='text-5xl lg:text-2xl md:text-xl sm:text-sm vsm:text-sm text-green-500 border-2 rounded-lg ' onClick={() => addHandler(val.prodId._id)}>+</button>
                                    <button className='text-5xl lg:text-2xl md:text-xl sm:text-sm vsm:text-sm border-2 rounded-lg ' onClick={() => DecreaseHandler(val.prodId._id)}>-</button>
                                    <button className='text-5xl lg:text-2xl md:text-xl sm:text-sm vsm:text-sm text-red-600 border-2 rounded-lg' onClick={() => deleteHandler(val.prodId._id)}>x</button>
                                </div>
                                <div>{val.prodId.price * val.qty}$/-</div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
