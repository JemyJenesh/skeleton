import { Express } from "express";
import { thingRouter } from "./features/thing/thing.routes";

export const routes = (app: Express) => {
  app.use("/things", thingRouter);
};
