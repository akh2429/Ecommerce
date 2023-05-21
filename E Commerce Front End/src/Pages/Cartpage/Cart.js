import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Cart() {
    const { search } = useLocation();
    const id = new URLSearchParams(search).get("id")
    const [state, setState] = useState();

    useEffect(() => {
        async function data() {
            try {
                let response = await axios.get(`http://localhost:5050/cart?productId=${id}`);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
        data();
    }, [])


    return (
        <div>
            Under construction
        </div>
    )
}
