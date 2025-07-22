-- CreateEnum
CREATE TYPE "State" AS ENUM ('Solid', 'Liquid', 'Gas');

-- CreateTable
CREATE TABLE "Thing" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "age" INTEGER,
    "dateOfOrigin" TIMESTAMP(3) NOT NULL,
    "state" "State" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Thing_pkey" PRIMARY KEY ("id")
);
