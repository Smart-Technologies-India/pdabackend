-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `design_point_id` INTEGER NULL,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `contact` VARCHAR(191) NULL,
    `pic_url` VARCHAR(191) NULL,
    `access_kay` VARCHAR(191) NULL,
    `department` ENUM('NONE', 'PDA', 'EOCS', 'LAND', 'MAMLATDAR', 'COLLECTOR', 'DYCOLLECTOR', 'FIRE', 'COASTGUARD') NOT NULL DEFAULT 'NONE',
    `role` ENUM('NONE', 'SYSTEM', 'ADMIN', 'COLLECTOR', 'DYCOLLECTOR', 'ATP', 'JTP', 'MAMLATDAR', 'FIRE', 'LANDSUPTD', 'JE', 'SITESUPERVISOR', 'ARCHITECTASST', 'PLANNINGDRAUGHTSMAN', 'ARCHDRAUGHTSMANSP', 'ARCHDRAUGHTSMANST', 'USER') NOT NULL DEFAULT 'NONE',
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `village` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `query` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `stage` ENUM('NONE', 'PETROLEUM', 'RTI', 'ZONE', 'DEMOLITION', 'OLDCOPY', 'LANDRECORDS', 'MAMLATDAR') NOT NULL DEFAULT 'NONE',
    `form_id` INTEGER NOT NULL,
    `form_status` INTEGER NOT NULL,
    `to_user_id` INTEGER NOT NULL,
    `from_user_id` INTEGER NOT NULL,
    `query_type` ENUM('NONE', 'INTRA', 'INTER', 'PUBLIC') NOT NULL DEFAULT 'NONE',
    `doc_url` VARCHAR(191) NULL,
    `remark` VARCHAR(191) NOT NULL,
    `query_status` ENUM('NONE', 'SENT', 'RECEIVED', 'REPLIED', 'RESOLVED') NOT NULL DEFAULT 'NONE',
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `common` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `stage` ENUM('NONE', 'PETROLEUM', 'RTI', 'ZONE', 'DEMOLITION', 'OLDCOPY', 'LANDRECORDS', 'MAMLATDAR') NOT NULL DEFAULT 'NONE',
    `form_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `auth_user_id` VARCHAR(191) NULL,
    `focal_user_id` VARCHAR(191) NULL,
    `intra_user_id` VARCHAR(191) NULL,
    `inter_user_id` VARCHAR(191) NULL,
    `village` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,
    `number` VARCHAR(191) NOT NULL,
    `form_status` INTEGER NULL,
    `query_status` ENUM('NONE', 'SUBMIT', 'INPROCESS', 'QUERYRAISED', 'APPROVED', 'REJCTED', 'CERTIFICATEGRANT') NOT NULL DEFAULT 'NONE',
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rti_form` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `subject_info` VARCHAR(191) NULL,
    `from_date` DATETIME(3) NULL,
    `to_date` DATETIME(3) NULL,
    `description` VARCHAR(191) NULL,
    `information` VARCHAR(191) NULL,
    `proverty_line_url` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `attachments` JSON NULL,
    `form_status` INTEGER NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `comments_dept` VARCHAR(191) NULL,
    `condition_to_follow` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `zone_info_form` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `survey_no` INTEGER NULL,
    `village_id` INTEGER NULL,
    `nakel_url_1_14` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `attachments` JSON NULL,
    `form_status` INTEGER NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `comments_dept` VARCHAR(191) NULL,
    `condition_to_follow` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `petroleum_form` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `company_name` VARCHAR(191) NULL,
    `company_region` VARCHAR(191) NULL,
    `designation` VARCHAR(191) NULL,
    `location_address` VARCHAR(191) NULL,
    `noc_type` ENUM('NONE', 'NOCTYPEONE', 'NOCTYPETWO', 'NOCTYPETHREE') NOT NULL DEFAULT 'NONE',
    `class_type` ENUM('NONE', 'CLASSTYPEONE', 'CLASSTYPETWO', 'CLASSTYPETHREE') NOT NULL DEFAULT 'NONE',
    `outlet_type` ENUM('NONE', 'OUTLETTYPEONE', 'OUTLETTYPETWO', 'OUTLETTYPETHREE') NOT NULL DEFAULT 'NONE',
    `capacity` INTEGER NULL,
    `survey_no` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `noc_fire_url` VARCHAR(191) NULL,
    `na_order_url` VARCHAR(191) NULL,
    `sanad_url` VARCHAR(191) NULL,
    `coastguard_url` VARCHAR(191) NULL,
    `plan_url` VARCHAR(191) NULL,
    `explosive_url` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `attachments` JSON NULL,
    `form_status` INTEGER NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `comments_dept` VARCHAR(191) NULL,
    `condition_to_follow` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `old_copy_form` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `survey_no` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `prev_application_date` DATETIME(3) NULL,
    `prev_application_number` VARCHAR(191) NULL,
    `information_needed` VARCHAR(191) NULL,
    `type_of_information` ENUM('NONE', 'CP', 'OC', 'MAPS') NOT NULL DEFAULT 'NONE',
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `aadhar_url` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `attachments` JSON NULL,
    `form_status` INTEGER NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `comments_dept` VARCHAR(191) NULL,
    `condition_to_follow` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `land_section_form` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `survey_no` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `area` VARCHAR(191) NULL,
    `na_type` VARCHAR(191) NULL,
    `zone` VARCHAR(191) NULL,
    `road_access` VARCHAR(191) NULL,
    `no_road_access` VARCHAR(191) NULL,
    `width_adequate` VARCHAR(191) NULL,
    `is_dimension_plot_adequate` VARCHAR(191) NULL,
    `is_crz` VARCHAR(191) NULL,
    `is_monument` VARCHAR(191) NULL,
    `other_remark` VARCHAR(191) NULL,
    `atp_recommendation` VARCHAR(191) NULL,
    `attachments` JSON NULL,
    `comments_dept` VARCHAR(191) NULL,
    `condition_to_follow` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `userId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `query` ADD CONSTRAINT `query_to_user_id_fkey` FOREIGN KEY (`to_user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `query` ADD CONSTRAINT `query_from_user_id_fkey` FOREIGN KEY (`from_user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `common` ADD CONSTRAINT `common_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rti_form` ADD CONSTRAINT `rti_form_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `zone_info_form` ADD CONSTRAINT `zone_info_form_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `zone_info_form` ADD CONSTRAINT `zone_info_form_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `petroleum_form` ADD CONSTRAINT `petroleum_form_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `petroleum_form` ADD CONSTRAINT `petroleum_form_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `old_copy_form` ADD CONSTRAINT `old_copy_form_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `old_copy_form` ADD CONSTRAINT `old_copy_form_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `land_section_form` ADD CONSTRAINT `land_section_form_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `land_section_form` ADD CONSTRAINT `land_section_form_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
