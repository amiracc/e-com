import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, ProductDetails } from "./pages";
import { Header } from "./components";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
