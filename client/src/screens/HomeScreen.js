import React from "react";
import products from "../products";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Row sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Row>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
