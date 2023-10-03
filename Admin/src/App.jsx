import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";
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
  const admin = useSelector((state) => state.user.currentUser.isAdmin);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {admin && (
          <>
            {/* <Route path="/*" element={<Dashboard />}> */}
            <Route path="/*" element={<Home />}>
              <Route path="" element={<Topbar />} />
              <Route path="" element={<Sidebar />} />
              <Route path="users" element={<UserList />} />

              <Route path="user/:userId" element={<User />} />

              <Route path="newUser" element={<NewUser />} />

              <Route path="products" element={<ProductList />} />

              <Route path="product/:productId" element={<Product />} />

              <Route path="newProduct" element={<NewProduct />} />
            </Route>
            {/* </Route> */}
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
