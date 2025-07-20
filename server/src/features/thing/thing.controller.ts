import { Request, Response } from "express";
import { filterSchema } from "shared";
import { thingService } from "./thing.service";

export const controller = {
  create: async (req: Request, res: Response) => {
    try {
      const thing = await thingService.create(req.body);
      res.status(201).json(thing);
    } catch (error) {
      res.status(400).json({ error: "Failed to create thing" });
    }
  },
  delete: async (req: Request, res: Response) => {
    const deleted = await thingService.delete(req.params.id);
    if (deleted) {
      res.json({ message: `Thing with id ${req.params.id} deleted` });
    } else {
      res.status(404).json({ error: "Thing not found" });
    }
  },
  getAll: async (req: Request, res: Response) => {
    const things = await thingService.getAll(filterSchema.parse(req.query));
    res.json(things);
  },
  getOne: async (req: Request, res: Response) => {
    const thing = await thingService.getOne(req.params.id);
    if (thing) {
      res.json(thing);
    } else {
      res.status(404).json({ error: "Thing not found" });
    }
  },
  update: async (req: Request, res: Response) => {
    const updated = await thingService.update(req.body);
    if (updated) {
      res.json(updated);
    } else {
      res.status(404).json({ error: "Thing not found" });
    }
  },
};
