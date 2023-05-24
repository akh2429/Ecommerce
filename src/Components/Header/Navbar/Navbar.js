import { Link } from "react-router-dom";
import { GiShoppingCart } from 'react-icons/gi';
import { FiLogIn } from 'react-icons/fi';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const auth = localStorage.getItem("user");
    const Navigate = useNavigate();

    function logout() {
        localStorage.clear();
        Navigate("/login");
        Swal.fire({ title: 'Success', text: `Successfully Logged Out`, icon: 'success', confirmButtonText: 'Ok' });
    }

    return (
        <nav className="  flex gap-4 justify-around bg-yellow-400 p-5 text-4xl font-extrabold shadow-md 
        border-white-600 rounded-sm lg:text-2xl md:text-lg md:p-3 sm:text-sm sm:p-3 items-center vsm:text-sm flex-nowrap text-shadow vsm:gap-0 vsm:p-2  ">

            {/* Logo  */}

            <div >
                <Link to="/" className="font-bold text-red-600 shadow-md rounded-br-3xl border-2 border-white rounded-md p-2 sm:text-sm  vsm:text-xs  ">
                    @e-karT
                </Link>
            </div>

            {/* Search  */}

            <div className="flex gap-1 " >
                <AiOutlineFileSearch className="text-slate-100  text-4xl shadow-md border border-white rounded lg:text-2xl md:text-xl sm:text-2xl vsm:text-lg " />
                <input className="h-10 shadow-inner	rounded text-center border border-white lg:text-3xl lg:h-8 lg:w-80 md:text-xl md:h-6 md:w-56 sm:h-6 vsm:h-5 vsm:w-24 vsm:text-xs" placeholder="Search here..." />
            </div>

            {/* Login Cart */}

            <div className="flex gap-6 sm:hidden xs:hidden vsm:hidden "   >
                {auth ?
                    <Link onClick={logout} className="flex gap-1 " to={"/login"} >
                        <RiLogoutBoxLine className="text-slate-100 text-4xl shadow-md border border-white rounded lg:text-2xl md:text-xl " />
                        LOGOUT
                    </Link >
                    :
                    <Link className="flex gap-1 " to={"/login"} >
                        <FiLogIn className="text-slate-100 text-4xl shadow-md border border-white rounded lg:text-2xl md:text-xl " />
                        LOGIN
                    </Link >
                }
                <div>
                    <Link to={"/cartpage"} className="flex gap-1 " >
                        <GiShoppingCart className="text-slate-100 text-4xl shadow-md border border-white rounded lg:text-2xl md:text-xl " />
                        CART
                    </Link>
                </div>
            </div>

            {/* Hanburger Button */}

            <div className="relative md:hidden lg:hidden xl:hidden hover:text-xl" >
                <button className={isOpen ? "text-green-600" : "text-red-600"} onClick={() => setIsOpen(!isOpen)} ><GiHamburgerMenu /></button>
            </div>

            {/* Menu */}

            <div className={isOpen ? " z-10 flex flex-col justify-center items-center gap-7  absolute right-0  h-44 w-screen top-16 bg-yellow-400" : "hidden"}>
                {auth ?
                    <Link onClick={logout} className="flex gap-1 " to={"/login"} >
                        <RiLogoutBoxLine className="text-slate-100 text-4xl shadow-md border border-white rounded lg:text-2xl md:text-xl " />
                        LOGOUT
                    </Link >
                    :
                    <Link className="flex gap-1 " to={"/login"} >
                        <FiLogIn className="text-slate-100 text-4xl shadow-md border border-white rounded lg:text-2xl md:text-xl " />
                        LOGIN
                    </Link >
                }
                <div>
                    <Link to={"/cartpage"} className="flex gap-1 " >
                        <GiShoppingCart className="text-slate-100 text-4xl shadow-md border border-white rounded " />
                        CART
                    </Link>
                </div>
            </div>

        </nav >
    )
}

export default Navbar;
