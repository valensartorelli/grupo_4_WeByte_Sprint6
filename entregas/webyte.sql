-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: us-cdbr-east-04.cleardb.com    Database: heroku_d5211db8f2f8da9
-- ------------------------------------------------------
-- Server version	5.6.50-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `addresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `street` varchar(255) NOT NULL,
  `number` int(11) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `floor` int(11) DEFAULT NULL,
  `apartment` varchar(255) DEFAULT NULL,
  `cp` varchar(255) NOT NULL,
  `phone_number` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `addresses_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (5,'Adidas','2021-07-04 22:45:58','2021-07-04 22:45:58'),(15,'Nike','2021-07-04 22:46:01','2021-07-06 17:39:03'),(25,'Avia','2021-07-04 23:31:12','2021-07-04 23:56:30'),(35,'Puma','2021-07-04 23:31:30','2021-07-04 23:31:30');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Hombre','2021-07-04 22:41:46','2021-07-04 22:41:46'),(2,'Mujer','2021-07-04 22:41:51','2021-07-04 22:41:51'),(3,'Niño','2021-07-04 22:41:54','2021-07-04 22:41:54');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (5,'Blanco','2021-07-04 22:46:21','2021-07-04 22:46:21'),(15,'Negro','2021-07-04 22:46:24','2021-07-04 22:46:24'),(25,'Gris','2021-07-04 22:46:27','2021-07-04 22:46:27'),(35,'Azul','2021-07-05 03:43:22','2021-07-05 03:43:22'),(45,'Rojo','2021-07-05 03:43:27','2021-07-05 03:43:27'),(55,'Verde','2021-07-05 03:43:33','2021-07-05 03:43:33'),(65,'Amarillo','2021-07-05 03:43:36','2021-07-05 03:43:36');
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `productId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`),
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=575 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (5,'img-1625438871827.jpg',5,'2021-07-04 22:47:53','2021-07-04 22:47:53'),(65,'img-1625500715928.jpg',65,'2021-07-05 03:46:50','2021-07-05 15:58:36'),(95,'img-1625500752445.jpg',95,'2021-07-05 03:50:41','2021-07-05 15:59:12'),(145,'img-1625593257791.jpg',145,'2021-07-06 17:40:59','2021-07-06 17:40:59'),(215,'img-1625596661706.jpg',5,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(225,'img-1625596661706.jpg',65,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(235,'img-1625596661706.jpg',95,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(245,'img-1625596661706.jpg',145,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(255,'img-1625596661834.jpg',5,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(265,'img-1625596661834.jpg',65,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(275,'img-1625596661834.jpg',95,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(285,'img-1625596661834.jpg',145,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(295,'img-1625596662022.jpg',5,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(305,'img-1625596662022.jpg',65,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(315,'img-1625596662022.jpg',95,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(325,'img-1625596662022.jpg',145,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(335,'img-1625596662040.jpg',5,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(345,'img-1625596662040.jpg',65,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(355,'img-1625596662040.jpg',95,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(365,'img-1625596662040.jpg',145,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(525,'img-1625660784992.jpg',205,'2021-07-07 12:26:25','2021-07-07 12:26:25'),(535,'img-1625660785160.jpg',205,'2021-07-07 12:26:25','2021-07-07 12:26:25'),(545,'img-1625660785170.jpg',205,'2021-07-07 12:26:25','2021-07-07 12:26:25'),(555,'img-1625660785343.jpg',205,'2021-07-07 12:26:25','2021-07-07 12:26:25'),(565,'img-1625660785361.jpg',205,'2021-07-07 12:26:25','2021-07-07 12:26:25');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES ('20210612212550-create-brand.js'),('20210612212606-create-color.js'),('20210612212616-create-category.js'),('20210612212650-create-size.js'),('20210612212659-create-visibility.js'),('20210612212708-create-payment.js'),('20210612212715-create-status.js'),('20210612212722-create-rol.js'),('20210612212952-create-product.js'),('20210612213016-create-image.js'),('20210612213050-create-user.js'),('20210612213051-create-address.js'),('20210612213103-create-order.js'),('20210612213114-create-shipping.js'),('20210612213302-create-order-detail.js');
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderdetails`
--

DROP TABLE IF EXISTS `orderdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orderdetails` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` decimal(10,0) NOT NULL,
  `subtotal` decimal(10,0) NOT NULL,
  `orderId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `orderId` (`orderId`),
  KEY `productId` (`productId`),
  CONSTRAINT `orderdetails_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`),
  CONSTRAINT `orderdetails_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderdetails`
--

LOCK TABLES `orderdetails` WRITE;
/*!40000 ALTER TABLE `orderdetails` DISABLE KEYS */;
/*!40000 ALTER TABLE `orderdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` int(11) NOT NULL,
  `date` date NOT NULL,
  `total` decimal(10,0) NOT NULL,
  `paymentId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `userAddressId` int(11) NOT NULL,
  `statusId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `paymentId` (`paymentId`),
  KEY `userId` (`userId`),
  KEY `userAddressId` (`userAddressId`),
  KEY `statusId` (`statusId`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`paymentId`) REFERENCES `payments` (`id`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`userAddressId`) REFERENCES `users` (`id`),
  CONSTRAINT `orders_ibfk_4` FOREIGN KEY (`statusId`) REFERENCES `statuses` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `stock` int(11) NOT NULL,
  `stock_min` int(11) DEFAULT NULL,
  `stock_max` int(11) DEFAULT NULL,
  `description` varchar(255) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `brandId` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `sizeId` int(11) NOT NULL,
  `colorId` int(11) NOT NULL,
  `visibilityId` int(11) NOT NULL,
  `home` int(11) DEFAULT NULL,
  `extended_description` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `brandId` (`brandId`),
  KEY `categoryId` (`categoryId`),
  KEY `sizeId` (`sizeId`),
  KEY `colorId` (`colorId`),
  KEY `visibilityId` (`visibilityId`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`brandId`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`),
  CONSTRAINT `products_ibfk_3` FOREIGN KEY (`sizeId`) REFERENCES `sizes` (`id`),
  CONSTRAINT `products_ibfk_4` FOREIGN KEY (`colorId`) REFERENCES `colors` (`id`),
  CONSTRAINT `products_ibfk_5` FOREIGN KEY (`visibilityId`) REFERENCES `visibilities` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=215 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (5,'Remera Algodon Blanca',12,1,100,'fsdgdfgfd',700,5,1,25,5,5,0,'sdfsdf','2021-07-04 22:47:53','2021-07-06 22:00:01'),(65,'Calza ciclista',20,1,100,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis tristique ex, nec lacinia nunc dictum sed.',1500,15,2,25,15,5,0,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis tristique ex, nec lacinia nunc dictum sed.','2021-07-05 03:46:50','2021-07-06 17:46:46'),(95,'Jogging Rojo',20,1,100,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis tristique ex, nec lacinia nunc dictum sed.',2800,15,3,25,45,5,0,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis tristique ex, nec lacinia nunc dictum sed.','2021-07-05 03:50:41','2021-07-06 17:50:05'),(145,'Remera Algodon Negra',12,1,40,'asdasdas',500,5,1,25,15,5,0,'adsasdas','2021-07-06 17:40:59','2021-07-06 18:39:25'),(205,'Remera de Algodon Azul',20,1,100,'Esta Remera es perfecta para completar las sesiones de entrenamiento cuando sales del instituto. ',5500,5,1,25,35,5,0,'Esta Remera es perfecta para completar las sesiones de entrenamiento cuando sales del instituto. ','2021-07-07 12:26:25','2021-07-07 12:28:01');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rols`
--

DROP TABLE IF EXISTS `rols`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rols` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rols`
--

LOCK TABLES `rols` WRITE;
/*!40000 ALTER TABLE `rols` DISABLE KEYS */;
INSERT INTO `rols` VALUES (5,'Administrador','2021-07-04 22:44:58','2021-07-04 22:44:58'),(15,'Usuario','2021-07-04 22:45:03','2021-07-04 22:45:03');
/*!40000 ALTER TABLE `rols` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shippings`
--

DROP TABLE IF EXISTS `shippings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shippings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `street` varchar(255) NOT NULL,
  `number` int(11) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `floor` int(11) DEFAULT NULL,
  `apartment` varchar(255) DEFAULT NULL,
  `cp` varchar(255) NOT NULL,
  `phone_number` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `orderId` int(11) NOT NULL,
  `orderPaymentId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `orderId` (`orderId`),
  KEY `orderPaymentId` (`orderPaymentId`),
  CONSTRAINT `shippings_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`),
  CONSTRAINT `shippings_ibfk_2` FOREIGN KEY (`orderPaymentId`) REFERENCES `orders` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shippings`
--

LOCK TABLES `shippings` WRITE;
/*!40000 ALTER TABLE `shippings` DISABLE KEYS */;
/*!40000 ALTER TABLE `shippings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sizes`
--

DROP TABLE IF EXISTS `sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sizes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizes`
--

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
INSERT INTO `sizes` VALUES (5,'XS','2021-07-04 22:46:37','2021-07-04 22:46:56'),(15,'S','2021-07-04 22:46:39','2021-07-04 22:46:39'),(25,'M','2021-07-04 22:46:41','2021-07-04 22:46:41'),(35,'L','2021-07-04 22:46:44','2021-07-04 22:46:44'),(45,'XL','2021-07-04 22:46:46','2021-07-04 22:46:52');
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `statuses`
--

DROP TABLE IF EXISTS `statuses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `statuses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `statuses`
--

LOCK TABLES `statuses` WRITE;
/*!40000 ALTER TABLE `statuses` DISABLE KEYS */;
/*!40000 ALTER TABLE `statuses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `rolId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `rolId` (`rolId`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`rolId`) REFERENCES `rols` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (5,'Valentina','Sartorelli','valen','valentina.sartorelli@thesinapiteam.com','$2a$10$OPrrFthQXHNS5MmfYFR4yOHmUgJdnIvbHEXg2ehqqzsivwj9hcIvC','user-1625500219854.JPG',5,'2021-07-04 22:45:29','2021-07-05 15:50:32'),(15,'Hernan','Arismendi','Haap','info.pixhaap@gmail.com','$2a$10$clPTGkNeYDMhvTAwcBxalOpfaOrMdsTBdzSC4IPzaTQy7/AxVvdiy','user-1625443367509.jpg',5,'2021-07-05 00:02:47','2021-07-05 00:02:47'),(35,'Gabriela','Mangoni','mangonigabyy','mangonigabriela@gmail.com','$2a$10$6T03SXUrnl2GbdticUqQYODnXfGty3ORraI42x3J0XUUkXBTc97XW','user-1625493689797.JPG',5,'2021-07-05 14:01:29','2021-07-05 16:40:24'),(45,'valentina','sartorelli','valen','valen.sartorelli@test.com','$2a$10$3KuS/FtVRB9AZ1SjR54cKeJDSgNQgcnZwxr30lLGeuk8DBYaH1HVC','user-1625527890814.jpg',5,'2021-07-05 23:31:31','2021-07-05 23:31:31');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `visibilities`
--

DROP TABLE IF EXISTS `visibilities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `visibilities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visibilities`
--

LOCK TABLES `visibilities` WRITE;
/*!40000 ALTER TABLE `visibilities` DISABLE KEYS */;
INSERT INTO `visibilities` VALUES (5,'Activo','2021-07-04 22:46:10','2021-07-04 22:46:10'),(15,'Inactivo','2021-07-04 22:46:15','2021-07-04 22:46:15');
/*!40000 ALTER TABLE `visibilities` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-07 12:00:28
