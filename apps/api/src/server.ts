import cors from "cors";
import express, { type Express } from "express";
import { errorHandler } from "./middlewares/errorhandler";
import { routes } from "./routes";

export const createServer = (): Express => {
  const app = express();
  app
    .use(express.json())
    .use(cors())
    .get("/", (_, res) => {
      return res.json({ ok: false });
    });

  routes(app);
  app.use(errorHandler);

  return app;
};
