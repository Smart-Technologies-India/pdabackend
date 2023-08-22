-- AlterTable
ALTER TABLE `land_section_form` ADD COLUMN `recommend` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `attachments` VARCHAR(191) NULL;
