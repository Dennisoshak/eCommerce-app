import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Row, Col, Form, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import "../index.css";

const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { ShippingAddress } = cart;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [address, setAddress] = useState(ShippingAddress.address);
  const [city, setCity] = useState(ShippingAddress.city);
  const [postalCode, setPostalCode] = useState(ShippingAddress.postalCode);
  const [country, setCountry] = useState(ShippingAddress.country);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
  };
  return (
    <Form className="shipping" onSubmit={submitHandler}>
      <h1>Shipping</h1>
      <Form.Group controlId="address">
        <Form.Label>address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter address"
          value={address}
          required
          onChange={(e) => setAddress(e.target.value)}></Form.Control>
      </Form.Group>
      <Form.Group controlId="city">
        <Form.Label>city</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter city"
          value={city}
          required
          onChange={(e) => setCity(e.target.value)}></Form.Control>
      </Form.Group>
      <Form.Group controlId="postalCode">
        <Form.Label>postalCode</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter postal code"
          value={postalCode}
          required
          onChange={(e) => setPostalCode(e.target.value)}></Form.Control>
      </Form.Group>
      <Form.Group controlId="country">
        <Form.Label>country</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter country"
          value={country}
          required
          onChange={(e) => setCountry(e.target.value)}></Form.Control>
      </Form.Group>
      <Button className="mt-4" type="submit" variant="primary">
        Continue
      </Button>
    </Form>
  );
};

export default ShippingScreen;
