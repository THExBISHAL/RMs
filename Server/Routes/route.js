import express from "express";
import {
  allCounters,
  editCounter,
  saveCounter,
  todaysCounter,
} from "../Controller/controller.js";

const Router = express.Router();

Router.post("/api/counter", saveCounter);
Router.put("/api/counter", editCounter);
Router.get("/api/counter", todaysCounter);
Router.get("/api/counter/history", allCounters);

export default Router;
