import "./app.css";
import Navbar from "./Components/Header/Navbar/Navbar";
import LandingPage from "./Pages/LandingPage/landingPage";
import ProductLanding from "./Pages/Productslanding/product";
import FinalCheckout from "./Pages/FinalCheckoutpage/finalcheckout";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/Login";
import { Provider } from "react-redux";
import store from "./Components/Redux/Store";
import Signup from "./Pages/Signup page/Signupage";
function App() {
  return (
    <Provider store={store} >
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/finalCheckout" element={<FinalCheckout />} />
        <Route path="/ProductLanding" element={<ProductLanding />} />
      </Routes >
    </Provider>
  )
}

export default App;
