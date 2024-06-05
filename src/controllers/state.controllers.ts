import { Request, Response } from "express";
import { IStateResponse } from "../interfaces";
import { statesServices } from "../services";

const read = (req: Request, res: Response): Response => {
  const states: IStateResponse[] = statesServices.read();

  return res.status(200).json(states);
};

const readById = (req: Request, res: Response): Response => {
  const { stateId } = res.locals;

  const stateById = statesServices.readById(parseInt(stateId));

  return res.status(200).json(stateById);
};

export default { read, readById };
