import "./app.css"
import Navbar from "./components/Navbar/Navbar/Navbar";
import ProductNav from "./components/Navbar/ProductNav/ProductNav";
import LandingPage from "./components/LandingPage/landingPage";
import Mobile from "./components/MobilePage/Mobile";
function App() {
  return (
    <div className="child" >
      {/* <Navbar />
      <ProductNav />
      <LandingPage /> */}
      <Mobile />
    </div>
  )
}

export default App;
