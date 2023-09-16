import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pay from "./components/Pay";
import Success from "./components/Success";
import Cancel from "./components/Cancel";

// import Home from "./pages/Home";
// import ProductList from "./pages/ProductList";
// import UnitProduct from "./pages/UnitProduct";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Cart from "./pages/Cart";

function App() {
  return (
    // <>
    //   {/* <Home /> */}
    //   {/* <ProductList /> */}
    //   {/* <UnitProduct /> */}
    //   {/* <Register /> */}
    //   {/* <Login /> */}
    //   <Cart />
    // </>
    <BrowserRouter>
      <Routes>
        <Route path="/pay" element={<Pay />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
