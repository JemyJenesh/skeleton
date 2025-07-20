import z from "zod";

export const thingSchema = z.object({
  id: z.string(),

  name: z.string(),
  description: z.string().optional(),
  age: z.number().optional(),
  dateOfOrigin: z.string().pipe(z.coerce.date()),
  state: z.enum(["Solid", "Liquid", "Gas"]),

  createdAt: z.date(),
  updatedAt: z.date(),
});

export const thingCreateInputSchema = thingSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const thingUpdateInputSchema = thingSchema
  .partial({
    name: true,
    description: true,
    age: true,
    dateOfOrigin: true,
    state: true,
    createdAt: true,
    updatedAt: true,
  })
  .required({
    id: true,
  });

export type Thing = z.infer<typeof thingSchema>;
export type ThingCreateInput = z.infer<typeof thingCreateInputSchema>;
export type ThingUpdateInput = z.infer<typeof thingUpdateInputSchema>;
