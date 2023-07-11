-- AlterTable
ALTER TABLE `land_section_form` ADD COLUMN `sub_division` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `old_copy_form` ADD COLUMN `sub_division` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `petroleum_form` ADD COLUMN `sub_division` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `zone_info_form` ADD COLUMN `sub_division` VARCHAR(191) NULL,
    MODIFY `survey_no` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `survey` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `villageId` INTEGER NOT NULL,
    `survey_no` VARCHAR(191) NOT NULL,
    `sub_division` VARCHAR(191) NULL,
    `owner_name` VARCHAR(191) NOT NULL,
    `area` VARCHAR(191) NOT NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `survey` ADD CONSTRAINT `survey_villageId_fkey` FOREIGN KEY (`villageId`) REFERENCES `village`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
