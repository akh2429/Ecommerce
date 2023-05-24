import axios from 'axios';
import React, { useEffect, useState } from 'react';
import jwtDecode from "jwt-decode";
import Swal from "sweetalert2";

export default function Cart() {
    const JWtoken = JSON.parse(localStorage.getItem("user"));
    const decoded = jwtDecode(JWtoken.token);
    const user = { id: decoded.userId };
    const [state, setState] = useState();
    const [cartUpdated, setCartUpdated] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.post("http://localhost:5050/cartdata", user);
                setState(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [cartUpdated, user]);

    async function addHandler(id) {
        const data = { userId: decoded.userId, productId: id, quantity: 1, action: "addProductQuantity" };
        if (data.userId && data.productId) {
            const response2 = await axios.post("http://localhost:5050/cart", data);
            if (response2.data === "Quantity Increased") {
                Swal.fire({ title: 'Success', text: `Quantity of item has been increased`, icon: 'success', confirmButtonText: 'Ok' });
                setCartUpdated(!cartUpdated);
            }
        }
    }

    async function DecreaseHandler(id) {
        const data = { userId: decoded.userId, productId: id, quantity: 1, action: "decreasequantity" };
        if (data.userId && data.productId) {
            const response2 = await axios.post("http://localhost:5050/cart", data);
            if (response2.data === "Quantity Decreased") {
                Swal.fire({ title: 'Success', text: `Quantity of item has been decreased`, icon: 'success', confirmButtonText: 'Ok' });
                setCartUpdated(!cartUpdated);
            } else if (response2.data === "Quantity Can not be less than one") {
                Swal.fire({ title: 'Error', text: `Quantity can not be less than one`, icon: 'error', confirmButtonText: 'Ok' });
            }
        }
    }

    async function deleteHandler(id) {
        const data = { userId: decoded.userId, productId: id, quantity: 1, action: "deleteItem" };
        if (data.userId && data.productId) {
            const response2 = await axios.post("http://localhost:5050/cart", data);
            if (response2.data === "Item Deleted") {
                Swal.fire({ title: 'Success', text: `Item successfully deleted`, icon: 'success', confirmButtonText: 'Ok' });
                setCartUpdated(!cartUpdated);
            }
        }
    }

    return (
        <div>
            <div>
                {state && state.length === 0 ? (
                    <div className='flex justify-center w-full  h-screen bg-red-600  shadow-md rounded-full items-center p-4' >Items Not available. Please add items first.</div>
                ) : (
                    state && state.map((val) => (
                        <div key={val._id} className='flex items-center h-40 w-full mx-auto font-extrabold m-5 p-4'>
                            <div className='flex justify-start w-1/2 bg-yellow-400 h-full items-center p-4 gap-2'>
                                <div className='h-full'>
                                    <img src={val.prodId.images} className='w-full h-full object-contain' />
                                </div>
                                <div>{val.prodId.productname}</div>
                            </div>
                            <div className='flex justify-around w-1/2 bg-red-600 h-full shadow-md rounded-full items-center p-4'>
                                <div>Quantity: {val.qty}</div>
                                <div className='flex text-white gap-3'>
                                    <button className='text-5xl' onClick={() => addHandler(val.prodId._id)}>+</button>
                                    <button className='text-5xl' onClick={() => DecreaseHandler(val.prodId._id)}>-</button>
                                    <button className='text-5xl' onClick={() => deleteHandler(val.prodId._id)}>x</button>
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
