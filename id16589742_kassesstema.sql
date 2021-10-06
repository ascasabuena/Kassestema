-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 06, 2021 at 07:45 AM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `id16589742_kassesstema`
--

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `text_message` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `date_comment` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`id`, `name`, `text_message`, `date_comment`) VALUES
(16, 'Cha', 'Hi ebriwannnnn <3 ', '2021-04-23 19:29:24'),
(17, 'Aldrin', 'hello pooo <3', '2021-04-23 19:33:28'),
(18, 'Giorno Giovanna', 'Ora ora ora ora ora ora ora', '2021-04-24 19:30:16'),
(19, 'Charlotte', 'Jello jello', '2021-04-30 23:25:23'),
(20, 'Team Sirius', 'Kassesstema!', '2021-05-01 20:26:25'),
(21, 'nine', 'galing nyo naman hahahhahahha', '2021-05-07 01:50:46'),
(22, 'Kassesstema', 'Asssess', '2021-05-07 20:12:29'),
(23, 'Kassesstema', 'Assessing Every Stem Students! ', '2021-05-07 21:36:22');

-- --------------------------------------------------------

--
-- Table structure for table `submitted`
--

CREATE TABLE `submitted` (
  `id` int(11) NOT NULL,
  `date_submit` datetime NOT NULL,
  `top_choice` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `submitted`
--

INSERT INTO `submitted` (`id`, `date_submit`, `top_choice`) VALUES
(7, '2021-04-13 16:40:19', 'Geodetic Engineering (BSGE), Geological Engineering (BSGeoE), and Mining Engineering'),
(8, '2021-04-13 17:08:53', 'Environmental Science (BSES)'),
(9, '2021-04-13 17:09:09', 'Geodetic Engineering (BSGE), Geological Engineering (BSGeoE), and Mining Engineering'),
(10, '2021-04-13 17:10:32', 'Geodetic Engineering (BSGE), Geological Engineering (BSGeoE), and Mining Engineering'),
(11, '2021-04-13 17:10:50', 'Environmental Science (BSES)'),
(12, '2021-04-15 09:34:37', 'Aeronautical Engineering (BS AeroE)'),
(13, '2021-04-18 22:55:17', 'Petroleum Engineering (BSPetE)'),
(14, '2021-04-18 22:57:50', 'Petroleum Engineering (BSPetE)'),
(15, '2021-04-18 23:03:37', 'Petroleum Engineering (BSPetE)'),
(16, '2021-04-18 23:04:52', 'Petroleum Engineering (BSPetE)'),
(17, '2021-04-18 23:08:58', 'Petroleum Engineering (BSPetE)'),
(18, '2021-04-18 23:16:58', 'Petroleum Engineering (BSPetE)'),
(19, '2021-04-18 23:23:18', 'Petroleum Engineering (BSPetE)'),
(20, '2021-04-18 23:26:21', 'Petroleum Engineering (BSPetE)'),
(21, '2021-04-18 23:44:15', 'Petroleum Engineering (BSPetE)'),
(22, '2021-04-20 09:20:42', 'Petroleum Engineering (BSPetE)'),
(23, '2021-04-20 09:23:51', 'Petroleum Engineering (BSPetE)'),
(24, '2021-04-20 09:25:30', 'Petroleum Engineering (BSPetE)'),
(25, '2021-04-20 09:28:42', 'Molecular Biology (BS Molecular Biology)'),
(26, '2021-04-22 14:30:16', 'Petroleum Engineering (BSPetE)'),
(27, '2021-04-22 14:32:10', 'Environmental Science (BSES)'),
(28, '2021-04-22 14:32:41', 'Petroleum Engineering (BSPetE)'),
(29, '2021-04-22 14:35:09', 'Petroleum Engineering (BSPetE)'),
(30, '2021-04-22 14:39:52', 'Petroleum Engineering (BSPetE)'),
(31, '2021-04-22 14:49:15', 'Petroleum Engineering (BSPetE)'),
(32, '2021-04-22 14:49:19', 'Petroleum Engineering (BSPetE)'),
(33, '2021-04-22 14:54:42', 'Petroleum Engineering (BSPetE)'),
(34, '2021-04-22 14:55:20', 'Petroleum Engineering (BSPetE)'),
(35, '2021-04-22 14:58:28', 'Petroleum Engineering (BSPetE)'),
(36, '2021-04-22 14:58:51', 'Petroleum Engineering (BSPetE)'),
(37, '2021-04-22 15:17:23', 'Petroleum Engineering (BSPetE)'),
(38, '2021-04-22 15:26:47', 'Environmental Science (BSES)'),
(39, '2021-04-22 17:18:22', 'Petroleum Engineering (BSPetE)'),
(40, '2021-04-23 09:28:51', 'Environmental Science (BSES)'),
(41, '2021-04-23 09:33:09', 'Computer Science (BSCS)'),
(42, '2021-04-23 11:21:43', 'Petroleum Engineering (BSPetE)'),
(43, '2021-04-23 11:22:43', 'Petroleum Engineering (BSPetE)'),
(44, '2021-04-23 11:28:03', 'Chemistry (BS Chemistry)'),
(45, '2021-04-23 11:28:48', 'Medical Technology (BS Med Tech)'),
(46, '2021-04-23 11:33:37', 'Medical Technology (BS Med Tech)'),
(47, '2021-04-23 12:09:55', 'Ceramic Engineering (BSCerE)'),
(48, '2021-04-23 12:32:07', 'Occupational Therapy (BSOT)'),
(49, '2021-04-23 17:40:39', 'Civil engineering (BSCE)'),
(50, '2021-04-23 17:42:51', 'Environmental Science (BSES)'),
(51, '2021-04-24 06:07:16', 'Aeronautical Engineering (BS AeroE)'),
(52, '2021-04-24 06:10:29', 'Materials Engineering (BSMatE)'),
(53, '2021-04-24 06:48:56', 'Environmental Science (BSES)'),
(54, '2021-04-24 07:09:47', 'Environmental Science (BSES)'),
(55, '2021-04-24 07:12:21', 'Metallurgical Engineering (BSMetE)'),
(56, '2021-04-24 07:23:58', 'Food Technology (BS Food Technology)'),
(57, '2021-04-24 07:36:42', 'Electronics and Communications Engineering (BSECE)'),
(58, '2021-04-24 07:41:36', 'Environmental Science (BSES)'),
(59, '2021-04-24 07:51:15', 'Respiratory Therapy (BSRT)'),
(60, '2021-04-24 07:57:23', 'Speech-Language Pathology'),
(61, '2021-04-24 08:04:17', 'Computer Science (BSCS)'),
(62, '2021-04-24 08:10:30', 'Environmental Science (BSES)'),
(63, '2021-04-24 08:13:02', 'Electronics and Communications Engineering (BSECE)'),
(64, '2021-04-24 08:16:24', 'Aeronautical Engineering (BS AeroE)'),
(65, '2021-04-24 08:29:10', 'Environmental Science (BSES)'),
(66, '2021-04-24 08:37:58', 'Environmental Science (BSES)'),
(67, '2021-04-24 08:44:18', 'Environmental Science (BSES)'),
(68, '2021-04-24 08:44:41', 'Biological Engineering (BSBE)'),
(69, '2021-04-24 08:50:44', 'Biological Engineering (BSBE)'),
(70, '2021-04-24 08:57:52', 'Nutrition and Dietetics (BS Nutrition and Dietetics)'),
(71, '2021-04-24 09:18:48', 'Physics (BS Physics) and Applied Physics (BS Applied Physics)'),
(72, '2021-04-24 09:22:46', 'Information Technology (BSIT) and Information Systems (BSIS)'),
(73, '2021-04-24 09:24:29', 'Physics (BS Physics) and Applied Physics (BS Applied Physics)'),
(74, '2021-04-24 09:28:02', 'Mechanical Engineering (BSME)'),
(75, '2021-04-24 11:27:07', 'Midwifery (BS Midwifery)'),
(76, '2021-04-25 11:48:52', 'Computer Engineering (BSCpE)'),
(77, '2021-04-25 11:50:50', 'Occupational Therapy (BSOT)'),
(78, '2021-04-25 12:15:52', 'Environmental Science (BSES)'),
(79, '2021-04-26 15:35:54', 'Medical Technology (BS Med Tech)'),
(80, '2021-04-26 17:51:34', 'Environmental Science (BSES)'),
(81, '2021-04-27 05:00:24', 'Medical Technology (BS Med Tech)'),
(82, '2021-04-27 05:01:01', 'Nursing (BSN)'),
(83, '2021-04-27 05:02:54', 'Computer Science (BSCS)'),
(84, '2021-04-27 05:14:21', 'Molecular Biology (BS Molecular Biology)'),
(85, '2021-04-27 05:23:56', 'Occupational Therapy (BSOT)'),
(86, '2021-04-28 02:56:19', 'Information Technology (BSIT) and Information Systems (BSIS)'),
(87, '2021-04-28 13:59:37', 'Environmental Science (BSES)'),
(88, '2021-05-01 12:36:19', 'Nursing (BSN)'),
(89, '2021-05-06 17:48:28', 'Industrial Engineering (BSIE)'),
(90, '2021-05-07 22:47:14', 'Physics (BS Physics) and Applied Physics (BS Applied Physics)'),
(91, '2021-05-08 03:44:33', 'Geology (BS Geology)'),
(92, '2021-05-10 15:35:40', 'Computer Science (BSCS)'),
(93, '2021-05-15 20:33:30', 'Medical Technology (BS Med Tech)'),
(94, '2021-05-16 07:22:20', 'Midwifery (BS Midwifery)'),
(95, '2021-05-16 10:22:34', 'Electronics and Communications Engineering (BSECE)'),
(96, '2021-05-16 12:13:30', 'Aeronautical Engineering (BS AeroE)'),
(97, '2021-05-16 17:56:08', 'Chemistry (BS Chemistry)'),
(98, '2021-05-17 06:50:53', 'Aeronautical Engineering (BS AeroE)'),
(99, '2021-05-27 09:12:49', 'Information Technology (BSIT) and Information Systems (BSIS)'),
(100, '2021-05-27 16:39:29', 'Occupational Therapy (BSOT)');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `submitted`
--
ALTER TABLE `submitted`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `submitted`
--
ALTER TABLE `submitted`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
