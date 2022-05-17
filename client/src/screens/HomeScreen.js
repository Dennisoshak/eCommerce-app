import axios from "axios";
import React, { useState, useEffect } from "react";
// import products from "../products";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const { data } = await axios.get("api/products");
      setProducts(data);
    }
    getProducts();
  }, []);
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Row sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Row>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
