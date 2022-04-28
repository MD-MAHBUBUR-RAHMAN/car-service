import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import About from "./Pages/About/About";
import AddService from "./Pages/AddService/AddService";
import Checkout from "./Pages/Checkout/Checkout/Checkout";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Requireauth from "./Pages/Login/Requireauth/Requireauth";
import ManageServices from "./Pages/ManageServices/ManageServices";
import Order from "./Pages/Order/Order";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import NotFound from "./Pages/Shared/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/service/:serviceId" element={<ServiceDetail />}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/checkout/:serviceId"
          element={
            <Requireauth>
              <Checkout />
            </Requireauth>
          }
        ></Route>
        <Route
          path="/addservice"
          element={
            <Requireauth>
              <AddService />
            </Requireauth>
          }
        ></Route>
        <Route
          path="/manage"
          element={
            <Requireauth>
              <ManageServices />
            </Requireauth>
          }
        ></Route>
        <Route
          path="/orders"
          element={
            <Requireauth>
              <Order />
            </Requireauth>
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
