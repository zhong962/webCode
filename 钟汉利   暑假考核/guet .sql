-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- 主机： 127.0.0.1
-- 生成日期： 2019-09-07 14:42:58
-- 服务器版本： 10.4.6-MariaDB
-- PHP 版本： 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `guet`
--

-- --------------------------------------------------------

--
-- 表的结构 `ordertb`
--

CREATE TABLE `ordertb` (
  `oid` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `rid` int(11) NOT NULL,
  `create_time` datetime DEFAULT current_timestamp(),
  `check_time` datetime DEFAULT NULL,
  `leave_time` datetime DEFAULT NULL,
  `number` int(11) DEFAULT NULL,
  `other` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `ordertb`
--

INSERT INTO `ordertb` (`oid`, `uid`, `rid`, `create_time`, `check_time`, `leave_time`, `number`, `other`) VALUES
(100, 40, 1, '2019-09-07 13:01:23', '2019-09-07 00:00:00', '2019-09-08 00:00:00', 2, NULL),
(101, 40, 1, '2019-09-07 13:07:03', '2019-09-07 00:00:00', '2019-09-08 00:00:00', 2, NULL),
(102, 40, 1, '2019-09-07 13:09:24', '2019-09-07 00:00:00', '2019-09-08 00:00:00', 0, NULL),
(103, 40, 1, '2019-09-07 13:09:49', '2019-09-07 00:00:00', '2019-09-08 00:00:00', 0, NULL),
(104, 40, 2, '2019-09-07 16:22:13', '2019-09-07 00:00:00', '2019-09-08 00:00:00', 0, NULL),
(105, 40, 5, '2019-09-07 16:31:24', '2019-09-07 00:00:00', '2019-09-08 00:00:00', 2, NULL),
(106, 42, 2, '2019-09-07 17:26:51', '2019-09-07 00:00:00', '2019-09-08 00:00:00', 2, NULL),
(107, 42, 1, '2019-09-07 17:27:22', '2019-09-07 00:00:00', '2019-09-09 00:00:00', 1, NULL),
(108, 42, 1, '2019-09-07 17:27:33', '2019-09-07 00:00:00', '2019-09-08 00:00:00', 2, NULL),
(109, 42, 5, '2019-09-07 17:27:45', '2019-09-07 00:00:00', '2019-09-08 00:00:00', 3, NULL),
(110, 44, 1, '2019-09-07 17:36:01', '2019-09-07 00:00:00', '2019-09-08 00:00:00', 2, NULL),
(111, 44, 2, '2019-09-07 17:36:07', '2019-09-07 00:00:00', '2019-09-08 00:00:00', 2, NULL),
(112, 44, 7, '2019-09-07 17:36:14', '2019-09-07 00:00:00', '2019-09-08 00:00:00', 2, NULL),
(113, 44, 11, '2019-09-07 17:36:30', '2019-09-07 00:00:00', '2019-09-08 00:00:00', 2, NULL),
(114, 44, 12, '2019-09-07 17:36:34', '2019-09-07 00:00:00', '2019-09-08 00:00:00', 2, NULL),
(115, 44, 10, '2019-09-07 17:36:41', '2019-09-07 00:00:00', '2019-09-08 00:00:00', 2, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `room`
--

CREATE TABLE `room` (
  `rid` int(11) NOT NULL,
  `type` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `price` float DEFAULT NULL,
  `img` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `other` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `room`
--

INSERT INTO `room` (`rid`, `type`, `price`, `img`, `other`) VALUES
(1, '豪华大床房', 366, 'images/product-1.jpg', '超大视野的观景大窗，风景尽收眼底'),
(2, '舒适大床房', 326, 'images/product-2.jpg', '舒适柔软的大床'),
(3, '标准双人间', 354, 'images/product-3.jpg', '经济实惠，是出差在外的最佳选择'),
(4, '豪华双床房', 425, 'images/product-4.jpg', '超大视野的观景大窗，风景尽收眼底'),
(5, '舒适儿童房', 450, 'images/product-5.jpg', '一家三口外出旅行的最佳选择'),
(6, '舒适双床房', 375, 'images/product-6.jpg', '干净舒适的入住体验'),
(7, '助眠大床房', 406, 'images/product-7.jpg', '定制香薰让您拥有更好的睡眠'),
(8, '助眠双床房', 464, 'images/product-8.jpg', '独特的音乐助眠系统助您有一个好梦'),
(9, '行政套房', 874, 'images/product-9.jpg', '为您在外提供方便又舒适的工作环境'),
(10, '高级大床房', 470, 'images/product-10.jpg', '贴心的早餐服务，让住客一整天都心情愉悦'),
(11, '高级双床房', 499, 'images/product-11.jpg', '贴心的早餐服务，让住客一整天都心情愉悦'),
(12, '行政大床房', 630, 'images/product-12.jpg', '优越的上网条件，满足您工作的需求');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `uid` int(11) NOT NULL,
  `name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `sign_time` datetime DEFAULT current_timestamp(),
  `type` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `other` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`uid`, `name`, `password`, `phone`, `sign_time`, `type`, `other`) VALUES
(39, '1', '1', '1', '2019-09-03 23:15:29', 'admin', NULL),
(40, 'zhl', 'zhl', '1234689545', '2019-09-07 12:32:27', 'admin', NULL),
(42, 'aaa', 'aaa', '123465789', '2019-09-07 17:26:33', NULL, NULL),
(43, 'bbb', 'bbb', '741852963', '2019-09-07 17:34:38', NULL, NULL),
(44, 'ccc', 'ccc', 'null', '2019-09-07 17:35:42', NULL, NULL),
(45, 'z', 'z', 'z', '2019-09-07 20:36:58', NULL, NULL);

--
-- 转储表的索引
--

--
-- 表的索引 `ordertb`
--
ALTER TABLE `ordertb`
  ADD PRIMARY KEY (`oid`);

--
-- 表的索引 `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`rid`);

--
-- 表的索引 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`uid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `ordertb`
--
ALTER TABLE `ordertb`
  MODIFY `oid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;

--
-- 使用表AUTO_INCREMENT `room`
--
ALTER TABLE `room`
  MODIFY `rid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
