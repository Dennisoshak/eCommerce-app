import express from "express";
const router = express.Router();
<<<<<<< HEAD
import {getProducts, getProductById, createProductReview} from '../controllers/productController.js'
import { protect } from "../middleware/authMiddleware.js";

// Fetch all products

router.route("/products").get(getProducts);
router.route("/products/:id/reviews").post(protect, createProductReview);
router.route("/products/:id").get(getProductById);

=======
import { protect, admin } from "../middleware/authMiddleware.js";
import {
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
} from "../controllers/productController.js";

// Fetch all products
router.route("/").get(getProducts).post(protect, admin, createProduct);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);
>>>>>>> 834d7a531fa660f34d000d38d279a4d201e09117
export default router;
