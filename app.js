import express from "express";
import productRouter from "./src/routes/product.route.js";

const PORT = 8000;
const app = express();

app.use(express.json());

app.use("/products", productRouter);

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
