import { getStatesData } from "../data";
import { appErrors } from "../errors";
import { NextFunction, Request, Response } from "express";
import { IStateResponse } from "../interfaces";

const checkIdExists = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { stateId } = req.params;
  const statesReturn = getStatesData();

  const findState: IStateResponse[] = statesReturn.filter(
    (state) => state.id === parseInt(stateId)
  );

  if (findState.length === 0) {
    throw new appErrors("No state found", 404);
  }

  res.locals.stateId = stateId;
  next();
};

export { checkIdExists };
