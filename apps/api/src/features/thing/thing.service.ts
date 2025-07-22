import { PrismaClient } from "@prisma/client";
import {
  Filter,
  ThingCreateInput,
  ThingUpdateInput,
} from "@repo/utils/schemas";

const prisma = new PrismaClient();

export const thingService = {
  create: async (data: ThingCreateInput) => {
    return await prisma.thing.create({
      data,
    });
  },

  delete: async (id: string) => {
    return await prisma.thing.delete({ where: { id } });
  },

  getAll: async (filters: Filter) => {
    const { page, pageSize } = filters;
    const skip = (page - 1) * pageSize;

    const [things, totalCount] = await Promise.all([
      prisma.thing.findMany({
        skip,
        take: pageSize,
      }),
      prisma.thing.count(),
    ]);

    const totalPages = Math.ceil(totalCount / pageSize);

    return {
      data: things,
      meta: {
        page,
        pageSize,
        totalCount,
        totalPages,
      },
    };
  },

  getOne: async (id: string) => {
    return await prisma.thing.findUnique({ where: { id } });
  },

  update: async (data: ThingUpdateInput) => {
    return await prisma.thing.update({
      where: { id: data.id },
      data,
    });
  },
};
