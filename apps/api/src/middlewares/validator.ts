import { NextFunction, Request, Response } from "express";
import { ZodError, ZodSchema } from "zod";

type Schemas = {
  body?: ZodSchema;
  query?: ZodSchema;
  params?: ZodSchema;
};

export const validateRequestPayload =
  ({ body, query, params }: Schemas) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      if (body) body.parse(req.body);
      if (query) query.parse(req.query);
      if (params) params.parse(req.params);
    } catch (err) {
      if (err instanceof ZodError) {
        res.status(400).json({ message: "Validation failed", errors: err });
      }
      res.status(500);
    }
    next();
  };
