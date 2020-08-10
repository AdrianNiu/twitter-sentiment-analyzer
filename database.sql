
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
-- input for more table
-- need to add an sql for the pie chart database, the info needed are, date keyword searched, note, and the percentage



CREATE TABLE "user"
(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "email" VARCHAR (255),
 );
 
-- update put and post request to take in data

CREATE TABLE "search_result"
(
    "user_id" INT REFERENCES "user",
    "sentiment_id" INT REFERENCES "sentiment_result",
    "pie_id" INT REFERENCES "sentiment_pie",
);

CREATE TABLE "sentiment_result"
(
    "id" SERIAL PRIMARY KEY,
    "time_stamp" TIMESTAMP,
    "sentiment_text" VARCHAR (512),
    "sentiment_score" INT,
    "sentiment" VARCHAR (50),
    "time" VARCHAR (100),
    "keyword" VARCHAR (100),
    "notes" VARCHAR (1000),
);

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

-- alter TABLE to add user into sentiment pie chart
ALTER TABLE "search_result"
 ADD "pie_id" INT REFERENCES "sentiment_pie";