
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
-- input for more table
-- need to add an sql for the pie chart database, the info needed are, date keyword searched, note, and the percentage


CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


CREATE TABLE "user"
(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


ALTER TABLE "user"
 ADD "email" VARCHAR (255);

CREATE TABLE "search_result"
(
    "user_id" INT REFERENCES "user",
    "sentiment_id" INT REFERENCES "sentiment_result"
);

CREATE TABLE "sentiment_result"
(
    "id" SERIAL PRIMARY KEY,
    "time_stamp" TIMESTAMP,
    "sentiment_text" VARCHAR (512)
);

ALTER TABLE "sentiment_result"
 ADD "sentiment_score" INT;

ALTER TABLE "sentiment_result"
 ADD "sentiment" VARCHAR(50);

ALTER TABLE "sentiment_result"
 ADD "time" VARCHAR(100);

ALTER TABLE "sentiment_result" 
DROP "time_stamp ";

ALTER TABLE "sentiment_result" 
ADD "keyword" VARCHAR(100);

ALTER TABLE "sentiment_result" 
ADD "note" VARCHAR(1000);

ALTER SEQUENCE sentiment_result_id_seq RESTART WITH 1;

ALTER TABLE "sentiment_result" 
ADD "notes" VARCHAR(1000);

CREATE TABLE "sentiment_pie"
(
    "id" SERIAL PRIMARY KEY,
    "pie_negative" NUMERIC,
    "pie_neutral" NUMERIC,
    "pie_positive" NUMERIC,
    "notes" VARCHAR(1000),
    "keyword" VARCHAR(100),
    "time" VARCHAR(100)
);