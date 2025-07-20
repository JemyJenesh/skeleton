import z from "zod";

export const thingSchema = z.object({
  id: z.string(),

  name: z.string(),
  description: z.string().optional(),
  age: z.number().optional(),
  dateOfOrigin: z.date(),

  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Thing = z.infer<typeof thingSchema>;
export type ThingCreateInput = Omit<Thing, "id" | "createdAt" | "updatedAt">;
export type ThingUpdateInput = { id: string } & Partial<ThingCreateInput>;
