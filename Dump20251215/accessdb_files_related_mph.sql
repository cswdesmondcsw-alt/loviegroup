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
-- Table structure for table `files_related_mph`
--

DROP TABLE IF EXISTS `files_related_mph`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `files_related_mph` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `file_id` int unsigned DEFAULT NULL,
  `related_id` int unsigned DEFAULT NULL,
  `related_type` varchar(255) DEFAULT NULL,
  `field` varchar(255) DEFAULT NULL,
  `order` double unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `files_related_mph_fk` (`file_id`),
  KEY `files_related_mph_oidx` (`order`),
  KEY `files_related_mph_idix` (`related_id`),
  CONSTRAINT `files_related_mph_fk` FOREIGN KEY (`file_id`) REFERENCES `files` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files_related_mph`
--

LOCK TABLES `files_related_mph` WRITE;
/*!40000 ALTER TABLE `files_related_mph` DISABLE KEYS */;
INSERT INTO `files_related_mph` VALUES (1,1,1,'api::author.author','avatar',1),(2,2,2,'api::author.author','avatar',1),(3,4,1,'shared.media','file',1),(4,4,1,'shared.slider','files',1),(5,5,1,'shared.slider','files',2),(6,3,1,'api::article.article','cover',1),(7,4,2,'shared.media','file',1),(8,4,2,'shared.slider','files',1),(9,5,2,'shared.slider','files',2),(10,6,2,'api::article.article','cover',1),(11,4,3,'shared.media','file',1),(12,4,3,'shared.slider','files',1),(13,5,3,'shared.slider','files',2),(14,7,3,'api::article.article','cover',1),(15,4,4,'shared.media','file',1),(16,4,4,'shared.slider','files',1),(17,5,4,'shared.slider','files',2),(18,8,4,'api::article.article','cover',1),(19,4,5,'shared.media','file',1),(20,4,5,'shared.slider','files',1),(21,5,5,'shared.slider','files',2),(22,9,5,'api::article.article','cover',1),(23,11,1,'shared.seo','shareImage',1),(24,10,1,'api::global.global','favicon',1),(25,4,6,'shared.media','file',1);
/*!40000 ALTER TABLE `files_related_mph` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-12-15 21:26:44
