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
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Passworrd" />
                    <button>Login</button>
                    <button onClick={loginHandler} >New User? Signup</button>
                </form> :
                <form className={style.signUpFormContainer} >
                    <input type="email" placeholder="Email Address" />
                    <input type="text" placeholder="Full Name" />
                    <input type="password" placeholder="Set Password" />
                    <input type="password" placeholder="Repeat Password" />
                    <input type="number" placeholder="Mobile Number" />
                    <input type="text" placeholder="Full Address" />
                    <input type="number" placeholder="Pincode" />
                    <button>Signup</button>
                    <button onClick={signupHandler} >Back to Login</button>
                </form>
        }
    </div>)
}
export default LoginPage;