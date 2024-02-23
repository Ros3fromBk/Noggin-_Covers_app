DROP DATABASE IF EXISTS hats_dev;

-- create database - step two
CREATE DATABASE animes_dev;

-- connect to database
\c animes_dev;

-- create table
CREATE TABLE animes (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL
);