import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Cart from "./pages/Cart";
import CreatorDashboard from "./pages/CreatorDashboard";
import Home from "./pages/Home";
import OrderManagement from "./pages/OrderManagement";
import Orders from "./pages/Orders";
import ProductDetails from "./pages/ProductDetails";
import ProductForm from "./pages/ProductForm";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <BrowserRouter>

      <div style={{ padding: "20px" }}>

        <h1>E-Commerce Website</h1>

        <nav>
          <Link to="/">Login</Link> |{" "}
          <Link to="/register">Register</Link> |{" "}
          <Link to="/forgot-password">Forgot Password</Link> |{" "}
          <Link to="/home">Home</Link> |{" "}
          <Link to="/dashboard">Dashboard</Link> |{" "}
          <Link to="/product-form">Product Form</Link> |{" "}
          <Link to="/products">Products</Link> |{" "}
          <Link to="/cart">Cart</Link> |{" "}
          <Link to="/wishlist">Wishlist</Link> |{" "}
          <Link to="/orders">Orders</Link> |{" "}
          <Link to="/order-management">Order Management</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<CreatorDashboard />} />
          <Route path="/product-form" element={<ProductForm />} />
          <Route path="/products" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/orders" element={<Orders />} />
          <Route
            path="/order-management"
            element={<OrderManagement />}
          />
        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;