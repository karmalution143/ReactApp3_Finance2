-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 16, 2025 at 10:56 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `watchlist`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password_hash`, `created_at`) VALUES
(6, 'tay@gmail.com', '$2y$10$UssgvlBgIwfG7eJtTQLoXu5hSbdbLNG9rU9AAx9E57Fq0zTjIefxG', '2025-01-16 03:37:36'),
(7, 'tiff@gmail.com', '$2y$10$KKCUGKac0eLoTOEUplcSYO8Jt/jJRw0q4vkK2eiqwvpz0AibAv8jq', '2025-01-16 13:21:56'),
(8, 'trios@gmail.com', '$2y$10$IY6BFhqOpiGjIO6GArDa8uh2O/C.Ygpj28y1Z0BPOxfr1Aq6.SqLy', '2025-01-16 14:47:09'),
(9, 'test@gmail.com', '$2y$10$UmAjjEtIqZVo56X9T8bNvuAI3ftb0XGUiQFlOHsajmOo68NuZ.8Xq', '2025-01-16 15:54:00');

-- --------------------------------------------------------

--
-- Table structure for table `user_watchlist`
--

CREATE TABLE `user_watchlist` (
  `user_id` int(11) NOT NULL,
  `stock_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `watchlist`
--

CREATE TABLE `watchlist` (
  `id` int(11) NOT NULL,
  `symbol` varchar(10) NOT NULL,
  `note` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `price` decimal(10,2) DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `last_updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `watchlist`
--

INSERT INTO `watchlist` (`id`, `symbol`, `note`, `created_at`, `price`, `company_name`, `last_updated`, `user_id`) VALUES
(31, 'TSLA', 'higher and higher', '2025-01-16 05:01:09', NULL, NULL, '2025-01-16 14:11:52', 6),
(35, 'AMZN', 'back in 1998', '2025-01-16 14:21:27', NULL, NULL, '2025-01-16 14:21:27', 6),
(42, 'NIO', 'pump and dump', '2025-01-16 15:34:04', NULL, NULL, '2025-01-16 15:34:04', 6),
(43, 'TSLA', 'no go', '2025-01-16 15:37:45', NULL, NULL, '2025-01-16 15:37:45', 7);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `email_2` (`email`);

--
-- Indexes for table `user_watchlist`
--
ALTER TABLE `user_watchlist`
  ADD PRIMARY KEY (`user_id`,`stock_id`),
  ADD KEY `stock_id` (`stock_id`);

--
-- Indexes for table `watchlist`
--
ALTER TABLE `watchlist`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `watchlist`
--
ALTER TABLE `watchlist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user_watchlist`
--
ALTER TABLE `user_watchlist`
  ADD CONSTRAINT `user_watchlist_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `user_watchlist_ibfk_2` FOREIGN KEY (`stock_id`) REFERENCES `watchlist` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
