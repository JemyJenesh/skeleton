import { Thing, ThingCreateInput, ThingUpdateInput } from "shared";

let things: Thing[] = [];

export const thingService = {
  create: (data: ThingCreateInput): Thing => {
    const newThing: Thing = {
      id: Date.now().toString(),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    things.push(newThing);
    return newThing;
  },

  delete: (id: string): boolean => {
    const index = things.findIndex((thing) => thing.id === id);
    if (index === -1) return false;
    things.splice(index, 1);
    return true;
  },

  getAll: (): Thing[] => {
    return things;
  },

  getOne: (id: string): Thing | undefined => {
    return things.find((thing) => thing.id === id);
  },

  update: (id: string, data: ThingUpdateInput): Thing | undefined => {
    const index = things.findIndex((thing) => thing.id === id);
    if (index === -1) return undefined;
    things[index] = { ...things[index], ...data };
    return things[index];
  },
};
