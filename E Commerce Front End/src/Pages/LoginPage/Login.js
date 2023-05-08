import { useState } from "react";
import style from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add_user } from "../../Components/Redux/Action";
import axios from "axios";

function LoginPage() {
    const Navigate = useNavigate();
    const User = useSelector(state => state.User);
    const Dispatch = useDispatch();

    const [loggedUser, setloggedUser] = useState({ email: '', password: '' });


    function loginHandler(e) {
        const { name, value } = e.target;
        setloggedUser({ ...loggedUser, [name]: value });
        console.log(User);
    };

    async function UserLogin(e) {
        e.preventDefault();
        try {
            const result = await axios.get("http://localhost:5050/login");
            const access = result.data.find(val => loggedUser.email === val.email && loggedUser.password === val.newPassword);
            if (access) {
                // Navigate("/");
                Dispatch(add_user(access));
            }
        }
        catch (error) {
            console.log(error);
        }
    };



    return (<div className={style.FormContainer} >
        <form className={style.loginFormContainer} >
            <input type="email" placeholder="Email Address" onChange={loginHandler} name="email" value={loggedUser.email} />
            <input type="password" placeholder="Password" onChange={loginHandler} name="password" value={loggedUser.password} />
            <button className={style.button} onClick={UserLogin} >Login</button>
            <button className={style.button} onClick={() => Navigate("/signup")} >New User? Signup</button >
        </form>
    </div >)
}
export default LoginPage;

