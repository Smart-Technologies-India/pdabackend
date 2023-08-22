/*
  Warnings:

  - You are about to drop the column `deptuserId` on the `payment` table. All the data in the column will be lost.
  - You are about to drop the column `query_status` on the `payment` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `payment` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `payment` table. All the data in the column will be lost.
  - Added the required column `deptuser_id` to the `payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `payment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `payment` DROP FOREIGN KEY `payment_deptuserId_fkey`;

-- DropForeignKey
ALTER TABLE `payment` DROP FOREIGN KEY `payment_userId_fkey`;

-- AlterTable
ALTER TABLE `payment` DROP COLUMN `deptuserId`,
    DROP COLUMN `query_status`,
    DROP COLUMN `status`,
    DROP COLUMN `userId`,
    ADD COLUMN `deptuser_id` INTEGER NOT NULL,
    ADD COLUMN `paymentstatus` ENUM('NONE', 'PENDING', 'PAID') NOT NULL DEFAULT 'NONE',
    ADD COLUMN `user_id` INTEGER NOT NULL,
    MODIFY `reference` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `payment` ADD CONSTRAINT `payment_deptuser_id_fkey` FOREIGN KEY (`deptuser_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payment` ADD CONSTRAINT `payment_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
