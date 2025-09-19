import "./App.css";
import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import ProtectedRoute from "./Component/ProtectedRoute";
import Register from "./Pages/Register";


function App() {
   return (
    <div>
      <Router>
       {<Navbar />} 
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<ProtectedRoute><Products/></ProtectedRoute>} />
          <Route path="/cart" element={<ProtectedRoute><Cart/></ProtectedRoute>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
