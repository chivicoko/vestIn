import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Orders from "./components/Orders";
import Tracking from "./components/Tracking";

function App() {
  // axios.defaults.baseURL = 'http://localhost:5000';
  // axios.defaults.withCredentials = true;

  return (
    <Suspense fallback={null}>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/vestIn" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/tracking" element={<Tracking />} />
          </Routes>
        </div>
      </Router>
      {/* <ToastContainer /> */}
      <Footer />
    </Suspense>
  );
}

export default App;
