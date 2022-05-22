import express from "express";
import "dotenv/config";
import colors from 'colors';
import productsRouter from "./routes/productRoutes.js";
import connectDB from './config/db.js'
import {notFound, errorHandler} from './middleware/errorMidlleware.js'

connectDB()

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api", productsRouter);

<<<<<<< HEAD
app.use(notFound)

app.use(errorHandler)

app.listen(process.env.PORT, () => {
  console.log(`Server running on PORT ${process.env.PORT}`.yellow.bold);
=======
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on PORT ${process.env.PORT}`);
>>>>>>> 2d98b18e0edc75c39e6c3ada7e77e1a3668c75e5
});
