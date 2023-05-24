import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Swal from 'sweetalert2';
import { useEffect } from "react";

function LoginPage() {
    const Navigate = useNavigate();
    const auth = localStorage.getItem("user")
    const [loggedUser, setloggedUser] = useState({ email: '', newPassword: '' });

    useEffect(() => {
        if (auth) {
            Navigate("/");
        }
    }, [auth, Navigate])


    function loginHandler(e) {
        const { name, value } = e.target;
        setloggedUser({ ...loggedUser, [name]: value });
    };

    async function UserLogin(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5050/login", loggedUser);
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
                Swal.fire({ title: 'Welcome', text: 'Sucessfully Logged In', icon: 'success', confirmButtonText: 'Ok' });
                Navigate("/")
            }
            else {
                Swal.fire({ title: 'Invalid Credentials', text: `${response.data.result}`, icon: 'error', confirmButtonText: 'Ok' });
            }
        }
        catch (error) {
            console.log(error);
        }
    };



    return (
        <div className="bg-emerald-100 h-screen flex items-center justify-center w-fullpm">
            <form className="flex flex-col items-center space-y-4 w-full md:w-1/2 lg:w-1/3 " >
                <input className="h-8 shadow-inner	rounded text-center  " type="email" placeholder="Email Address" onChange={loginHandler} name="email" value={loggedUser.email} />
                <input className="h-8 shadow-inner	rounded text-center  " type="password" placeholder="Password" onChange={loginHandler} name="newPassword" value={loggedUser.newPassword} />
                <button className="bg-slate-600 border-2 shadow-md border-white-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 hover:border-double hover:text-lg " onClick={UserLogin} >Login</button>
                <button className="bg-slate-600 border-2 shadow-md border-white-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 hover:border-double hover:text-lg " onClick={() => Navigate("/signup")} >New User? Signup</button >
            </form>
        </div >
    )
}
export default LoginPage;

