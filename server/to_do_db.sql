-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Oct 24, 2021 at 07:06 PM
-- Server version: 5.7.36
-- PHP Version: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `to_do`
--

-- --------------------------------------------------------

--
-- Table structure for table `to_dos`
--

CREATE TABLE `to_dos` (
  `Name` varchar(200) NOT NULL,
  `Description` text,
  `Priority` int(20) DEFAULT NULL,
  `Date_Entered` datetime DEFAULT CURRENT_TIMESTAMP,
  `Date_Finished` datetime DEFAULT NULL,
  `username` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `to_dos`
--

INSERT INTO `to_dos` (`Name`, `Description`, `Priority`, `Date_Entered`, `Date_Finished`, `username`) VALUES
('Call Dad ', '414...', 4, '2021-10-24 16:31:40', NULL, ''),
('Make Bed', '...clean sheets', 3, '2021-10-24 16:31:38', NULL, '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`) VALUES
('PeterJochem');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `to_dos`
--
ALTER TABLE `to_dos`
  ADD PRIMARY KEY (`Name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
