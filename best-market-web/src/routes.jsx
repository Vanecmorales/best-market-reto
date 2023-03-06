import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Promotions from "./views/Promotions";
import ShoppingCar from "./views/ShoppingCar";
import Categories from "./components/Categories";



const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/shoppingCar" element={<ShoppingCar/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/promotions" element={<Promotions/>} />        
      </Routes>
    </div>
  );
};

export default AppRoutes;
