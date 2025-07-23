import { Router } from "express";
import { thingRouter } from "./features/thing/thing.routes";

export const router: Router = Router();

router.use("/things", thingRouter);
