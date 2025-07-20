import { Router } from "express";
import { thingSchema } from "shared";
import { validateRequestPayload } from "../../middlewares/validator";
import { controller } from "./thing.controller";

const router = Router();

router.post(
  "/",
  validateRequestPayload({ body: thingSchema }),
  controller.create
);
router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.put(
  "/:id",
  validateRequestPayload({ body: thingSchema }),
  controller.update
);
router.delete("/:id", controller.delete);

export const thingRouter = router;
