import express from "express";
import { Author } from "./models/users.js";

export const userRouter = express.Router();

userRouter.get("/test", async (req, res) => {
  try {
    let authors = await Author.find();
    res.send(authors);
  } catch (error) {
    next(error);
  }
});

userRouter.get("/:id", async (req, res) => {
  try {
    let author = await Author.findById(req.params.id);
    res.send(author);
  } catch (error) {
    next(error);
  }
});

userRouter.put("/:id", async (req, res) => {
  try {
    let author = await Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(author);
  } catch (error) {
    next(error);
  }
});

userRouter.delete("/:id", async (req, res) => {
  try {
    await Author.deleteOne({
      _id: req.params.id,
    });
    res.send(204);
  } catch (error) {
    next(error);
  }
});

userRouter.post("/", async (req, res) => {
  try {
    let author = await Author.create(req.body);
    res.send(author);
  } catch (error) {
    next(error);
  }
});
