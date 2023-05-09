import { Link } from "react-router-dom";
import { GiShoppingCart } from 'react-icons/gi';
import { FiLogIn } from 'react-icons/fi';
import { AiOutlineFileSearch } from 'react-icons/ai';
function Navbar() {

    return (
        <nav className="  flex justify-around text-4xl p-5 bg-yellow-400 font-extrabold shadow-md border-white-600 rounded-sm "  >
            <div >
                <Link to="/" className="font-bold text-red-600 shadow-xl border-2 border-white rounded-md p-2 "  >
                    FlipKart
                </Link>
            </div>
            <div className="flex gap-1 " >
                <AiOutlineFileSearch className="text-slate-100  text-4xl shadow-md border border-white rounded " />
                <input className="h-10 shadow-inner	rounded text-center  border border-white " placeholder="Search here..." />
            </div>
            <div  >
                <Link className="flex gap-1 " to={"/login"} >
                    <FiLogIn className="text-slate-100 text-4xl shadow-md border border-white rounded " />
                    LOGIN
                </Link >
            </div>
            <div  >
                <Link className="flex gap-1 " >
                    <GiShoppingCart className="text-slate-100 text-4xl shadow-md border border-white rounded " />
                    CART
                </Link>
            </div>
        </nav >
    )
}

export default Navbar;
