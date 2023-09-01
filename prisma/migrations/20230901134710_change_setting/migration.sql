/*
  Warnings:

  - You are about to drop the column `createdAt` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `ordered_books` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `ordered_books` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `review` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `orders` table. All the data in the column will be lost.
  - The `role` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `status` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RoleEnum" AS ENUM ('admin', 'customer');

-- CreateEnum
CREATE TYPE "OrderEnum" AS ENUM ('pending', 'shipped', 'delivered');

-- AlterTable
ALTER TABLE "categories" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "ordered_books" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "rating",
DROP COLUMN "review",
DROP COLUMN "updatedAt",
ADD COLUMN     "status" "OrderEnum" NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "role",
ADD COLUMN     "role" "RoleEnum" NOT NULL DEFAULT 'customer';

-- DropEnum
DROP TYPE "Role";
