import "./app.css";
import ProductNav from "./Pages/Header/ProductNav/ProductNav";
import Navbar from "./Pages/Header/Navbar/Navbar";
import LandingPage from "./Pages/LandingPage/landingPage";
import ProductLanding from "./Pages/Productslanding/product";
import FinalCheckout from "./Pages/FinalCheckoutpage/finalcheckout";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/Login";
import { UserProvider } from "./Components/GlobalState/UserContext";
function App() {
  return (
    <UserProvider>
      <Navbar />
      <ProductNav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <ProductLanding /> */}
        {/* <FinalCheckout /> */}
      </Routes >
    </UserProvider>
  )
}

export default App;
