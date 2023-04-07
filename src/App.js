import "./app.css"
import Navbar from "./components/Navbar/Navbar";
import ProductNav from "./components/ProductNav/ProductNav";
import Photoslider from "./components/Photoslider/Photoslider";
function App() {
  return (
    <div className="child" >
      <Navbar />
      <ProductNav />
      <Photoslider />
    </div>
  )
}

export default App;
