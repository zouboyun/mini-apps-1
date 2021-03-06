CREATE DATABASE IF NOT EXISTS checkout;
USE checkout;

CREATE TABLE IF NOT EXISTS users (
  id              INT unsigned NOT NULL AUTO_INCREMENT,
  name            VARCHAR(50) NOT NULL,
  email           VARCHAR(50) NOT NULL,
  address         VARCHAR(150) NOT NULL,
  createdAt       TIMESTAMP NOT NULL,
  updatedAt       DATETIME,
  PRIMARY KEY     (id)
);

CREATE TABLE IF NOT EXISTS payments (
  id              INT unsigned NOT NULL AUTO_INCREMENT,
  ccNumber        VARCHAR(50) NOT NULL,
  cvv             VARCHAR(10) NOT NULL,
  billingZip      VARCHAR(10) NOT NULL,
  expirationDate  DATETIME,
  userId          INT unsigned NOT NULL,
  createdAt       TIMESTAMP NOT NULL,
  updatedAt       DATETIME,
  PRIMARY KEY     (id),
  FOREIGN KEY     (userId) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS orders (
  id              INT unsigned NOT NULL AUTO_INCREMENT,
  userId          INT unsigned NOT NULL,
  paymentId       INT unsigned NOT NULL,
  createdAt       TIMESTAMP NOT NULL,
  updatedAt       DATETIME,
  PRIMARY KEY     (id),
  FOREIGN KEY     (userId) REFERENCES users(id),
  FOREIGN KEY     (paymentId) REFERENCES payments(id)
);