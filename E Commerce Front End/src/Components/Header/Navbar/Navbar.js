import { Link } from "react-router-dom";
import { GiShoppingCart } from 'react-icons/gi';
import { FiLogIn } from 'react-icons/fi';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from "react";
function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="  flex gap-4 justify-around bg-yellow-400  p-5   text-4xl font-extrabold shadow-md border-white-600 rounded-sm "  >
            <div >
                <Link to="/" className="font-bold text-red-600 shadow-xl border-2 border-white rounded-md p-2 "  >
                    FlipKart
                </Link>
            </div>
            <div className="flex gap-1 " >
                <AiOutlineFileSearch className="text-slate-100  text-4xl shadow-md border border-white rounded " />
                <input className="h-10 shadow-inner	rounded text-center  border border-white " placeholder="Search here..." />
            </div>
            <div className="xl:flex gap-6 lg:hidden md:hidden sm:hidden xs:hidden "   >
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

            {/* Hanburger Button */}
            <div className="relative xl:hidden " >
                <button onClick={() => setIsOpen(!isOpen)} ><GiHamburgerMenu /></button>
            </div>

            {/* Menu */}

            <div className={isOpen ? "  absolute right-0  h-screen w-screen top-20 bg-slate-400" : "hidden"}>
                <div className=" h-56 w-56 bg-slate-400" >

                </div>
            </div>

        </nav >
    )
}

export default Navbar;
