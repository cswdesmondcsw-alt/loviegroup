-- MySQL dump 10.13  Distrib 8.0.38, for macos14 (x86_64)
--
-- Host: 127.0.0.1    Database: accessdb
-- ------------------------------------------------------
-- Server version	8.0.39

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
-- Table structure for table `up_permissions_role_lnk`
--

DROP TABLE IF EXISTS `up_permissions_role_lnk`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `up_permissions_role_lnk` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `permission_id` int unsigned DEFAULT NULL,
  `role_id` int unsigned DEFAULT NULL,
  `permission_ord` double unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `up_permissions_role_lnk_uq` (`permission_id`,`role_id`),
  KEY `up_permissions_role_lnk_fk` (`permission_id`),
  KEY `up_permissions_role_lnk_ifk` (`role_id`),
  KEY `up_permissions_role_lnk_oifk` (`permission_ord`),
  CONSTRAINT `up_permissions_role_lnk_fk` FOREIGN KEY (`permission_id`) REFERENCES `up_permissions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `up_permissions_role_lnk_ifk` FOREIGN KEY (`role_id`) REFERENCES `up_roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `up_permissions_role_lnk`
--

LOCK TABLES `up_permissions_role_lnk` WRITE;
/*!40000 ALTER TABLE `up_permissions_role_lnk` DISABLE KEYS */;
INSERT INTO `up_permissions_role_lnk` VALUES (1,3,1,1),(2,2,1,1),(3,1,1,1),(4,6,2,1),(5,7,2,1),(6,10,2,1),(7,9,2,1),(8,8,2,1),(9,11,2,1),(10,5,2,2),(11,4,2,3),(12,12,2,4),(13,15,2,4),(14,17,2,4),(15,16,2,4),(17,19,2,4),(18,20,2,4),(20,14,2,5),(21,13,2,6),(22,22,2,7),(23,23,2,8);
/*!40000 ALTER TABLE `up_permissions_role_lnk` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-12-15 21:26:47
