import "./app.css";
import ProductNav from "./components/Header/ProductNav/ProductNav";
import Navbar from "./components/Header/Navbar/Navbar";
import LandingPage from "./components/LandingPage/landingPage";
import ProductLanding from "./components/Productslanding/product";
import FinalCheckout from "./components/FinalCheckoutpage/finalcheckout";
function App() {
  return (
    <div className="child" >
      <Navbar />
      <ProductNav />
      {/* <LandingPage /> */}
      <ProductLanding />
      {/* <FinalCheckout /> */}
    </div>
  )
}

export default App;
