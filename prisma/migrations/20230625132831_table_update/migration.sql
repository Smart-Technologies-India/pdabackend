/*
  Warnings:

  - You are about to drop the column `stage` on the `common` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `common` DROP COLUMN `stage`,
    ADD COLUMN `form_type` ENUM('NONE', 'PETROLEUM', 'RTI', 'ZONE', 'DEMOLITION', 'OLDCOPY', 'LANDRECORDS', 'MAMLATDAR') NOT NULL DEFAULT 'NONE';
