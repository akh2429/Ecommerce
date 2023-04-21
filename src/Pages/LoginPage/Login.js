import { useState } from "react";
import style from "./Login.module.css";

function LoginPage() {
    const [login, setLogin] = useState(true);
    const [loggedUser, setloggedUser] = useState({ email: '', password: '' });
    const [signUpuser, setsignUpuser] = useState({ id: Math.random(), email: '', fullname: '', newPassword: '', repeatPassword: '', mobileNumber: '', fullAddress: '', pincode: '' });

    function signUpHandler(e) {
        const { name, value } = e.target;
        setsignUpuser({ ...signUpuser, [name]: value });
    }
    function loginHandler(e) {
        const { name, value } = e.target;
        setloggedUser({ ...loggedUser, [name]: value });
    }
    function UserSignup(e) {
        e.preventDefault();
        const existingUsers = JSON.parse(localStorage.getItem('userDetails')) || [];
        const updatedUsers = [...existingUsers, signUpuser];
        localStorage.setItem('userDetails', JSON.stringify(updatedUsers));
        setsignUpuser({ id: Math.random(), email: '', fullname: '', newPassword: '', repeatPassword: '', mobileNumber: '', fullAddress: '', pincode: '' })
    }
    function UserLogin(e) {
        e.preventDefault();
        console.log(loggedUser);
    }

    return (<div className={style.FormContainer} >
        {
            login === true ?
                <form className={style.loginFormContainer} >
                    <input type="email" placeholder="Email Address" onChange={loginHandler} name="email" value={loggedUser.email} />
                    <input type="password" placeholder="Password" onChange={loginHandler} name="password" value={loggedUser.password} />
                    <button className={style.button} onClick={UserLogin} >Login</button>
                    <button className={style.button} onClick={() => setLogin(false)} >New User? Signup</button>
                </form> :
                <form className={style.signUpFormContainer} >
                    <input type="email" placeholder="Email Address" onChange={signUpHandler} value={signUpuser.email} name="email" />
                    <input type="text" placeholder="Full Name" onChange={signUpHandler} value={signUpuser.fullname} name="fullname" />
                    <input type="password" placeholder="Set New Password" onChange={signUpHandler} value={signUpuser.newPassword} name="newPassword" />
                    <input type="password" placeholder="Repeat Password" onChange={signUpHandler} value={signUpuser.repeatPassword} name="repeatPassword" />
                    <input type="number" placeholder="Mobile Number" onChange={signUpHandler} value={signUpuser.mobileNumber} name="mobileNumber" />
                    <input type="text" placeholder="Full Address" onChange={signUpHandler} value={signUpuser.fullAddress} name="fullAddress" />
                    <input type="number" placeholder="Pincode" onChange={signUpHandler} value={signUpuser.pincode} name="pincode" />
                    <button className={style.button} onClick={UserSignup} >Signup</button>
                    <button className={style.button} onClick={() => setLogin(true)} > Back to Login</button>
                </form>
        }
    </div >)
}
export default LoginPage;