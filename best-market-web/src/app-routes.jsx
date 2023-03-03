import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Promotions from "./views/Promotions";
import ShoppingCart from "./views/ShoppingCart";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/promotions" element={<Promotions/>} />
        <Route path="/shoppingCart" element={<ShoppingCart/>} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
