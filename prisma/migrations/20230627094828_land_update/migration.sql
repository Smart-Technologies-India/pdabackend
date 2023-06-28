/*
  Warnings:

  - You are about to drop the column `userId` on the `land_section_form` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `land_section_form` DROP FOREIGN KEY `land_section_form_userId_fkey`;

-- AlterTable
ALTER TABLE `land_section_form` DROP COLUMN `userId`;
