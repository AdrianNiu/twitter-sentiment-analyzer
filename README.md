# Twitter Sentiment Analyzer

## About This Application
Inspired by my uncle that he wants to know how people think about his tire business. 

**The Sentiment Analysis with Twitter API**

The Twitter Sentiment Analyzer uses the Twitter API to gather tweets by keyword or hashtag. It computes the sentiment score of each tweet using AFINN, and visualize the sentiment result with a live dashboard. The most recent 15 tweets are retrieved to calculate the sentiment score. After logiin, users are able to save the sentiment visualizatioin results with their interested keywords, which allow user to track the sentiment trend over time. Users can also add notes to a specific tweet they saved.

**AFINN Sentiment Lexicon**

The AFINN lexicon is a list of English terms manually rated for valence with an integer between -5 (negative) and +5 (positive) by Finn Årup Nielsen between 2009 and 2011. 

## Screen Shots

Below is the result of the application, you can type in your brand name or something you are interested in, and see how people are talking about it on Twitter. In the demo, the user is an admin from Verizon, and the admin is interested in learning how people think about his/her brand and services. 
![View of the Search Page](/public/images/TSA-search-page.jpg)
![View of the tweeter sentiment pie chart](/public/images/TSA-search-result-page1.jpg)
![View of the tweets of keyword searched](/public/images/TSA-search-result-page2.jpg)
![View of a Chart Page consisting of saved charts](/public/images/TSA-chart-page.jpg)
![View of the saved Twitter page](/public/images/TSA-tweet-result-page.jpg)


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


## Usage

1. Login with your username and password or navigate to the Register page to set up an account with your username and password.
2. Users can access the "About" page whether or not the user is logged in. The "About" page provides overview information on the twitter sentiment analyzer.
3. In the main search page or home page, user can type in the keyword or hashtag they are interested to obtain the most recent tweets and generate sentiment visualization results.
4. The search result returns the most recent 15 tweets from tweeter API and compute the sentiment score based on AFINN Sentiment Lexicon.
5. After the user complete a search, user can save the pie chart and view it later in the chart page. Users can also save a specific tweets of their interest and view it later in the result page.
6. Under the chart page, user will be able to view the saved sentiment result with time stamp and keyword searched. User can add/edit note on a specific saved pie chart.
7. Under the result page, user will be able to view the saved tweets, timestamp, keyword, sentiment score and notes. User can also add/edit note on a specific saved tweet.
8. Clicking "Delete" on any specific pie chart or tweet will remove it from the page with popped confirmation.
9. By cliicking on the search button or home button, user will be direct back to the search interface to complete a new search. 



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
