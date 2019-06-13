create database burguers_db;

use burguers_db;

CREATE TABLE burguers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(70) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);