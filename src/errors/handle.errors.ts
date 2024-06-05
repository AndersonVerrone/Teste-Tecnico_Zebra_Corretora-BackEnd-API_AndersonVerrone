import { NextFunction, Request, Response } from "express";
import { appErrors } from "./app.errors";

const handleErrors = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof appErrors) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  };

  return res.status(500).json({
    message: "Internal Server Error",
  });
};

export { handleErrors };
