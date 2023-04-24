import style from "./Navbar.module.css"
import { Link } from "react-router-dom";
import { useUserContext } from "../../../Components/GlobalState/UserContext";
function Navbar() {
    const { user, logoutUser } = useUserContext();
    return (
        <nav className={style.navbar} >
            <div className={style.logo}><Link to="/" >Logo</Link></div>
            <div className={style.searchbox} >Search Bar</div>
            <div className={style.login} >{user ? <div><h4>{`Welcome ${user.fullname}`}</h4><button onClick={logoutUser} >LOGOUT</button></div> : <Link to="/login" >LOGIN</Link>}</div>
            <div className={style.cart} >Cart</div>
        </nav>
    )
}

export default Navbar;