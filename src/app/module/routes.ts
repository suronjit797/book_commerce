import express from "express";

const router = express.Router();

router.use("/", (req, res, next) => res.send({ message: "routing" }));

export default router;
