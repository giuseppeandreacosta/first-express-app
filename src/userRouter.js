import express from "express";
import { User } from "./models/users";

const userRouter = express.Router();

userRouter.get("/test", async (req, res) => {
  res.json({ message: "User router working" });
});


userRouter.get("/")