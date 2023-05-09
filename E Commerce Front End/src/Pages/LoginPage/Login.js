import { useState } from "react";
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
    };

    async function UserLogin(e) {
        e.preventDefault();
        try {
            const result = await axios.get("http://localhost:5050/login");
            const access = result.data.find(val => loggedUser.email === val.email && loggedUser.password === val.newPassword);
            if (access) {
                Dispatch(add_user(access));
                Navigate("/");
            }
        }
        catch (error) {
            console.log(error);
        }
    };



    return (
        <div className="bg-zinc-400 h-screen flex items-center justify-center w-full " >
            <form className="flex flex-col items-center space-y-4 w-full md:w-1/2 lg:w-1/3 " >
                <input className="h-8 shadow-inner	rounded text-center  " type="email" placeholder="Email Address" onChange={loginHandler} name="email" value={loggedUser.email} />
                <input className="h-8 shadow-inner	rounded text-center  " type="password" placeholder="Password" onChange={loginHandler} name="password" value={loggedUser.password} />
                <button className="bg-slate-600 border-2 shadow-md border-white-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 hover:border-double hover:text-lg " onClick={UserLogin} >Login</button>
                <button className="bg-slate-600 border-2 shadow-md border-white-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 hover:border-double hover:text-lg " onClick={() => Navigate("/signup")} >New User? Signup</button >
            </form>
        </div >
    )
}
export default LoginPage;

