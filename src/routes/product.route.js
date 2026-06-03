import { Router } from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

import auth from "../middleware/auth.js";

const router = Router();

router.get("/", auth, getProducts);
router.get("/:id", getProductById);
router.post("/", auth, createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
