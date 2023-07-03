-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 02, 2023 at 02:52 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `finalproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `balance` decimal(10,2) NOT NULL DEFAULT 0.00,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id`, `user_id`, `balance`, `created_at`, `updated_at`) VALUES
(2, 9, '0.00', '2023-06-29 07:53:38', '2023-06-29 07:53:38');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `staff_level_id` bigint(20) UNSIGNED DEFAULT NULL,
  `task_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `user_id`, `staff_level_id`, `task_id`, `created_at`, `updated_at`) VALUES
(3, 13, NULL, NULL, '2023-06-29 12:07:40', '2023-06-29 12:07:40'),
(5, 16, NULL, NULL, '2023-06-30 07:47:41', '2023-06-30 07:47:41'),
(6, 17, NULL, NULL, '2023-06-30 09:05:32', '2023-06-30 09:05:32'),
(7, 19, NULL, NULL, '2023-06-30 09:35:47', '2023-06-30 09:35:47'),
(8, 21, NULL, NULL, '2023-06-30 10:50:20', '2023-06-30 10:50:20'),
(11, 24, NULL, NULL, '2023-06-30 11:42:03', '2023-06-30 11:42:03'),
(24, 37, NULL, NULL, '2023-06-30 20:35:57', '2023-06-30 20:35:57'),
(25, 41, NULL, NULL, '2023-07-01 06:53:50', '2023-07-01 06:53:50');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `freelancers`
--

CREATE TABLE `freelancers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `rate` enum('0','1','2','3','4','5') NOT NULL DEFAULT '0',
  `Status` tinyint(1) DEFAULT 0,
  `balance` decimal(10,2) NOT NULL DEFAULT 0.00,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `task_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `freelancers`
--

INSERT INTO `freelancers` (`id`, `rate`, `Status`, `balance`, `user_id`, `task_id`, `created_at`, `updated_at`) VALUES
(2, '0', 1, '0.00', 10, NULL, '2023-06-29 07:53:47', '2023-06-29 07:53:47'),
(4, '0', 1, '0.00', 38, NULL, '2023-06-30 20:39:59', '2023-06-30 20:39:59'),
(5, '0', 1, '0.00', 39, NULL, '2023-06-30 20:59:44', '2023-06-30 20:59:44');

-- --------------------------------------------------------

--
-- Table structure for table `managers`
--

CREATE TABLE `managers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `staff_level_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `managers`
--

INSERT INTO `managers` (`id`, `user_id`, `staff_level_id`, `created_at`, `updated_at`) VALUES
(1, 1, NULL, '2023-06-28 17:19:35', '2023-06-28 17:19:35'),
(3, 6, NULL, '2023-06-28 17:20:57', '2023-06-28 17:20:57'),
(4, 7, NULL, '2023-06-29 07:52:57', '2023-06-29 07:52:57'),
(5, 8, NULL, '2023-06-29 07:53:11', '2023-06-29 07:53:11'),
(6, 40, NULL, '2023-06-30 21:16:43', '2023-06-30 21:16:43');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_06_02_142734_create_clients_table', 1),
(6, '2023_06_03_185609_create_staff_levels_table', 1),
(7, '2023_06_04_184059_create_managers_table', 1),
(8, '2023_06_05_142916_create_projects_table', 1),
(9, '2023_06_06_063906_create_tasks_table', 1),
(10, '2023_06_07_182350_create_freelancers_table', 1),
(11, '2023_06_13_070823_create_skills_table', 1),
(12, '2023_06_13_071340_create_user_skill_table', 1),
(13, '2023_06_16_145915_create_employees_table', 1),
(14, '2023_06_20_122926_create_payments_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `payment_id` varchar(255) NOT NULL,
  `payee_id` varchar(255) NOT NULL,
  `payee_email` varchar(255) NOT NULL,
  `amount` double(10,2) NOT NULL,
  `currency` varchar(255) NOT NULL,
  `payment_method` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'token-name', 'b5b74a0ea1e59771f925927d7d98f8da9019d4f186219c369be1c364786934f3', '{\"user_id\":1,\"email\":\"admin@gmail.com\",\"name\":\"ahmed\",\"role\":\"Admin\"}', NULL, NULL, '2023-06-28 17:19:34', '2023-06-28 17:19:34'),
(2, 'App\\Models\\User', 2, 'token-name', 'e6d5219732f5cf7257c3381dcf0eb1d83b3a1a82acd79bb42d347d9f121a2ad4', '{\"user_id\":2,\"email\":\"client123@gmail.com\",\"name\":\"ahmed\",\"role\":\"Client\"}', NULL, NULL, '2023-06-28 17:19:56', '2023-06-28 17:19:56'),
(3, 'App\\Models\\User', 3, 'token-name', 'd3cd990e94029b644793c348575659d80432790b12c44cc2eb334942d8fefb88', '{\"user_id\":3,\"email\":\"omar2@gmail.com\",\"name\":\"omar\",\"role\":\"Freelancer\"}', NULL, NULL, '2023-06-28 17:20:09', '2023-06-28 17:20:09'),
(4, 'App\\Models\\User', 4, 'token-name', '181026f1bf30e8063327f4c8d5fcfd42b66746a3e490851e30797af2e1ef0b2b', '{\"user_id\":4,\"email\":\"Employeeddddddddddddd@gmail.com\",\"name\":\"ahmed\",\"role\":\"Employee\"}', NULL, NULL, '2023-06-28 17:20:31', '2023-06-28 17:20:31'),
(5, 'App\\Models\\User', 5, 'token-name', '561879ad15442dc9467be04a9c7b52a51bf60e1bd94bec01ecd76eb27f3dea9f', '{\"user_id\":5,\"email\":\"managferrrr@gmail.com\",\"name\":\"ahmed\",\"role\":\"ProductManager\"}', NULL, NULL, '2023-06-28 17:20:45', '2023-06-28 17:20:45'),
(6, 'App\\Models\\User', 6, 'token-name', '58cb434c69c29a8ad522e97a6f580d9bd726fe6ee55420eeffe660f6fdccdee7', '{\"user_id\":6,\"email\":\"omarOwner1225@gmail.com\",\"name\":\"ahmed\",\"role\":\"ProductOwner\"}', NULL, NULL, '2023-06-28 17:20:57', '2023-06-28 17:20:57'),
(7, 'App\\Models\\User', 7, 'token-name', 'f2711fa1533ee7183b5f5a976a196234216e76459445e47aecdcdfb7363e1686', '{\"user_id\":7,\"email\":\"admin2@gmail.com\",\"name\":\"ahmed2\",\"role\":\"Admin\"}', '2023-07-01 18:38:28', NULL, '2023-06-29 07:52:57', '2023-07-01 18:38:28'),
(8, 'App\\Models\\User', 8, 'token-name', '2ede99546b817967b37c4f9b8531527ee78b7943376b7d2c2f086e3840acd80b', '{\"user_id\":8,\"email\":\"omarOwner125@gmail.com\",\"name\":\"ahmed\",\"role\":\"ProductOwner\"}', NULL, NULL, '2023-06-29 07:53:11', '2023-06-29 07:53:11'),
(9, 'App\\Models\\User', 9, 'token-name', '3a70c32821680947479bb1ef41948cbf95813b274d5bd4e17e1702f795e8abec', '{\"user_id\":9,\"email\":\"client33@gmail.com\",\"name\":\"mohamed\",\"role\":\"Client\"}', NULL, NULL, '2023-06-29 07:53:38', '2023-06-29 07:53:38'),
(10, 'App\\Models\\User', 10, 'token-name', 'db0b5e283a2e4bfce8de48252729a74d61972a7cdcf908dff84c4ebcfe241ed8', '{\"user_id\":10,\"email\":\"omar255@gmail.com\",\"name\":\"omar\",\"role\":\"Freelancer\"}', '2023-06-29 17:28:37', NULL, '2023-06-29 07:53:47', '2023-06-29 17:28:37'),
(11, 'App\\Models\\User', 11, 'token-name', '8717c87c18437c3e03969e5ab05d2f4b8acc787b787ac23b303b6add6ac5c9d7', '{\"user_id\":11,\"email\":\"Employeeddddd77@gmail.com\",\"name\":\"ahmed\",\"role\":\"Employee\"}', NULL, NULL, '2023-06-29 07:54:00', '2023-06-29 07:54:00'),
(12, 'App\\Models\\User', 12, 'token-name', 'e7b0dd72fed8a08c8c46a99867e5c6e305e000411a0b0e1924ac9612d1f4bdec', '{\"user_id\":12,\"email\":\"client3773@gmail.com\",\"name\":\"mohamed\",\"role\":\"Client\"}', '2023-06-29 20:25:32', NULL, '2023-06-29 11:32:16', '2023-06-29 20:25:32'),
(13, 'App\\Models\\User', 13, 'token-name', '993c2eb9adb09378a75b8baf5d716e3a5748083fa80a183ac1316e7426f785bf', '{\"user_id\":13,\"email\":\"Emplo77@gmail.com\",\"name\":\"ahmed\",\"role\":\"Employee\"}', NULL, NULL, '2023-06-29 12:07:40', '2023-06-29 12:07:40'),
(14, 'App\\Models\\User', 14, 'token-name', '2196e91727b46d4e3c6fde9f06e5539be5664534a474375323eba0eab1f4029c', '{\"user_id\":14,\"email\":\"omar7775@gmail.com\",\"name\":\"omar66\",\"role\":\"Freelancer\"}', '2023-06-29 17:30:42', NULL, '2023-06-29 17:29:14', '2023-06-29 17:30:42'),
(15, 'App\\Models\\User', 15, 'token-name', 'b0bec16cfc72e0267d9820a889e8e7ea65330ae33ebcec613adbf2eb2bb7a5d1', '{\"user_id\":15,\"email\":\"Emplo66@gmail.com\",\"name\":\"mohamed\",\"role\":\"Employee\"}', NULL, NULL, '2023-06-29 21:40:11', '2023-06-29 21:40:11'),
(16, 'App\\Models\\User', 16, 'token-name', 'db2f9675a177fe61946e2132d9bd1733657cecbee7cf17a737b422fdbd178383', '{\"user_id\":16,\"email\":\"Emplo66@gmail.com\",\"name\":\"mohamed\",\"role\":\"Employee\"}', NULL, NULL, '2023-06-30 07:47:41', '2023-06-30 07:47:41'),
(17, 'App\\Models\\User', 17, 'token-name', '0921f012b2ca3e32657a6f77053a558d250a712d0d040eee58e9cb139469259a', '{\"user_id\":17,\"email\":\"Emplopppp996@gmail.com\",\"name\":\"mohamed\",\"role\":\"Employee\"}', NULL, NULL, '2023-06-30 09:05:32', '2023-06-30 09:05:32'),
(18, 'App\\Models\\User', 19, 'token-name', 'e38010e38c51c6d9a9000cd61b3e1a53192caab13df9458d880e6dcd5d82c421', '{\"user_id\":19,\"email\":\"Empppp996@gmail.com\",\"name\":\"mohamed\",\"role\":\"Employee\"}', NULL, NULL, '2023-06-30 09:35:47', '2023-06-30 09:35:47'),
(19, 'App\\Models\\User', 21, 'token-name', '16f5d8c886388ae5eebed76bdd33c4466c46c2fdbed1aee10ac754421df31f01', '{\"user_id\":21,\"email\":\"Emp96@gmail.com\",\"name\":\"mohamed\",\"role\":\"Employee\"}', NULL, NULL, '2023-06-30 10:50:20', '2023-06-30 10:50:20'),
(20, 'App\\Models\\User', 22, 'token-name', '9d3b9930a425218ce94b372a34859b586c7c1d487fb84a3da73db8e5e74cf0ff', '{\"user_id\":22,\"email\":\"norhank52667@gmail.com\",\"name\":\"iti99\",\"role\":\"Employee\"}', NULL, NULL, '2023-06-30 11:39:08', '2023-06-30 11:39:08'),
(21, 'App\\Models\\User', 23, 'token-name', '8f0ffb631779c00283058c2794540ab10cfe31d7daa3e55c14dc9d3e30dc85fd', '{\"user_id\":23,\"email\":\"norhank59927@gmail.com\",\"name\":\"iti99\",\"role\":\"Employee\"}', NULL, NULL, '2023-06-30 11:40:43', '2023-06-30 11:40:43'),
(22, 'App\\Models\\User', 24, 'token-name', '52e0438bfabade65ede65a78b4920a89803c8d86e33d569e6786dfec264a96ed', '{\"user_id\":24,\"email\":\"norhank52997@gmail.com\",\"name\":\"iti99\",\"role\":\"Employee\"}', NULL, NULL, '2023-06-30 11:42:03', '2023-06-30 11:42:03'),
(23, 'App\\Models\\User', 25, 'token-name', '03f16891b96e29b85359c4cde89748d07730435edc5283eb536348f288509bea', '{\"user_id\":25,\"email\":\"nor55@gmail.com\",\"name\":\"iti99\",\"role\":\"Employee\"}', NULL, NULL, '2023-06-30 11:43:51', '2023-06-30 11:43:51'),
(24, 'App\\Models\\User', 26, 'token-name', '4b8d9e30109c35619417e06921919e59b54c06ba6dec0e16d9e7a00bcd76bf16', '{\"user_id\":26,\"email\":\"norhan55@gmail.com\",\"name\":\"iti99\",\"role\":\"Employee\"}', NULL, NULL, '2023-06-30 11:44:33', '2023-06-30 11:44:33'),
(25, 'App\\Models\\User', 27, 'token-name', '4de43f6af9c8097b95e767e5671b80631226c36a09a8535945b8be2bdc19d9f6', '{\"user_id\":27,\"email\":\"norhan7@gmail.com\",\"name\":\"iti99\",\"role\":\"Employee\"}', NULL, NULL, '2023-06-30 11:49:36', '2023-06-30 11:49:36'),
(26, 'App\\Models\\User', 28, 'token-name', '039335db0ad8a42567781b4b32ba2423962c809dc11746407fabd4b02259fd24', '{\"user_id\":28,\"email\":\"norhank9@gmail.com\",\"name\":\"iti99\",\"role\":\"Employee\"}', NULL, NULL, '2023-06-30 11:57:10', '2023-06-30 11:57:10'),
(27, 'App\\Models\\User', 29, 'token-name', 'ae16713621e0e0b9a1861515b13399004e46b56132405302264193795981318b', '{\"user_id\":29,\"email\":\"norh55@gmail.com\",\"name\":\"iti99\",\"role\":\"Employee\"}', NULL, NULL, '2023-06-30 12:05:30', '2023-06-30 12:05:30'),
(28, 'App\\Models\\User', 30, 'token-name', '9410cbddc8876535523f4fd2f6f089a9f92feb3ee1be82e4d85637d4ee7338f2', '{\"user_id\":30,\"email\":\"nor877@gmail.com\",\"name\":\"iti99\",\"role\":\"Employee\"}', NULL, NULL, '2023-06-30 12:12:02', '2023-06-30 12:12:02'),
(29, 'App\\Models\\User', 31, 'token-name', '16a7e4f8acec0dd8e883ee41ea3bc8454e2bc5b53c75733a6a99819558dd9ad6', '{\"user_id\":31,\"email\":\"nok5559@gmail.com\",\"name\":\"iti99\",\"role\":\"Employee\"}', NULL, NULL, '2023-06-30 12:52:07', '2023-06-30 12:52:07'),
(30, 'App\\Models\\User', 32, 'token-name', '7495e334141dc3443e02292c80f689e0415ed0c3aa9e95883fbfdce7c3c966b9', '{\"user_id\":32,\"email\":\"norhan111117@gmail.com\",\"name\":\"iti99\",\"role\":\"Employee\"}', NULL, NULL, '2023-06-30 12:57:19', '2023-06-30 12:57:19'),
(31, 'App\\Models\\User', 33, 'token-name', '59e1e46da874846ba9913575f896d27a6e69f5eea89f40066b3443186c33b43a', '{\"user_id\":33,\"email\":\"Emp33333@gmail.com\",\"name\":\"mohamed\",\"role\":\"Employee\"}', NULL, NULL, '2023-06-30 14:02:30', '2023-06-30 14:02:30'),
(32, 'App\\Models\\User', 34, 'token-name', '51e55862847dd690d86003e415facdf3d71e4b404673535a4cfdd677d4829762', '{\"user_id\":34,\"email\":\"Em555555553@gmail.com\",\"name\":\"mohamed\",\"role\":\"Employee\"}', NULL, NULL, '2023-06-30 14:04:20', '2023-06-30 14:04:20'),
(33, 'App\\Models\\User', 35, 'token-name', '5c5a835d24b9496f06394a298c278b615e6f1759195f51406c75f19d4981a21a', '{\"user_id\":35,\"email\":\"developer3@gmail.com\",\"name\":\"mohamed\",\"role\":\"Employee\"}', NULL, NULL, '2023-06-30 18:38:47', '2023-06-30 18:38:47'),
(34, 'App\\Models\\User', 36, 'token-name', '454bb63d4c2c0c47554eeae48e083c3a07ab1745419d4e90f002849f00306396', '{\"user_id\":36,\"email\":\"developer35@gmail.com\",\"name\":\"AHMED\",\"role\":\"Employee\"}', NULL, NULL, '2023-06-30 20:28:57', '2023-06-30 20:28:57'),
(35, 'App\\Models\\User', 37, 'token-name', '5882251e9ab85f055f7b9c32c8ca769885b2c8bbd253e63f6f1eea52f4160e6c', '{\"user_id\":37,\"email\":\"norooo@gmail.com\",\"name\":\"iti99\",\"role\":\"Employee\"}', NULL, NULL, '2023-06-30 20:35:57', '2023-06-30 20:35:57'),
(36, 'App\\Models\\User', 38, 'token-name', '15811418d7524ab1471d6d44231a4908074829bb1a8550de03e4889436352034', '{\"user_id\":38,\"email\":\"omar111115@gmail.com\",\"name\":\"omar66\",\"role\":\"Freelancer\"}', NULL, NULL, '2023-06-30 20:39:59', '2023-06-30 20:39:59'),
(37, 'App\\Models\\User', 39, 'token-name', '4dec9cd5239894f71c066315e5dda43316a7890e880f0ead92191a24484f6633', '{\"user_id\":39,\"email\":\"omar66665@gmail.com\",\"name\":\"omar66\",\"role\":\"Freelancer\"}', NULL, NULL, '2023-06-30 20:59:44', '2023-06-30 20:59:44'),
(38, 'App\\Models\\User', 40, 'token-name', '701fd86a45ad681735cb4bdaf3520d311ad2f1a5ec82a21ae0084b26cba1e553', '{\"user_id\":40,\"email\":\"norhan363@gmail.com\",\"name\":\"amr khaled\",\"role\":\"ProductManager\"}', NULL, NULL, '2023-06-30 21:16:43', '2023-06-30 21:16:43'),
(39, 'App\\Models\\User', 41, 'token-name', 'd2d8ff88e24e46f96ea898abc0e0c956c12453e58da8b7a95ec07a4747ddb46c', '{\"user_id\":41,\"email\":\"admin992@gmail.com\",\"name\":\"Norhan Khaled\",\"role\":\"Employee\"}', NULL, NULL, '2023-07-01 06:53:49', '2023-07-01 06:53:49'),
(40, 'App\\Models\\User', 42, 'token-name', 'd18cab8dbd26214bc694b764e5043fb846d59b0cfd0bca5e9159832a3d253554', '{\"user_id\":42,\"email\":\"admin99@gmail.com\",\"name\":\"\\u0646\\u0648\\u0631\\u0647\\u0627\\u0646 \\u062e\\u0627\\u0644\\u062f \\u0645\\u062d\\u0645\\u062f \\u0639\\u0628\\u062f\\u0627\\u0644\\u0639\\u0627\\u0644\",\"role\":\"Employee\"}', NULL, NULL, '2023-07-01 06:57:24', '2023-07-01 06:57:24');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `ProductOwner_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ProductManager_id` bigint(20) UNSIGNED DEFAULT NULL,
  `project_type` enum('mileStone','byProject') NOT NULL DEFAULT 'mileStone',
  `project_title` varchar(255) NOT NULL,
  `project_description` varchar(255) NOT NULL,
  `project_start` date NOT NULL,
  `project_end` date NOT NULL,
  `project_status` enum('notStarted','inProgress','completed') NOT NULL DEFAULT 'notStarted',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE `skills` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `staff_levels`
--

CREATE TABLE `staff_levels` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `salary` decimal(10,2) NOT NULL DEFAULT 0.00,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `project_id` bigint(20) UNSIGNED NOT NULL,
  `product_manager_id` bigint(20) UNSIGNED DEFAULT NULL,
  `task_title` varchar(255) NOT NULL,
  `task_description` text NOT NULL,
  `task_start` datetime NOT NULL,
  `task_end` datetime NOT NULL,
  `task_status` enum('notStarted','inProgress','completed') NOT NULL DEFAULT 'notStarted',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `nationalID` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `joinedDate` date NOT NULL,
  `endDate` date DEFAULT NULL,
  `profilePic` varchar(255) DEFAULT 'user.png',
  `role` enum('Admin','ProductManager','ProductOwner','Freelancer','Client','Employee') NOT NULL DEFAULT 'Client',
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `nationalID`, `phone`, `address`, `country`, `joinedDate`, `endDate`, `profilePic`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'ahmed', 'admin@gmail.com', NULL, '$2y$10$fQV1g/4oC1lP675HStJv/e2FiTyTGBgd7qYf1dD4pmL2/iHzhewKC', '65423198231865', '11111111111', 'assiut', 'Egypt', '2023-06-09', '2023-06-30', 'user.png', 'Admin', NULL, '2023-06-28 17:19:32', '2023-06-28 17:19:32'),
(6, 'ahmed', 'omarOwner1225@gmail.com', NULL, '$2y$10$0AYv7oRKe3IbiETvhg/CkeK4eAE5tw5gLve9gMsEy3u52aUGpcA8y', '22222222222222222', '11111111111', 'assiut', 'Egypt', '2023-06-09', '2023-06-30', 'user.png', 'ProductOwner', NULL, '2023-06-28 17:20:57', '2023-06-28 17:20:57'),
(7, 'mohamed5', 'admin2@gmail.com', NULL, '$2y$10$gR84ToMZE1bThiPCdT5C1u/YUOt/qXrHk4aQvDek8lJ43ANG4MWT.', '123456789101213', '021561255555555', 'assiut', 'Egypt', '2002-12-31', '2010-12-31', 'user.png', 'Admin', NULL, '2023-06-29 07:52:57', '2023-06-29 14:58:26'),
(8, 'ahmed', 'omarOwner125@gmail.com', NULL, '$2y$10$8B9QF6z62yxYB95/4ITwtu0HcJb3reEdk18lGNyiY4NWh/R2m82wC', '22222222222222222', '11111111111', 'assiut', 'Egypt', '2023-06-09', '2023-06-30', 'user.png', 'ProductOwner', NULL, '2023-06-29 07:53:11', '2023-06-29 07:53:11'),
(9, 'mohamed', 'client33@gmail.com', NULL, '$2y$10$B30Lz1G1X/V9f2iA4pyjmeazglZIi9ui7q3bGv4GVHmXAGLPGAOMe', '1234567895462313', '11111111111', 'assiut', 'Egypt', '2023-06-09', '2023-06-30', 'user.png', 'Client', NULL, '2023-06-29 07:53:38', '2023-06-29 07:53:38'),
(10, 'omar', 'omar255@gmail.com', NULL, '$2y$10$y6AiQ54LiIBAOU5FP20QYO1Yyt9Hzw5CELjgjBIip2GTog3IwZslu', '111111132352135156', '11111111111', 'assiut', 'UAE', '2023-06-09', '2023-06-30', 'user.png', 'Freelancer', NULL, '2023-06-29 07:53:47', '2023-06-29 07:53:47'),
(13, 'ahmed', 'Emplo77@gmail.com', NULL, '$2y$10$TbJSwiKQQs797f..YsQl4O2RL88O/zSM4a217rfAvrNS5IpEE338i', '11111112346546465', '11111111111', 'assiut', 'asd', '2023-06-09', '2023-06-30', 'user.png', 'Employee', NULL, '2023-06-29 12:07:40', '2023-06-29 12:07:40'),
(16, 'mohamed', 'Emplo66@gmail.com', NULL, '$2y$10$wVlLPr/bg7wtwrmYceXunOcNAoYDDpE1UgQipq3cqwk1banDiaGs6', '11111112346546465', '11111111111', 'assiut', 'asd', '2023-06-09', '2023-06-30', 'user.png', 'Employee', NULL, '2023-06-30 07:47:41', '2023-06-30 07:47:41'),
(17, 'mohamed', 'Emplopppp996@gmail.com', NULL, '$2y$10$kYV.VfKG9S.NQAP9DQhri.pF9ZG4.7jL3hoteWAewvZIPBHkGWMX2', '11111112346546465', '11111111111', 'assiut', 'asd', '2023-06-09', '2023-06-30', 'user.png', 'Employee', NULL, '2023-06-30 09:05:32', '2023-06-30 09:05:32'),
(18, 'iti99', 'norhank527@gmail.com', NULL, '$2y$10$Q2YNFMcKjxdr80TNybyveOph4Cqk/41fpUTg3fCNnDF.GH3oY3E7y', '21546852154875548', '01003244268', '31 st Mohamed Ali', 'Egypt', '2055-02-05', '2099-02-05', 'user.png', 'Employee', NULL, '2023-06-30 09:08:25', '2023-06-30 09:08:25'),
(19, 'mohamed', 'Empppp996@gmail.com', NULL, '$2y$10$f4MloLB7cD/SEA3cZQW6fegDr5hvMMEphZi8GsBmdFRZ.OVhibISe', '11111112346546465', '11111111111', 'assiut', 'asd', '2023-06-09', '2023-06-30', 'user.png', 'Employee', NULL, '2023-06-30 09:35:47', '2023-06-30 09:35:47'),
(20, 'iti99', 'norhank566@gmail.com', NULL, '$2y$10$g88wF5QUUSi1vRucasui2.4O20maq1KFEu2iX9OuZycCrRC.spKEC', '123456789099999', '01003244268', '31 st Mohamed Ali', 'Egypt', '2005-02-05', '2022-02-22', 'user.png', 'Employee', NULL, '2023-06-30 09:39:34', '2023-06-30 09:39:34'),
(21, 'mohamed', 'Emp96@gmail.com', NULL, '$2y$10$GCZMuM5a6UGFVPvWCMGnouPoiwRcPh7Ll8YytigLO7l0/f41s60Aa', '11111112346546465', '11111111111', 'assiut', 'asd', '2023-06-09', '2023-06-30', 'user.png', 'Employee', NULL, '2023-06-30 10:50:20', '2023-06-30 10:50:20'),
(24, 'iti99', 'norhank52997@gmail.com', NULL, '$2y$10$l00M3SnE1JjOaUdxdJkldeNVvpQJeEiASlsGK/9bNA72G4YCPM1Na', '1.23456787652665665e+20', '01003244268', '31 st Mohamed Ali', 'Egypt', '2005-01-01', '2007-02-02', 'user.png', 'Employee', NULL, '2023-06-30 11:42:03', '2023-06-30 11:42:03'),
(37, 'iti99', 'norooo@gmail.com', NULL, '$2y$10$r5DKXYZGUQhps24N2rTVsev3OUxKTjgRVcVYbHQ0rOMCdfE87mJ26', '345678909876543', '01003244268', '31 st Mohamed Ali', 'Egypt', '2005-01-01', '2025-05-05', 'user.png', 'Employee', NULL, '2023-06-30 20:35:57', '2023-06-30 20:35:57'),
(38, 'omar66', 'omar111115@gmail.com', NULL, '$2y$10$1D3YYJmlMqwPsjkJFNXyM.Xr4MxKI1HzqZ2VaZshW0CMdhSYsVTo.', '111111132352135156', '11111111111', 'assiut', 'UAE', '2023-06-09', '2023-06-30', 'user.png', 'Freelancer', NULL, '2023-06-30 20:39:59', '2023-06-30 20:39:59'),
(39, 'omar66', 'omar66665@gmail.com', NULL, '$2y$10$1xaEi3mj.kb.Jvy5DgZDweBoeyi6hgd24gSqLhQDCxvuRudpJH9lS', '111111132352135156', '11111111111', 'assiut', 'UAE', '2023-06-09', '2023-06-30', 'user.png', 'Freelancer', NULL, '2023-06-30 20:59:44', '2023-06-30 20:59:44'),
(40, 'amr khaled', 'norhan363@gmail.com', NULL, '$2y$10$0gG9TD9XdGfaXyQ9LpSoW.tlTi9LbAVm0kywThIHqH0zfn/juVgQ2', '0987654356789045', '01003244268', '31 st Mohamed Ali', 'Egypt', '2022-02-02', '2023-02-09', 'user.png', 'ProductManager', NULL, '2023-06-30 21:16:43', '2023-06-30 21:16:43'),
(41, 'Norhan Khaled', 'admin992@gmail.com', NULL, '$2y$10$mwS8gth1PORQG8rMkdBDm.6ojXta9fcrBNhT.8oiBbLiH2Wcnrd8y', '12345678903456789', '088208871166', '31 st Mohamed Ali', 'Egypt', '2000-01-01', '2019-06-11', 'user.png', 'Employee', NULL, '2023-07-01 06:53:49', '2023-07-01 06:53:49');

-- --------------------------------------------------------

--
-- Table structure for table `user_skill`
--

CREATE TABLE `user_skill` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `skill_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `clients_user_id_foreign` (`user_id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`),
  ADD KEY `employees_user_id_foreign` (`user_id`),
  ADD KEY `employees_staff_level_id_foreign` (`staff_level_id`),
  ADD KEY `employees_task_id_foreign` (`task_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `freelancers`
--
ALTER TABLE `freelancers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `freelancers_user_id_foreign` (`user_id`),
  ADD KEY `freelancers_task_id_foreign` (`task_id`);

--
-- Indexes for table `managers`
--
ALTER TABLE `managers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `managers_user_id_foreign` (`user_id`),
  ADD KEY `managers_staff_level_id_foreign` (`staff_level_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `projects_client_id_foreign` (`client_id`),
  ADD KEY `projects_productowner_id_foreign` (`ProductOwner_id`),
  ADD KEY `projects_productmanager_id_foreign` (`ProductManager_id`),
  ADD KEY `projects_project_title_index` (`project_title`);

--
-- Indexes for table `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id`),
  ADD KEY `skills_name_index` (`name`);

