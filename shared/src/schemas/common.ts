import z from "zod";

export const resultSchema = z.object({
  ok: z.boolean(),
});

export type Result = z.infer<typeof resultSchema>;
