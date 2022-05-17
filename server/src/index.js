import express from "express";
import "dotenv/config";
import productsRouter from "./routes/productRoutes.js";

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api", productsRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running on PORT ${process.env.PORT}`);
});
