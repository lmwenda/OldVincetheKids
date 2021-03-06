import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";

// Initializations

dotenv.config();
const app = express();
const port = 5000;

// Database Connection 

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to Database.")
);

// Middlewares

app.use(cors());
app.use(bodyParser());
app.use(express.json());

// Route Middlewares
import UserRoutes from "./Routes/UserRoutes.js";

app.use("/api/users", UserRoutes);

// Listening
app.listen(port, () => console.log(`Server running on http://localhost:${port}/`))