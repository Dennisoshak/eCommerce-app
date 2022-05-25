import express from "express";
const router = express.Router();
import {getProducts, getProductById, createProductReview} from '../controllers/productController.js'
import { protect } from "../middleware/authMiddleware.js";

// Fetch all products

router.route("/products").get(getProducts);
router.route("/products/:id/reviews").post(protect, createProductReview);
router.route("/products/:id").get(getProductById);

export default router;
