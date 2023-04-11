import "./app.css"
import Navbar from "./components/Navbar/Navbar/Navbar";
import ProductNav from "./components/Navbar/ProductNav/ProductNav";
import LandingPage from "./components/LandingPage/landingPage";
import Mobile from "./components/Productslanding/product";
import FinalCheckout from "./components/FinalCheckoutpage/finalcheckout";
function App() {
  return (
    <div className="child" >
      <Navbar />
      <ProductNav />
      <LandingPage />
      {/* <Mobile />
      <FinalCheckout /> */}
    </div>
  )
}

export default App;
