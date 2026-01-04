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
-- Table structure for table `articles_cmps`
--

DROP TABLE IF EXISTS `articles_cmps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articles_cmps` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `entity_id` int unsigned DEFAULT NULL,
  `cmp_id` int unsigned DEFAULT NULL,
  `component_type` varchar(255) DEFAULT NULL,
  `field` varchar(255) DEFAULT NULL,
  `order` double unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `articles_uq` (`entity_id`,`cmp_id`,`field`,`component_type`),
  KEY `articles_field_idx` (`field`),
  KEY `articles_component_type_idx` (`component_type`),
  KEY `articles_entity_fk` (`entity_id`),
  CONSTRAINT `articles_entity_fk` FOREIGN KEY (`entity_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles_cmps`
--

LOCK TABLES `articles_cmps` WRITE;
/*!40000 ALTER TABLE `articles_cmps` DISABLE KEYS */;
INSERT INTO `articles_cmps` VALUES (1,1,1,'shared.rich-text','blocks',1),(2,1,1,'shared.quote','blocks',2),(3,1,1,'shared.media','blocks',3),(4,1,2,'shared.rich-text','blocks',4),(5,1,1,'shared.slider','blocks',5),(6,2,3,'shared.rich-text','blocks',1),(7,2,2,'shared.quote','blocks',2),(8,2,2,'shared.media','blocks',3),(9,2,4,'shared.rich-text','blocks',4),(10,2,2,'shared.slider','blocks',5),(11,3,5,'shared.rich-text','blocks',1),(12,3,3,'shared.quote','blocks',2),(13,3,3,'shared.media','blocks',3),(14,3,6,'shared.rich-text','blocks',4),(15,3,3,'shared.slider','blocks',5),(16,4,7,'shared.rich-text','blocks',1),(17,4,4,'shared.quote','blocks',2),(18,4,4,'shared.media','blocks',3),(19,4,8,'shared.rich-text','blocks',4),(20,4,4,'shared.slider','blocks',5),(21,5,9,'shared.rich-text','blocks',1),(22,5,5,'shared.quote','blocks',2),(23,5,5,'shared.media','blocks',3),(24,5,10,'shared.rich-text','blocks',4),(25,5,5,'shared.slider','blocks',5);
/*!40000 ALTER TABLE `articles_cmps` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-01-04  8:41:41
