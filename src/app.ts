import express from "express";
import { statesRouter } from "./routers";
import { handleErrors } from "./errors";

const app = express();

app.use(express.json());

app.use("/states", statesRouter);

app.use(handleErrors);

export default app;
