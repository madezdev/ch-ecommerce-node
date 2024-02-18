import { Router } from "express";
import { DeleteProduct, GetProduct, PostProduct, PutProduct } from "../controllers/product.js";

const router = Router();

router.get("/", GetProduct);

router.post("/", PostProduct );

router.put("/:pid", PutProduct);

router.delete("/", DeleteProduct);

export default router;
