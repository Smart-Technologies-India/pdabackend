/*
  Warnings:

  - The values [UNAuTHORISED] on the enum `common_form_type` will be removed. If these variants are still used in the database, this will fail.
  - The values [UNAuTHORISED] on the enum `common_form_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `common` MODIFY `form_type` ENUM('NONE', 'PETROLEUM', 'RTI', 'ZONE', 'DEMOLITION', 'OLDCOPY', 'LANDRECORDS', 'UNAUTHORISED') NOT NULL DEFAULT 'NONE';

-- AlterTable
ALTER TABLE `query` MODIFY `stage` ENUM('NONE', 'PETROLEUM', 'RTI', 'ZONE', 'DEMOLITION', 'OLDCOPY', 'LANDRECORDS', 'UNAUTHORISED') NOT NULL DEFAULT 'NONE';
