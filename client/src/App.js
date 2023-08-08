import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Home from "./components/Home";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Deposit from "./components/dashboard/Deposit";
import Settings from "./components/dashboard/Settings";
import Referrals from "./components/dashboard/Referrals";
import Promo from "./components/dashboard/Promo";
import UserInvestment from "./components/dashboard/UserInvestment";
import ConfirmDeposit from "./components/dashboard/ConfirmDeposit";
import User from "./components/dashboard/User";
import EditProfile from "./components/dashboard/EditProfile";
import DepositForm from "./components/DepositForm";
import UserDeposits from "./pages/UserDeposits";
import SingleUserDeposits from "./pages/SingleUserDeposits";
import Bar from "./components/Bar";
import Withdraw from "./components/dashboard/Withdraw";

function App() {
  // axios.defaults.baseURL = 'http://localhost:5000';
  axios.defaults.withCredentials = true;

  return (
    <Suspense fallback={null}>
      <Router>
        <div className="container">
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route exact path="/deposit" element={<Deposit />}>
              {" "}
              {Deposit}{" "}
            </Route>
            <Route exact path="/promo" element={<Promo />}>
              {" "}
              {Promo}{" "}
            </Route>
            <Route exact path="/settings" element={<Settings />}>
              {" "}
              {Settings}{" "}
            </Route>
            <Route exact path="/edit-profile" element={<EditProfile />}>
              {" "}
              {EditProfile}{" "}
            </Route>
            <Route exact path="/referrals" element={<Referrals />}>
              {" "}
              {Referrals}{" "}
            </Route>
            <Route exact path="/user" element={<User />}>
              {" "}
              {User}{" "}
            </Route>
            <Route exact path="/my-investment" element={<UserInvestment />}>
              {" "}
              {UserInvestment}{" "}
            </Route>
            <Route exact path="/withdraw" element={<Withdraw />}>
              {" "}
              {Withdraw}{" "}
            </Route>
            <Route exact path="/confirm-deposit" element={<ConfirmDeposit />}>
              {" "}
              {ConfirmDeposit}{" "}
            </Route>
            <Route exact path="/deposit-form" element={<DepositForm />}>
              {" "}
              {DepositForm}{" "}
            </Route>
            <Route exact path="/users-deposits" element={<UserDeposits />}>
              {" "}
              {UserDeposits}{" "}
            </Route>
            <Route
              exact
              path="/single-user-deposits"
              element={<SingleUserDeposits />}
            >
              {" "}
              {SingleUserDeposits}{" "}
            </Route>
            <Route exact path="/bars" element={<Bar />}>
              {" "}
              {Bar}{" "}
            </Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
      {/* <Footer /> */}
    </Suspense>
  );
}

export default App;
