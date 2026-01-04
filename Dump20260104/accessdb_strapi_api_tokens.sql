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
-- Table structure for table `strapi_api_tokens`
--

DROP TABLE IF EXISTS `strapi_api_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `strapi_api_tokens` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `document_id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `access_key` varchar(255) DEFAULT NULL,
  `encrypted_key` longtext,
  `last_used_at` datetime(6) DEFAULT NULL,
  `expires_at` datetime(6) DEFAULT NULL,
  `lifespan` bigint DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `published_at` datetime(6) DEFAULT NULL,
  `created_by_id` int unsigned DEFAULT NULL,
  `updated_by_id` int unsigned DEFAULT NULL,
  `locale` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `strapi_api_tokens_documents_idx` (`document_id`,`locale`,`published_at`),
  KEY `strapi_api_tokens_created_by_id_fk` (`created_by_id`),
  KEY `strapi_api_tokens_updated_by_id_fk` (`updated_by_id`),
  CONSTRAINT `strapi_api_tokens_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `strapi_api_tokens_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `strapi_api_tokens`
--

LOCK TABLES `strapi_api_tokens` WRITE;
/*!40000 ALTER TABLE `strapi_api_tokens` DISABLE KEYS */;
INSERT INTO `strapi_api_tokens` VALUES (1,'pe25euyt94z7746eh57n2pio','Read Only','A default API token with read-only permissions, only used for accessing resources','read-only','72fb827193140a5259938473b3063adf46dacf3502cc5bebb96d11e7c6f57f9a06470ac08061b51bcbfae75dfd2a66818e81bd9b01e3d1fd127dc174b811349e','v1:b6a3c0022a125feccb86360c7d9474f5:51dee39d2ec881abefdc09505f6c004b3cbfa240249e825b69411dd2d465209e0a452fadc70efc528aa619e323c8b85483888276d0e93921f3e1793161cb1b6cbd985355a934e9a04da1c9bd1d4d87d79bc502ea24e2b92ae3fb638c2b388c6f362b3e3be8c4a9aa678dba59df41a34ad8603b47dc63038f6f8cdfb631db5f0957b7cc4eec06bea2d9a790323e246f878ef1a93e00fbd3719f7826090b42ba3c184c726da6b5d86d064b80d18a7f6310ad6d7752a4e50361a647e4f2e5b7a9c8a8e879226edd4f52e08dfb0dc4c001aec9934ebe44a18cfb3be4aa02a904628613c80914af7e77193560ca360ec6590a956afae07e552d783216f570c125aa8f:123d4f18437f812a5bc0332dd8cd5731',NULL,NULL,NULL,'2025-12-14 17:38:39.451000','2025-12-14 17:38:39.451000','2025-12-14 17:38:39.451000',NULL,NULL,NULL),(2,'ebs1bzw16n1dfd5g8e7c4um9','Full Access','A default API token with full access permissions, used for accessing or modifying resources','full-access','16d430c526836373bbe57e9c15861b88f187fac747a77f172b0d0726de99bb80bb12a37d1cfdf059a225e804a5f5b1bf4bc47563164f8bca80f6071e31a7949d','v1:c3b7b197e15e6d0813c491eacdea1f15:698383064d0f88a4b0e08479ed39301281ae6c95f15465e6e78bc1074e3330bb8153e689264fdd712ef221550fcd47eba8407c8cb2b432de55ac8a0236497eb8abc943c814e65d7c8cc9d4be6db73fe1a111fccca9d0e5b1f7aa1bbac44b9fe9f1ff00bbe7ef521cd54adc46e5be6ad9fdd6a8aad74e0ec4cd6149fd244925d223221dc68c5d4c18e2929222eeaf94733df176fbaac1742c637c04507db00166e130ad34722627ccde4e88d32020e2021da6aef2325c6e7dba93ab9d15c348f7a1521d796085fc8fe89fbdf012c0fc35366623f8babd5368b496b0005016fbd26545199be6e62fa88bbb05c3649625e45d431113c1e10dceef5318af6862760c:31124165aea1941c86017c0538f20921',NULL,NULL,NULL,'2025-12-14 17:38:39.455000','2025-12-14 17:38:39.455000','2025-12-14 17:38:39.455000',NULL,NULL,NULL);
/*!40000 ALTER TABLE `strapi_api_tokens` ENABLE KEYS */;
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
