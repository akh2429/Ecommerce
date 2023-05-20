// import style from "./Signup.module.css"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';


function Signup() {
    const [error, setError] = useState("");
    const Navigate = useNavigate();
    const User = useSelector(state => state.User);
    const Dispatch = useDispatch();
    const auth = localStorage.getItem("user");
    const [signUpuser, setsignUpuser] = useState({ "email": '', "fullname": '', "newPassword": '', "repeatPassword": '', "mobileNumber": '', "fullAddress": '', "pincode": '' });


    useEffect(() => {
        if (auth) {
            Navigate("/login");
            Swal.fire({ title: 'Already SignedUp', text: 'You have already Signed Up', icon: 'error', confirmButtonText: 'Ok' });
        }
    }, [])


    async function UserSignup(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5050/register", signUpuser);
            setsignUpuser({ "email": '', "fullname": '', "newPassword": '', "repeatPassword": '', "mobileNumber": '', "fullAddress": '', "pincode": '' });
            Navigate("/login");
        }
        catch (error) {
            if (error.response.data.message) {
                const errorMessage = error.response.data.message;
                const startIndex = errorMessage.indexOf(":") + 1;
                const formattedErrorMessage = errorMessage.substring(startIndex).trim();
                setError(formattedErrorMessage);
            } if (error.response.data.ConfirmPassword) {
                setError(error.response.data.ConfirmPassword)
            }
        }
    };

    function signUpHandler(e) {
        const { name, value } = e.target;
        setError("");
        setsignUpuser({ ...signUpuser, [name]: value });
    }


    return (
        <div className="bg-emerald-100 h-screen w-full flex items-center justify-center  ">
            <form onSubmit={UserSignup} className="flex flex-col items-center space-y-4  w-full md:w-1/2 lg:w-1/3"  >
                <input className="h-8 shadow-inner	rounded text-center " type="email" placeholder="Email Address" onChange={signUpHandler} value={signUpuser.email} name="email" />
                <input className="h-8 shadow-inner	rounded text-center " type="text" placeholder="Full Name" onChange={signUpHandler} value={signUpuser.fullname} name="fullname" />
                <input className="h-8 shadow-inner	rounded text-center " type="password" placeholder="Set New Password" onChange={signUpHandler} value={signUpuser.newPassword} name="newPassword" />
                <input className="h-8 shadow-inner	rounded text-center " type="password" placeholder="Confirm Password" onChange={signUpHandler} value={signUpuser.repeatPassword} name="repeatPassword" />
                <input className="h-8 shadow-inner	rounded text-center " type="number" placeholder="Mobile Number" onChange={signUpHandler} value={signUpuser.mobileNumber} name="mobileNumber" />
                <input className="h-8 shadow-inner	rounded text-center " type="text" placeholder="Full Address" onChange={signUpHandler} value={signUpuser.fullAddress} name="fullAddress" />
                <input className="h-8 shadow-inner	rounded text-center " type="number" placeholder="Pincode" onChange={signUpHandler} value={signUpuser.pincode} name="pincode" />
                <button className="bg-slate-600 border-2 shadow-md border-white-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 hover:border-double hover:text-lg " type="submit">Signup</button>
                <button className="bg-slate-600 border-2 shadow-md border-white-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 hover:border-double hover:text-lg" onClick={() => Navigate("/login")} > Back to Login</button >
                {error && <p className="text-red-500">{error}</p>}
            </form >
        </div >
    )
}
export default Signup;