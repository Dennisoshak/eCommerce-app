import express from "express";
import "dotenv/config";
import colors from "colors";
import productsRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoute.js";
import orderRouter from "./routes/orderRoutes.js";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMidlleware.js";

connectDB();

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productsRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

app.use(notFound);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server running on PORT ${process.env.PORT}`.yellow.bold);
});
