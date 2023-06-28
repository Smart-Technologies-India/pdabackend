/*
  Warnings:

  - You are about to drop the column `form_status` on the `old_copy_form` table. All the data in the column will be lost.
  - You are about to drop the column `form_status` on the `petroleum_form` table. All the data in the column will be lost.
  - You are about to alter the column `capacity` on the `petroleum_form` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(65,30)`.
  - You are about to drop the column `form_status` on the `rti_form` table. All the data in the column will be lost.
  - You are about to drop the column `form_status` on the `zone_info_form` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `land_section_form` ADD COLUMN `illegal_sqmt` VARCHAR(191) NULL,
    ADD COLUMN `land_formid` INTEGER NULL,
    ADD COLUMN `land_stageid` INTEGER NULL;

-- AlterTable
ALTER TABLE `old_copy_form` DROP COLUMN `form_status`;

-- AlterTable
ALTER TABLE `petroleum_form` DROP COLUMN `form_status`,
    MODIFY `capacity` DECIMAL(65, 30) NULL;

-- AlterTable
ALTER TABLE `rti_form` DROP COLUMN `form_status`;

-- AlterTable
ALTER TABLE `zone_info_form` DROP COLUMN `form_status`;
