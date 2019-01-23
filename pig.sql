/*
Navicat MySQL Data Transfer

Source Server         : mysql-python
Source Server Version : 50640
Source Host           : 127.0.0.1:3306
Source Database       : pig

Target Server Type    : MYSQL
Target Server Version : 50640
File Encoding         : 65001

Date: 2019-01-17 15:59:15
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for city
-- ----------------------------
DROP TABLE IF EXISTS `city`;
CREATE TABLE `city` (
  `cid` int(10) NOT NULL AUTO_INCREMENT,
  `cname` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `province_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`cid`),
  KEY `province_id` (`province_id`),
  CONSTRAINT `city_ibfk_1` FOREIGN KEY (`province_id`) REFERENCES `province` (`pid`),
  CONSTRAINT `city_ibfk_2` FOREIGN KEY (`province_id`) REFERENCES `province` (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of city
-- ----------------------------

-- ----------------------------
-- Table structure for college
-- ----------------------------
DROP TABLE IF EXISTS `college`;
CREATE TABLE `college` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user_id` int(10) DEFAULT NULL,
  `scenic_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `scenic_id` (`scenic_id`),
  CONSTRAINT `college_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `college_ibfk_2` FOREIGN KEY (`scenic_id`) REFERENCES `scenic_spotty` (`tid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of college
-- ----------------------------

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `scenic_id` int(10) DEFAULT NULL,
  `user_id` int(10) DEFAULT NULL,
  `content` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `scenic_id` (`scenic_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`scenic_id`) REFERENCES `scenic_spotty` (`tid`),
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of comment
-- ----------------------------

-- ----------------------------
-- Table structure for order_orderdetail
-- ----------------------------
DROP TABLE IF EXISTS `order_orderdetail`;
CREATE TABLE `order_orderdetail` (
  `order_id` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `scenic_id` int(10) DEFAULT NULL,
  `sale_num` int(10) DEFAULT NULL,
  KEY `scenic_id` (`scenic_id`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `order_orderdetail_ibfk_1` FOREIGN KEY (`scenic_id`) REFERENCES `scenic_spotty` (`tid`),
  CONSTRAINT `order_orderdetail_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `order_ticket` (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of order_orderdetail
-- ----------------------------

-- ----------------------------
-- Table structure for order_ticket
-- ----------------------------
DROP TABLE IF EXISTS `order_ticket`;
CREATE TABLE `order_ticket` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `order_id` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `user_id` int(10) DEFAULT NULL,
  `order_time` date DEFAULT NULL,
  `tourst_time` date DEFAULT NULL,
  `onum` int(10) DEFAULT NULL,
  `oname` varchar(10) COLLATE utf8_bin DEFAULT NULL,
  `telephone` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `otype` varchar(10) COLLATE utf8_bin DEFAULT NULL,
  `card` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `order_start` tinyint(4) DEFAULT '1',
  `way_buy` tinyint(4) DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `order_ticket_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of order_ticket
-- ----------------------------

-- ----------------------------
-- Table structure for province
-- ----------------------------
DROP TABLE IF EXISTS `province`;
CREATE TABLE `province` (
  `pid` int(10) NOT NULL AUTO_INCREMENT,
  `pname` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of province
-- ----------------------------

-- ----------------------------
-- Table structure for scenic_spotty
-- ----------------------------
DROP TABLE IF EXISTS `scenic_spotty`;
CREATE TABLE `scenic_spotty` (
  `tid` int(10) NOT NULL AUTO_INCREMENT,
  `tname` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `start_time` date DEFAULT NULL,
  `end_time` date DEFAULT NULL,
  `taddress` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `tintroduce` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `city_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`tid`),
  KEY `city_id` (`city_id`),
  CONSTRAINT `scenic_spotty_ibfk_1` FOREIGN KEY (`city_id`) REFERENCES `city` (`cid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of scenic_spotty
-- ----------------------------

-- ----------------------------
-- Table structure for sex
-- ----------------------------
DROP TABLE IF EXISTS `sex`;
CREATE TABLE `sex` (
  `sid` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of sex
-- ----------------------------
INSERT INTO `sex` VALUES ('1', '男');
INSERT INTO `sex` VALUES ('2', '女');

-- ----------------------------
-- Table structure for thumbs_up
-- ----------------------------
DROP TABLE IF EXISTS `thumbs_up`;
CREATE TABLE `thumbs_up` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `comment_id` int(10) DEFAULT NULL,
  `user_id` int(10) DEFAULT NULL,
  `statu` tinyint(4) DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `comment_id` (`comment_id`),
  CONSTRAINT `thumbs_up_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `thumbs_up_ibfk_2` FOREIGN KEY (`comment_id`) REFERENCES `comment` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of thumbs_up
-- ----------------------------

-- ----------------------------
-- Table structure for ticket
-- ----------------------------
DROP TABLE IF EXISTS `ticket`;
CREATE TABLE `ticket` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `adult_price` decimal(10,0) DEFAULT NULL,
  `child_price` decimal(10,0) DEFAULT NULL,
  `tprice_discount` decimal(10,0) DEFAULT NULL,
  `tui_ticket` varchar(10) COLLATE utf8_bin DEFAULT NULL,
  `scenic_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `scenic_id` (`scenic_id`),
  CONSTRAINT `ticket_ibfk_1` FOREIGN KEY (`scenic_id`) REFERENCES `scenic_spotty` (`tid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of ticket
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `telephone` varchar(30) COLLATE utf8_bin NOT NULL,
  `password` varchar(255) COLLATE utf8_bin NOT NULL,
  `nickname` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `address` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `name` varchar(10) COLLATE utf8_bin DEFAULT NULL,
  `card_id` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `age` date DEFAULT NULL,
  `sex` int(10) DEFAULT NULL,
  `registe_time` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `telephone` (`telephone`),
  KEY `sex` (`sex`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`sex`) REFERENCES `sex` (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of user
-- ----------------------------

-- ----------------------------
-- Table structure for user_icon
-- ----------------------------
DROP TABLE IF EXISTS `user_icon`;
CREATE TABLE `user_icon` (
  `iid` int(10) NOT NULL AUTO_INCREMENT,
  `icon` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `upload_date` date DEFAULT NULL,
  `user_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`iid`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_icon_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of user_icon
-- ----------------------------
