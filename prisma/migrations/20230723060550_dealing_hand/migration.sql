/*
  Warnings:

  - You are about to alter the column `file_type` on the `dealing_hand` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(24))`.

*/
-- AlterTable
ALTER TABLE `dealing_hand` MODIFY `file_type` ENUM('NONE', 'PETROLEUM', 'RTI', 'ZONE', 'DEMOLITION', 'OLDCOPY', 'LANDRECORDS', 'UNAUTHORISED') NOT NULL DEFAULT 'NONE';
