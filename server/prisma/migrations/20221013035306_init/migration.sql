-- CreateTable
CREATE TABLE `User` (
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `firstName` VARCHAR(191) NULL,
    `id` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `roles` JSON NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `username` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Supplier` (
    `contacts` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `notes` VARCHAR(191) NULL,
    `pricelistType` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `status` ENUM('NEW', 'ACTIVE', 'BLOCKED') NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Supplier_pricelistType_key`(`pricelistType`),
    UNIQUE INDEX `Supplier_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
