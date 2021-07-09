-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `avatar` VARCHAR(255) NULL,
  `roles_id` INT NOT NULL,
  PRIMARY KEY (`id`, `roles_id`),
  INDEX `fk_users_roles_idx` (`roles_id` ASC),
  CONSTRAINT `fk_users_roles`
    FOREIGN KEY (`roles_id`)
    REFERENCES `mydb`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`brands`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`brands` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`payments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`payments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`sizes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`sizes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`colors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`colors` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`visibilities`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`visibilities` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`images` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `price` DECIMAL NOT NULL,
  `stock` INT NOT NULL,
  `stock_min` INT NOT NULL,
  `stock_max` INT NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `extended_description` VARCHAR(255) NOT NULL,
  `home` INT NULL,
  `categories_id` INT NOT NULL,
  `sizes_id` INT NOT NULL,
  `colors_id` INT NOT NULL,
  `brands_id` INT NOT NULL,
  `visibilities_id` INT NOT NULL,
  `images_id` INT NOT NULL,
  PRIMARY KEY (`id`, `categories_id`, `sizes_id`, `colors_id`, `brands_id`, `visibilities_id`, `images_id`),
  INDEX `fk_products_categories1_idx` (`categories_id` ASC),
  INDEX `fk_products_sizes1_idx` (`sizes_id` ASC),
  INDEX `fk_products_colors1_idx` (`colors_id` ASC),
  INDEX `fk_products_brands1_idx` (`brands_id` ASC),
  INDEX `fk_products_visibilities1_idx` (`visibilities_id` ASC),
  INDEX `fk_products_images1_idx` (`images_id` ASC),
  CONSTRAINT `fk_products_categories1`
    FOREIGN KEY (`categories_id`)
    REFERENCES `mydb`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_sizes1`
    FOREIGN KEY (`sizes_id`)
    REFERENCES `mydb`.`sizes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_colors1`
    FOREIGN KEY (`colors_id`)
    REFERENCES `mydb`.`colors` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_brands1`
    FOREIGN KEY (`brands_id`)
    REFERENCES `mydb`.`brands` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_visibilities1`
    FOREIGN KEY (`visibilities_id`)
    REFERENCES `mydb`.`visibilities` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_images1`
    FOREIGN KEY (`images_id`)
    REFERENCES `mydb`.`images` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`statuses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`statuses` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `number` INT NOT NULL,
  `date` DATE NOT NULL,
  `total` DECIMAL NOT NULL,
  `payments_id` INT NOT NULL,
  `statuses_id` INT NOT NULL,
  `users_id` INT NOT NULL,
  `users_roles_id` INT NOT NULL,
  PRIMARY KEY (`id`, `payments_id`, `statuses_id`, `users_id`, `users_roles_id`),
  INDEX `fk_orders_payments1_idx` (`payments_id` ASC),
  INDEX `fk_orders_statuses1_idx` (`statuses_id` ASC),
  INDEX `fk_orders_users1_idx` (`users_id` ASC, `users_roles_id` ASC),
  CONSTRAINT `fk_orders_payments1`
    FOREIGN KEY (`payments_id`)
    REFERENCES `mydb`.`payments` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_statuses1`
    FOREIGN KEY (`statuses_id`)
    REFERENCES `mydb`.`statuses` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_users1`
    FOREIGN KEY (`users_id` , `users_roles_id`)
    REFERENCES `mydb`.`users` (`id` , `roles_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`orderDetails`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`orderDetails` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `quantity` DECIMAL NOT NULL,
  `subtotal` DECIMAL NOT NULL,
  `orders_id` INT NOT NULL,
  `orders_payments_id` INT NOT NULL,
  `products_id` INT NOT NULL,
  PRIMARY KEY (`id`, `orders_id`, `orders_payments_id`, `products_id`),
  INDEX `fk_orderDetails_orders1_idx` (`orders_id` ASC, `orders_payments_id` ASC),
  INDEX `fk_orderDetails_products1_idx` (`products_id` ASC),
  CONSTRAINT `fk_orderDetails_orders1`
    FOREIGN KEY (`orders_id` , `orders_payments_id`)
    REFERENCES `mydb`.`orders` (`id` , `payments_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orderDetails_products1`
    FOREIGN KEY (`products_id`)
    REFERENCES `mydb`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`shippings`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`shippings` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `street` VARCHAR(45) NOT NULL,
  `number` INT NOT NULL,
  `price` DECIMAL NULL,
  `city` VARCHAR(45) NOT NULL,
  `state` VARCHAR(45) NOT NULL,
  `cp` VARCHAR(20) NOT NULL,
  `phone_number` VARCHAR(10) NOT NULL,
  `apartment` VARCHAR(45) NULL,
  `floor` VARCHAR(45) NULL,
  `orders_id` INT NOT NULL,
  `orders_payments_id` INT NOT NULL,
  `orders_statuses_id` INT NOT NULL,
  `orders_users_id` INT NOT NULL,
  `orders_users_roles_id` INT NOT NULL,
  PRIMARY KEY (`id`, `orders_id`, `orders_payments_id`, `orders_statuses_id`, `orders_users_id`, `orders_users_roles_id`),
  INDEX `fk_shippings_orders1_idx` (`orders_id` ASC, `orders_payments_id` ASC, `orders_statuses_id` ASC, `orders_users_id` ASC, `orders_users_roles_id` ASC),
  CONSTRAINT `fk_shippings_orders1`
    FOREIGN KEY (`orders_id` , `orders_payments_id` , `orders_statuses_id` , `orders_users_id` , `orders_users_roles_id`)
    REFERENCES `mydb`.`orders` (`id` , `payments_id` , `statuses_id` , `users_id` , `users_roles_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`adresses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`adresses` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `street` VARCHAR(45) NOT NULL,
  `number` INT NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `state` VARCHAR(45) NOT NULL,
  `cp` VARCHAR(20) NOT NULL,
  `phone_number` VARCHAR(10) NOT NULL,
  `apartment` VARCHAR(45) NULL,
  `floor` VARCHAR(45) NULL,
  `users_id` INT NOT NULL,
  `users_roles_id` INT NOT NULL,
  PRIMARY KEY (`id`, `users_id`, `users_roles_id`),
  INDEX `fk_adresses_users1_idx` (`users_id` ASC, `users_roles_id` ASC),
  CONSTRAINT `fk_adresses_users1`
    FOREIGN KEY (`users_id` , `users_roles_id`)
    REFERENCES `mydb`.`users` (`id` , `roles_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
