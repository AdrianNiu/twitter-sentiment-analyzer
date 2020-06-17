# Twitter Sentiment Analyzer

## About This Application
Inspired by my uncle that he wants to know how people think about his tire business. 

**The Sentiment Analysis with Twitter API**

The Twitter Sentiment Analyzer uses the Twitter API to gather tweets by keyword or hashtag. It computes the sentiment score of each tweet using AFINN, and visualize the sentiment result with a live dashboard. The most recent 15 tweets are retrieved to calculate the sentiment score. After logiin, users are able to save the sentiment visualizatioin results with their interested keywords, which allow user to track the sentiment trend over time. Users can also add notes to a specific tweet they saved.

**AFINN Sentiment Lexicon**

The AFINN lexicon is a list of English terms manually rated for valence with an integer between -5 (negative) and +5 (positive) by Finn Årup Nielsen between 2009 and 2011. 

## Screen Shots

Below is the result of the application, you can type in your brand name or something you are interested in, and see how people are talking about it on Twitter.
![View of the Search Page](/public/images/phases-page-view.png)
![View of a Chart Page](/public/images/step-view.png)
![View of the saved Twitter page](/public/images/search-functionality.png)


## Prerequisites

Before you get started, make sure you have the following software installed on your computer:


## Installation

1. Create a new database called `primie_app`
    * The `database.sql` file contains the queries you will need to be able to set up the required tables for this application
2. Run `npm install`
3. Create a `.env` file at the root of the project and paste this line into the file:
    ```
    SERVER_SESSION_SECRET=superDuperSecret
    ```
    * While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
4. If Postgres is not already running, start it by entering `brew services start postgresql` into the terminal
5. Run `npm run server`
6. Run `npm run client`
7. Running the two previous commands will open a web browser with the application



## Built With

* React
* React Sagas
* Redux
* JavaScript
* React Bootstrap
* Sweet Alerts
* Node.js
* Express
* PostgreSQL
* Passport

## Acknowledgement
Thanks to [Prime Digital Academy](https://www.primeacademy.io) for providing the knowledge to create this application
