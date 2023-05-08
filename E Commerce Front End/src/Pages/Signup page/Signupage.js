import style from "./Signup.module.css"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


function Signup() {
    const Navigate = useNavigate();
    const User = useSelector(state => state.User);
    const Dispatch = useDispatch();

    const [signUpuser, setsignUpuser] = useState({ "email": '', "fullname": '', "newPassword": '', "repeatPassword": '', "mobileNumber": '', "fullAddress": '', "pincode": '' });

    async function UserSignup(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5050/register", signUpuser);
            setsignUpuser({ "email": '', "fullname": '', "newPassword": '', "repeatPassword": '', "mobileNumber": '', "fullAddress": '', "pincode": '' });
            Navigate("/login");
        }
        catch (error) {
            console.log(error);
        }
    };

    function signUpHandler(e) {
        const { name, value } = e.target;
        setsignUpuser({ ...signUpuser, [name]: value });
    };

    return (
        <div className={style.FormContainer} >
            <form className={style.signUpFormContainer} onSubmit={UserSignup} >
                <input type="email" placeholder="Email Address" onChange={signUpHandler} value={signUpuser.email} name="email" />
                <input type="text" placeholder="Full Name" onChange={signUpHandler} value={signUpuser.fullname} name="fullname" />
                <input type="password" placeholder="Set New Password" onChange={signUpHandler} value={signUpuser.newPassword} name="newPassword" />
                <input type="password" placeholder="Repeat Password" onChange={signUpHandler} value={signUpuser.repeatPassword} name="repeatPassword" />
                <input type="number" placeholder="Mobile Number" onChange={signUpHandler} value={signUpuser.mobileNumber} name="mobileNumber" />
                <input type="text" placeholder="Full Address" onChange={signUpHandler} value={signUpuser.fullAddress} name="fullAddress" />
                <input type="number" placeholder="Pincode" onChange={signUpHandler} value={signUpuser.pincode} name="pincode" />
                <button className={style.button} type="submit" >Signup</button>
                <button className={style.button} onClick={() => Navigate("/login")} > Back to Login</button >
            </form>
        </div>)
}
export default Signup;