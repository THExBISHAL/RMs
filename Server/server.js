import express from "express";
import { Connection } from "./Database/db.js";
import dotenv from "dotenv";
import cors from "cors";
import { saveCounter } from "./Controller/controller.js";
import Router from "./Routes/route.js";

dotenv.config();
const PORT =process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "https://rmsbishal.onrender.com",
    methods: ["GET", "PUT", "POST"],
    credentials: true,
  })
);
app.use("/", Router);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
Connection(USERNAME, PASSWORD);
