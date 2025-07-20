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
      if (body) req.body = body.parse(req.body);
      if (query) req.query = query.parse(req.query);
      if (params) req.params = params.parse(req.params);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        res
          .status(400)
          .json({ message: "Validation failed", errors: err.errors });
      }
      res.status(500);
    }
  };
