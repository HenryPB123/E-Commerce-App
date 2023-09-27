import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pay from "./components/Pay";
import Cancel from "./components/Cancel";

import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import UnitProduct from "./pages/UnitProduct";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";

function App() {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<UnitProduct />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        {/* <Route path="/pay" element={<Pay />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
