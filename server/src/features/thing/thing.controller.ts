import { Request, Response } from "express";
import { thingService } from "./thing.service";

export const controller = {
  create: (req: Request, res: Response) => {
    try {
      const thing = thingService.create(req.body);
      res.status(201).json(thing);
    } catch (error) {
      res.status(400).json({ error: "Failed to create thing" });
    }
  },
  delete: (req: Request, res: Response) => {
    const deleted = thingService.delete(req.params.id);
    if (deleted) {
      res.json({ message: `Thing with id ${req.params.id} deleted` });
    } else {
      res.status(404).json({ error: "Thing not found" });
    }
  },
  getAll: (req: Request, res: Response) => {
    const things = thingService.getAll();
    res.json(things);
  },
  getOne: (req: Request, res: Response) => {
    const thing = thingService.getOne(req.params.id);
    if (thing) {
      res.json(thing);
    } else {
      res.status(404).json({ error: "Thing not found" });
    }
  },
  update: (req: Request, res: Response) => {
    const updated = thingService.update(req.params.id, req.body);
    if (updated) {
      res.json(updated);
    } else {
      res.status(404).json({ error: "Thing not found" });
    }
  },
};
