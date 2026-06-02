/*
  Warnings:

  - You are about to drop the column `update` on the `Products` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "update",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "Products_pkey" PRIMARY KEY ("id");

-- DropIndex
DROP INDEX "Products_id_key";
