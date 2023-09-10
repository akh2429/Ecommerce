import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from 'react-toastify';

function LoginPage() {
    const navigate = useNavigate();
    const auth = localStorage.getItem("user");
    const [loading, setLoading] = useState(false); // State variable for tracking loading state

    useEffect(() => {
        if (auth) {
            navigate("/");
        }
    }, [auth, navigate]);

    const formik = useFormik({
        initialValues: {
            email: "",
            newPassword: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email address").required("Required"),
            newPassword: Yup.string().required("Required"),
        }),
        onSubmit: async (values) => {
            try {
                setLoading(true); // Start the loading state
                const response = await axios.post(
                    "https://e-commerce-backend-qr89.onrender.com/login",
                    values
                );
                if (response.data.token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                    toast.success('Logged in Sucessfully');
                    navigate("/");
                } else {
                    toast.error(`${response.data.result}`);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false); // End the loading state
            }
        },
    });

    return (
        <div className="bg-emerald-100 h-screen flex items-center justify-center w-full">
            <form className="flex flex-col items-center space-y-4 w-full md:w-1/2 lg:w-1/3" onSubmit={formik.handleSubmit}>
                <span className="text-5xl font-extrabold md:text-sm lg:text-lg sm:text-sm vsm:text-xs">
                    Welcome to the Login page
                </span>
                <input
                    className="h-8 shadow-inner rounded text-center"
                    type="email"
                    placeholder="Email Address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    name="email"
                />
                {formik.touched.email && formik.errors.email && <p className="text-red-500">{formik.errors.email}</p>}
                <input
                    className="h-8 shadow-inner rounded text-center"
                    type="password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.newPassword}
                    name="newPassword"
                />
                {formik.touched.newPassword && formik.errors.newPassword && <p className="text-red-500">{formik.errors.newPassword}</p>}
                <button
                    className="bg-slate-600 border-2 shadow-md border-white-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 hover:border-double hover:text-lg"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Loading..." : "Login"}
                </button>
                <button
                    className="bg-slate-600 border-2 shadow-md border-white-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 hover:border-double hover:text-lg"
                    onClick={() => navigate("/signup")}
                >
                    New User? Signup
                </button>
            </form>
        </div>
    );
}

export default LoginPage;
