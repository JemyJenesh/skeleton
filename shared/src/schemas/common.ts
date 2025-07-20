import z from "zod";

export const paginationSchema = z.object({
  currentPage: z.number(),
  perPage: z.number(),
  totalPage: z.number(),
});

export type Pagination = z.infer<typeof paginationSchema>;
