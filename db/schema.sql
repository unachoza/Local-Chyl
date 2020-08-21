DROP DATABASE chyldb;
CREATE DATABASE chyldb;

CREATE TABLE list_entries(
id SERIAL PRIMARY KEY,
temp BOOLEAN NOT NULL,
name VARCHAR(30) NOT NULL,
description VARCHAR(200),
img VARCHAR(200),
address VARCHAR(200),
city VARCHAR(20),
rating INT,
link VARCHAR(500)
);

CREATE TABLE lists(
id SERIAL PRIMARY KEY,
list_name VARCHAR(30) NOT NULL,
list_type VARCHAR(15) NOT NULL,
list_entries_id INT REFERENCES list_entries(id)
);

CREATE TABLE users(
id SERIAL PRIMARY KEY,
first_name VARCHAR(100),
last_name VARCHAR(100),
current_city VARCHAR(100),
user_img VARCHAR(1000), 
friends INT REFERENCES users(id),
lists_id INT REFERENCES lists(id)
);






-------------------
