import { checkIdExists } from "../middlewares";
import { stateControllers } from "../controllers";
import { Router } from "express";

const statesRouter: Router = Router();

statesRouter.get("", stateControllers.read);

statesRouter.get("/:stateId", checkIdExists, stateControllers.readById)

export { statesRouter };
