import cors from "cors";
import express, { type Express } from "express";
import { errorHandler } from "./middlewares/errorhandler";
import { router } from "./router";

export const createServer = (): Express => {
  const app = express();
  app
    .use(express.json())
    .use(cors())
    .get("/", (_, res) => {
      return res.json({ ok: false });
    });

  app.use("/api", router);
  app.use(errorHandler);

  return app;
};
