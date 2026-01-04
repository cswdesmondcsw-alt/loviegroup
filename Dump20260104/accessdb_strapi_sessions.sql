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
-- Table structure for table `strapi_sessions`
--

DROP TABLE IF EXISTS `strapi_sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `strapi_sessions` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `document_id` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `session_id` varchar(255) DEFAULT NULL,
  `child_id` varchar(255) DEFAULT NULL,
  `device_id` varchar(255) DEFAULT NULL,
  `origin` varchar(255) DEFAULT NULL,
  `expires_at` datetime(6) DEFAULT NULL,
  `absolute_expires_at` datetime(6) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `published_at` datetime(6) DEFAULT NULL,
  `created_by_id` int unsigned DEFAULT NULL,
  `updated_by_id` int unsigned DEFAULT NULL,
  `locale` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `strapi_sessions_documents_idx` (`document_id`,`locale`,`published_at`),
  KEY `strapi_sessions_created_by_id_fk` (`created_by_id`),
  KEY `strapi_sessions_updated_by_id_fk` (`updated_by_id`),
  CONSTRAINT `strapi_sessions_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `strapi_sessions_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `strapi_sessions`
--

LOCK TABLES `strapi_sessions` WRITE;
/*!40000 ALTER TABLE `strapi_sessions` DISABLE KEYS */;
INSERT INTO `strapi_sessions` VALUES (1,'uns0u74d2vaueld98ecfo381','1','1c9c9968d000336de4ce41725d35a104','5a2657351ad3e23445e0f363a7b9fb88','9292336e-2f18-4722-a380-00073247736e','admin','2025-12-14 19:40:47.801000','2026-01-13 17:40:47.801000','rotated','session','2025-12-14 17:40:47.801000','2025-12-14 18:12:00.500000','2025-12-14 17:40:47.801000',NULL,NULL,NULL),(2,'hwxumn2za8fmbcgb58jz7tq9','1','5a2657351ad3e23445e0f363a7b9fb88',NULL,'9292336e-2f18-4722-a380-00073247736e','admin','2025-12-14 20:12:00.476000','2026-01-13 17:40:47.801000','active','session','2025-12-14 18:12:00.478000','2025-12-14 18:12:00.478000','2025-12-14 18:12:00.482000',NULL,NULL,NULL),(3,'txkgrh80nhw1jwy0i07dryyh','1','7d7728e38eb6f2fddcf5a6467716ac78','7f539df9448187b4c9a6be336b72f75a','83ca75aa-4920-4923-a603-266ab08dff24','admin','2025-12-15 22:39:20.141000','2026-01-14 20:39:20.141000','rotated','session','2025-12-15 20:39:20.141000','2025-12-15 21:12:55.168000','2025-12-15 20:39:20.142000',NULL,NULL,NULL),(4,'w8ljn17hrrqpi5sji8idu66b','1','7f539df9448187b4c9a6be336b72f75a',NULL,'83ca75aa-4920-4923-a603-266ab08dff24','admin','2025-12-15 23:12:55.161000','2026-01-14 20:39:20.141000','active','session','2025-12-15 21:12:55.161000','2025-12-15 21:12:55.161000','2025-12-15 21:12:55.162000',NULL,NULL,NULL),(5,'f2yfcbnnskphrl6h8twiv5c7','1','7681c86539467dfe20918a0d4055465c',NULL,'ec89e3a4-aa89-469f-90ed-0b90e4b23847','admin','2025-12-16 10:26:45.931000','2026-01-15 08:26:45.931000','active','session','2025-12-16 08:26:45.931000','2025-12-16 08:26:45.931000','2025-12-16 08:26:45.932000',NULL,NULL,NULL);
/*!40000 ALTER TABLE `strapi_sessions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-01-04  8:41:39
