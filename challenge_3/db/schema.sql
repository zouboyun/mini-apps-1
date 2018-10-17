CREATE DATABASE IF NOT EXISTS checkout;
USE checkout;

CREATE TABLE IF NOT EXISTS users (
  id              INT unsigned NOT NULL AUTO_INCREMENT,
  name            VARCHAR(150) NOT NULL,
  email           VARCHAR(150) NOT NULL,
  createdAt       TIMESTAMP NOT NULL,
  updatedAt       DATETIME,
  PRIMARY KEY     (id)
);

CREATE TABLE IF NOT EXISTS orders (
  id              INT unsigned NOT NULL AUTO_INCREMENT,
  userId          INT unsigned NOT NULL,
  createdAt       TIMESTAMP NOT NULL,
  updatedAt       DATETIME,
  PRIMARY KEY     (id),
  FOREIGN KEY     (userId) REFERENCES users(id)
);