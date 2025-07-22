import {
  filterSchema,
  thingCreateInputSchema,
  thingUpdateInputSchema,
} from "@repo/utils/schemas";
import { Router } from "express";
import { validateRequestPayload } from "../../middlewares/validator";
import { controller } from "./thing.controller";

const router = Router();

router.post(
  "/",
  validateRequestPayload({ body: thingCreateInputSchema }),
  controller.create
);

router.get(
  "/",
  validateRequestPayload({ query: filterSchema }),
  controller.getAll
);

router.get("/:id", controller.getOne);

router.put(
  "/",
  validateRequestPayload({ body: thingUpdateInputSchema }),
  controller.update
);

router.delete("/:id", controller.delete);

export const thingRouter: Router = router;
