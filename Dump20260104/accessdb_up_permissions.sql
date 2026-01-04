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
-- Table structure for table `up_permissions`
--

DROP TABLE IF EXISTS `up_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `up_permissions` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `document_id` varchar(255) DEFAULT NULL,
  `action` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `published_at` datetime(6) DEFAULT NULL,
  `created_by_id` int unsigned DEFAULT NULL,
  `updated_by_id` int unsigned DEFAULT NULL,
  `locale` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `up_permissions_documents_idx` (`document_id`,`locale`,`published_at`),
  KEY `up_permissions_created_by_id_fk` (`created_by_id`),
  KEY `up_permissions_updated_by_id_fk` (`updated_by_id`),
  CONSTRAINT `up_permissions_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `up_permissions_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `up_permissions`
--

LOCK TABLES `up_permissions` WRITE;
/*!40000 ALTER TABLE `up_permissions` DISABLE KEYS */;
INSERT INTO `up_permissions` VALUES (1,'zsremnlisn4ao7v1a6gu86l9','plugin::users-permissions.auth.logout','2025-12-14 17:38:39.003000','2025-12-14 17:38:39.003000','2025-12-14 17:38:39.003000',NULL,NULL,NULL),(2,'xu0yui3zn6s0ittz34zdg2bn','plugin::users-permissions.user.me','2025-12-14 17:38:39.003000','2025-12-14 17:38:39.003000','2025-12-14 17:38:39.003000',NULL,NULL,NULL),(3,'je66wwrj2ldg7sw8hutknear','plugin::users-permissions.auth.changePassword','2025-12-14 17:38:39.003000','2025-12-14 17:38:39.003000','2025-12-14 17:38:39.003000',NULL,NULL,NULL),(4,'rpxnnujabun4jjltxuy5xr7o','plugin::users-permissions.auth.forgotPassword','2025-12-14 17:38:39.007000','2025-12-14 17:38:39.007000','2025-12-14 17:38:39.007000',NULL,NULL,NULL),(5,'znhf9g6spj78v8h6p7zzoxm6','plugin::users-permissions.auth.connect','2025-12-14 17:38:39.007000','2025-12-14 17:38:39.007000','2025-12-14 17:38:39.007000',NULL,NULL,NULL),(6,'ri6tfv5ug4sekmjffmtahhrg','plugin::users-permissions.auth.callback','2025-12-14 17:38:39.007000','2025-12-14 17:38:39.007000','2025-12-14 17:38:39.007000',NULL,NULL,NULL),(7,'lfreybxubcxyrywvml0fs9fx','plugin::users-permissions.auth.emailConfirmation','2025-12-14 17:38:39.007000','2025-12-14 17:38:39.007000','2025-12-14 17:38:39.007000',NULL,NULL,NULL),(8,'gmvz20rc2ta4pia9tlv468vi','plugin::users-permissions.auth.resetPassword','2025-12-14 17:38:39.007000','2025-12-14 17:38:39.007000','2025-12-14 17:38:39.007000',NULL,NULL,NULL),(9,'osruipi2sjj00tlo595tmp7s','plugin::users-permissions.auth.register','2025-12-14 17:38:39.007000','2025-12-14 17:38:39.007000','2025-12-14 17:38:39.007000',NULL,NULL,NULL),(10,'d4hs1lhfn1c3j51xbjrf38z1','plugin::users-permissions.auth.sendEmailConfirmation','2025-12-14 17:38:39.007000','2025-12-14 17:38:39.007000','2025-12-14 17:38:39.008000',NULL,NULL,NULL),(11,'qkctepczphe2c6kw8ui3zj1b','plugin::users-permissions.auth.refresh','2025-12-14 17:38:39.007000','2025-12-14 17:38:39.007000','2025-12-14 17:38:39.008000',NULL,NULL,NULL),(12,'yva2edxirf0kikmvrb9kuowt','api::article.article.find','2025-12-14 17:38:39.491000','2025-12-14 17:38:39.491000','2025-12-14 17:38:39.491000',NULL,NULL,NULL),(13,'hu2wb96q1xhm9xjugzyufspc','api::article.article.findOne','2025-12-14 17:38:39.491000','2025-12-14 17:38:39.491000','2025-12-14 17:38:39.491000',NULL,NULL,NULL),(14,'zqdlpd6wsdonsb9fe9i0lpnn','api::category.category.find','2025-12-14 17:38:39.491000','2025-12-14 17:38:39.491000','2025-12-14 17:38:39.491000',NULL,NULL,NULL),(15,'txa43us59ytwe95hw4lqf8q8','api::category.category.findOne','2025-12-14 17:38:39.491000','2025-12-14 17:38:39.491000','2025-12-14 17:38:39.491000',NULL,NULL,NULL),(16,'n737lnsuneybvi46qkbk778i','api::author.author.findOne','2025-12-14 17:38:39.491000','2025-12-14 17:38:39.491000','2025-12-14 17:38:39.491000',NULL,NULL,NULL),(17,'og6u531d5aq8zh7i23zhzuq9','api::author.author.find','2025-12-14 17:38:39.491000','2025-12-14 17:38:39.491000','2025-12-14 17:38:39.491000',NULL,NULL,NULL),(19,'kuujqzo3ys4a104ri79qq19t','api::global.global.find','2025-12-14 17:38:39.491000','2025-12-14 17:38:39.491000','2025-12-14 17:38:39.491000',NULL,NULL,NULL),(20,'dl257w52l5yed2ypqux4iw7y','api::about.about.find','2025-12-14 17:38:39.491000','2025-12-14 17:38:39.491000','2025-12-14 17:38:39.491000',NULL,NULL,NULL),(22,'djpvsmcfkxbhhhqinfk5j6jh','plugin::users-permissions.role.findOne','2025-12-14 17:41:14.281000','2025-12-14 17:41:14.281000','2025-12-14 17:41:14.281000',NULL,NULL,NULL),(23,'u4wfclmb4jab0ycp46hpd8ga','plugin::users-permissions.role.find','2025-12-14 17:41:14.281000','2025-12-14 17:41:14.281000','2025-12-14 17:41:14.281000',NULL,NULL,NULL);
/*!40000 ALTER TABLE `up_permissions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-01-04  8:41:40
