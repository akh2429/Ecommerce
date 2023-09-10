import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

function Signup() {
    const Navigate = useNavigate();
    const auth = localStorage.getItem("user");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (auth) {
            Navigate("/login");
            toast.error('You have already Signed Up');
        }
    }, [Navigate, auth]);

    const formik = useFormik({
        initialValues: {
            email: "",
            fullname: "",
            newPassword: "",
            repeatPassword: "",
            mobileNumber: "",
            fullAddress: "",
            pincode: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email address").required("Email is required"),
            fullname: Yup.string().required("Full Name is required"),
            newPassword: Yup.string().required("New Password is required"),
            repeatPassword: Yup.string()
                .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
                .required("Confirm Password is required"),
            mobileNumber: Yup.string().required("Mobile Number is required"),
            fullAddress: Yup.string().required("Full Address is required"),
            pincode: Yup.string().required("Pincode is required"),
        }),
        onSubmit: async (values) => {
            try {
                setLoading(true)
                const response = await axios.post("https://e-commerce-backend-qr89.onrender.com/register", values);
                if (response.data === "Signed Up sucessfully") {
                    formik.resetForm();
                    toast.success('Sucess fully signed Up');
                    Navigate("/login");
                }
            } catch (error) {
                console.log(error);
                if (error.response.data.message) {
                    const errorMessage = error.response.data.message;
                    const startIndex = errorMessage.indexOf(":") + 1;
                    const formattedErrorMessage = errorMessage.substring(startIndex).trim();
                    formik.setFieldError("email", formattedErrorMessage);
                } else if (error.response.data.ConfirmPassword) {
                    formik.setFieldError("repeatPassword", error.response.data.ConfirmPassword);
                }
            }
            finally {
                setLoading(false)
            }
        },
    });

    return (
        <div className="bg-emerald-100 h-max w-full flex items-center justify-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-col items-center space-y-4 w-full md:w-1/2 lg:w-1/3">
                <span className="text-5xl font-extrabold md:text-sm lg:text-lg sm:text-sm vsm:text-xs">Welcome to the Signup page</span>
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
                    type="text"
                    placeholder="Full Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullname}
                    name="fullname"
                />
                {formik.touched.fullname && formik.errors.fullname && <p className="text-red-500">{formik.errors.fullname}</p>}
                <input
                    className="h-8 shadow-inner rounded text-center"
                    type="password"
                    placeholder="Set New Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.newPassword}
                    name="newPassword"
                />
                {formik.touched.newPassword && formik.errors.newPassword && <p className="text-red-500">{formik.errors.newPassword}</p>}
                <input
                    className="h-8 shadow-inner rounded text-center"
                    type="password"
                    placeholder="Confirm Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.repeatPassword}
                    name="repeatPassword"
                />
                {formik.touched.repeatPassword && formik.errors.repeatPassword && <p className="text-red-500">{formik.errors.repeatPassword}</p>}
                <input
                    className="h-8 shadow-inner rounded text-center"
                    type="number"
                    placeholder="Mobile Number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.mobileNumber}
                    name="mobileNumber"
                />
                {formik.touched.mobileNumber && formik.errors.mobileNumber && <p className="text-red-500">{formik.errors.mobileNumber}</p>}
                <input
                    className="h-8 shadow-inner rounded text-center"
                    type="text"
                    placeholder="Full Address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullAddress}
                    name="fullAddress"
                />
                {formik.touched.fullAddress && formik.errors.fullAddress && <p className="text-red-500">{formik.errors.fullAddress}</p>}
                <input
                    className="h-8 shadow-inner rounded text-center"
                    type="number"
                    placeholder="Pincode"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.pincode}
                    name="pincode"
                />
                {formik.touched.pincode && formik.errors.pincode && <p className="text-red-500">{formik.errors.pincode}</p>}
                <button className="bg-slate-600 border-2 shadow-md border-white-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 hover:border-double hover:text-lg" type="submit">{loading === true ? "Wait Signing Up..." : "Sign Up"}</button>
                <button className="bg-slate-600 border-2 shadow-md border-white-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 hover:border-double hover:text-lg" onClick={() => Navigate("/login")}> Back to Login</button>
            </form>
        </div>
    );
}

export default Signup;
