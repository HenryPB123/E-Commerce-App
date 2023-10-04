import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Topbar from "./components/topbar/Topbar";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const admin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).currentUser.isAdmin;

  console.log("admin", admin);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      {admin && (
        <>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<UserList />} />

              <Route path="/newUser" element={<NewUser />} />

              <Route path="/products" element={<ProductList />} />
              <Route path="/newProduct" element={<NewProduct />} />
              <Route path="/user/:userId" element={<User />} />

              <Route path="/product/:productId" element={<Product />} />
            </Routes>
          </div>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
