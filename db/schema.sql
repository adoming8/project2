DROP DATABASE IF EXISTS areyousmart_db;
CREATE DATABASE areyousmart_db;

USE areyousmart_db;

CREATE TABLE Players
(
	playerID int NOT NULL AUTO_INCREMENT,
	player_name varchar(255)  default '' NOT NULL,
    player_gametag varchar(255)  default '' NOT NULL,
    player_email varchar(255) DEFAULT '' NOT NULL,
    player_password varchar (255) DEFAULT '' NOT NULL,
	PRIMARY KEY (playerID)
);

CREATE TABLE Scores
(
    player_gametagID varchar (255) default '' not null,
    player_score int NOT NULL,
    playerID int,
    PRIMARY KEY (player_gametagID),
    FOREIGN KEY (playerID) REFERENCES Players(playerID)

);
