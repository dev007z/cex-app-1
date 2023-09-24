import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import CryptoScreen from "./components/CryptoScreen";
import PaymentDetails from "./components/PaymentDetails";
import NairaDetails from "./components/NairaDetails";
import CryptoDetails from "./components/CryptoDetails";
import Order from "./components/Order";
import AdminDashboard from "./components/AdminDashboard";

const App = () => {
  return (
    <Router>
    <div>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/crypto" element={<CryptoScreen />} />
          <Route path="/payment-details/:crypto" element={<PaymentDetails />} />
          <Route path="/naira-details/" element={<NairaDetails />} />
          <Route path="/crypto-details/" element={<CryptoDetails />} />
          <Route path="/order/:orderNumber" element={<Order />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
    </div>
    </Router>
  );
};

export default App;