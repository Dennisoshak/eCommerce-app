import React from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import HomeScreen from "./screens/HomeScreen.js";
import CartScreen from "./screens/CartScreen.js";
import ProductScreen from "./screens/ProductScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/cart/:id?" element={<CartScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
