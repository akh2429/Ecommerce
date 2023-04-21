import { useState } from "react";
import style from "./Login.module.css";

function LoginPage() {
    const [login, setLogin] = useState(true)

    function loginHandler(e) {
        e.preventDefault()
        setLogin(false)
    }
    function signupHandler(e) {
        e.preventDefault()
        setLogin(true)
    }

    return (<div className={style.FormContainer} >
        {
            login === true ?
                <form className={style.loginFormContainer} >
                    <input className={style.inputContainer} type="email" placeholder="Email Address" />
                    <input className={style.inputContainer} type="password" placeholder="Password" />
                    <button className={style.button} >Login</button>
                    <button className={style.button} onClick={loginHandler} >New User? Signup</button>
                </form> :
                <form className={style.signUpFormContainer} >
                    <input className={style.inputContainer} type="email" placeholder="Email Address" />
                    <input className={style.inputContainer} type="text" placeholder="Full Name" />
                    <input className={style.inputContainer} type="password" placeholder="Set Password" />
                    <input className={style.inputContainer} type="password" placeholder="Repeat Password" />
                    <input className={style.inputContainer} type="number" placeholder="Mobile Number" />
                    <input className={style.inputContainer} type="text" placeholder="Full Address" />
                    <input className={style.inputContainer} type="number" placeholder="Pincode" />
                    <button className={style.button} >Signup</button>
                    <button className={style.button} onClick={signupHandler} >Back to Login</button>
                </form>
        }
    </div>)
}
export default LoginPage;