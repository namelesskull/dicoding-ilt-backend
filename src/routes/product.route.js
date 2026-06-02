import { Router } from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

import authorization from "../middlewares/authorization.js";

const router = Router();

router.get("/", authorization, getProducts);
router.get("/:id", getProductById);
router.post("/", authorization, createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
