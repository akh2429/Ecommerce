import { Link } from "react-router-dom";
import { GiShoppingCart } from 'react-icons/gi';
import { FiLogIn } from 'react-icons/fi';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const auth = localStorage.getItem("user");
    const Navigate = useNavigate();

    function logout() {
        localStorage.clear()
        Navigate("/login")
    }

    return (
        <nav className="  flex gap-4 justify-around bg-yellow-400 p-5 text-4xl font-extrabold shadow-md 
        border-white-600 rounded-sm lg:text-2xl md:text-xl sm:text-sm items-center vsm:text-lg flex-nowrap text-shadow ">

            {/* Logo  */}

            <div >
                <Link to="/" className="font-bold text-red-600 shadow-md border-2 border-white rounded-md p-2 sm:text-xl ">
                    FlipKart
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
                    <Link className="flex gap-1 " >
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

            <div className={isOpen ? " flex flex-col justify-center items-center gap-7  absolute right-0  h-44 w-screen top-16 bg-yellow-400" : "hidden"}>
                <div>
                    <Link className="flex gap-1 " to={"/login"} >
                        <FiLogIn className="text-slate-100 text-4xl shadow-md border border-white rounded " />
                        LOGIN
                    </Link >
                </div>
                <div>
                    <Link className="flex gap-1 " >
                        <GiShoppingCart className="text-slate-100 text-4xl shadow-md border border-white rounded " />
                        CART
                    </Link>
                </div>
            </div>

        </nav >
    )
}

export default Navbar;
