import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import { useSelector } from "react-redux";
import Topbar from "./components/topbar/Topbar";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Home from "./pages/home/Home";

function App() {
  const admin = true;
  // const admin = useSelector((state) => state.user.currentUser.isAdmin);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Topbar />} />
        {admin && (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/newProduct" element={<NewProduct />} />
          </>
        )}
      </Routes>

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<UnitProduct />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
