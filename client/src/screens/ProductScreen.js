import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
function ProductScreen({ match }) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function getProduct() {
      const { data } = await axios.get(`/api/products/${match.params.id}`);
      setProduct(data);
    }
    getProduct();
  }, []);
  return <div>Product Screen</div>;
}

export default ProductScreen;