--
-- Indexes for table `staff_levels`
--
ALTER TABLE `staff_levels`
  ADD PRIMARY KEY (`id`),
  ADD KEY `staff_levels_name_index` (`name`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tasks_project_id_foreign` (`project_id`),
  ADD KEY `tasks_product_manager_id_foreign` (`product_manager_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_name_index` (`name`);

--
-- Indexes for table `user_skill`
--
ALTER TABLE `user_skill`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_skill_user_id_foreign` (`user_id`),
  ADD KEY `user_skill_skill_id_foreign` (`skill_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `freelancers`
--
ALTER TABLE `freelancers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `managers`
--
ALTER TABLE `managers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `skills`
--
ALTER TABLE `skills`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `staff_levels`
--
ALTER TABLE `staff_levels`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `user_skill`
--
ALTER TABLE `user_skill`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `clients`
--
ALTER TABLE `clients`
  ADD CONSTRAINT `clients_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `employees`
--
ALTER TABLE `employees`
  ADD CONSTRAINT `employees_staff_level_id_foreign` FOREIGN KEY (`staff_level_id`) REFERENCES `staff_levels` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `employees_task_id_foreign` FOREIGN KEY (`task_id`) REFERENCES `tasks` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `employees_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `freelancers`
--
ALTER TABLE `freelancers`
  ADD CONSTRAINT `freelancers_task_id_foreign` FOREIGN KEY (`task_id`) REFERENCES `tasks` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `freelancers_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `managers`
--
ALTER TABLE `managers`
  ADD CONSTRAINT `managers_staff_level_id_foreign` FOREIGN KEY (`staff_level_id`) REFERENCES `staff_levels` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `managers_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `projects`
--
ALTER TABLE `projects`
  ADD CONSTRAINT `projects_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `projects_productmanager_id_foreign` FOREIGN KEY (`ProductManager_id`) REFERENCES `managers` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `projects_productowner_id_foreign` FOREIGN KEY (`ProductOwner_id`) REFERENCES `managers` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_product_manager_id_foreign` FOREIGN KEY (`product_manager_id`) REFERENCES `managers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `tasks_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_skill`
--
ALTER TABLE `user_skill`
  ADD CONSTRAINT `user_skill_skill_id_foreign` FOREIGN KEY (`skill_id`) REFERENCES `skills` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_skill_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
