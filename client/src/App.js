import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Product from "./pages/Product/Product";
import Register from "./pages/Register/Register";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Cart from "./pages/Cart/Cart";

const App = () => {
  return (
    <div className="App">
      <Cart />
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/Product" element={<Product />} />
    //   </Routes>
    // </BrowserRouter>
  );
};

export default App;
