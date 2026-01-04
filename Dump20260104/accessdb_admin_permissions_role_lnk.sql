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
-- Table structure for table `admin_permissions_role_lnk`
--

DROP TABLE IF EXISTS `admin_permissions_role_lnk`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin_permissions_role_lnk` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `permission_id` int unsigned DEFAULT NULL,
  `role_id` int unsigned DEFAULT NULL,
  `permission_ord` double unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `admin_permissions_role_lnk_uq` (`permission_id`,`role_id`),
  KEY `admin_permissions_role_lnk_fk` (`permission_id`),
  KEY `admin_permissions_role_lnk_ifk` (`role_id`),
  KEY `admin_permissions_role_lnk_oifk` (`permission_ord`),
  CONSTRAINT `admin_permissions_role_lnk_fk` FOREIGN KEY (`permission_id`) REFERENCES `admin_permissions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `admin_permissions_role_lnk_ifk` FOREIGN KEY (`role_id`) REFERENCES `admin_roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=169 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_permissions_role_lnk`
--

LOCK TABLES `admin_permissions_role_lnk` WRITE;
/*!40000 ALTER TABLE `admin_permissions_role_lnk` DISABLE KEYS */;
INSERT INTO `admin_permissions_role_lnk` VALUES (1,1,2,1),(2,2,2,2),(3,3,2,3),(4,4,2,4),(5,5,2,5),(6,6,2,6),(7,7,2,7),(8,8,2,8),(9,9,2,9),(10,10,2,10),(11,11,2,11),(12,12,2,12),(13,13,2,13),(14,14,2,14),(15,15,2,15),(16,16,2,16),(17,17,2,17),(18,18,2,18),(19,19,2,19),(20,20,2,20),(21,21,2,21),(22,22,2,22),(23,23,2,23),(24,24,2,24),(25,25,2,25),(26,26,2,26),(27,27,2,27),(28,28,2,28),(29,29,2,29),(30,30,2,30),(31,31,2,31),(32,32,3,1),(33,33,3,2),(34,34,3,3),(35,35,3,4),(36,36,3,5),(37,37,3,6),(38,38,3,7),(39,39,3,8),(40,40,3,9),(41,41,3,10),(42,42,3,11),(43,43,3,12),(44,44,3,13),(45,45,3,14),(46,46,3,15),(47,47,3,16),(48,48,3,17),(49,49,3,18),(50,50,3,19),(51,51,3,20),(52,52,3,21),(53,53,3,22),(54,54,3,23),(55,55,3,24),(56,56,3,25),(57,57,3,26),(59,59,1,2),(60,60,1,3),(61,61,1,4),(62,62,1,5),(63,63,1,6),(65,65,1,8),(66,66,1,9),(67,67,1,10),(68,68,1,11),(69,69,1,12),(71,71,1,14),(72,72,1,15),(73,73,1,16),(74,74,1,17),(75,75,1,18),(76,76,1,19),(77,77,1,20),(78,78,1,21),(79,79,1,22),(80,80,1,23),(81,81,1,24),(82,82,1,25),(83,83,1,26),(84,84,1,27),(85,85,1,28),(86,86,1,29),(87,87,1,30),(88,88,1,31),(89,89,1,32),(90,90,1,33),(91,91,1,34),(92,92,1,35),(93,93,1,36),(94,94,1,37),(95,95,1,38),(96,96,1,39),(97,97,1,40),(98,98,1,41),(99,99,1,42),(100,100,1,43),(101,101,1,44),(102,102,1,45),(103,103,1,46),(104,104,1,47),(105,105,1,48),(106,106,1,49),(107,107,1,50),(108,108,1,51),(109,109,1,52),(110,110,1,53),(111,111,1,54),(112,112,1,55),(113,113,1,56),(114,114,1,57),(115,115,1,58),(116,116,1,59),(117,117,1,60),(118,118,1,61),(119,119,1,62),(120,120,1,63),(121,121,1,64),(122,122,1,65),(125,125,1,68),(126,126,1,69),(127,127,1,70),(128,128,1,71),(129,129,1,72),(130,130,1,73),(131,131,1,74),(132,132,1,75),(133,133,1,76),(134,134,1,77),(135,135,1,78),(136,136,1,79),(137,137,1,80),(138,138,1,81),(139,139,1,82),(140,140,1,83),(141,141,1,84),(142,142,1,85),(143,143,1,86),(144,144,1,87),(145,145,1,88),(146,146,1,89),(147,147,1,90),(148,148,1,91),(149,149,1,92),(150,150,1,93),(151,151,1,94),(158,158,1,101),(159,159,1,102),(163,163,1,103),(164,164,1,104),(165,165,1,105),(166,166,1,106),(167,167,1,107),(168,168,1,108);
/*!40000 ALTER TABLE `admin_permissions_role_lnk` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-01-04  8:41:43
