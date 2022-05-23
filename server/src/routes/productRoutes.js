import express from "express";
const router = express.Router();
import {getProducts, getProductById} from '../contollers/productController.js'

// Fetch all products
router.route("/products").get(getProducts);

router.route("/products/:id").get(getProductById);

export default router;
