# Twitter Sentiment Analyzer

## About This Application
**The Twitter Sentiment Analyzer**

The Twitter Sentiment Analyzer uses the Twitter API to retrieve tweets and visualize sentiment result by keyword. It computes the sentiment score of each tweet using AFINN, and visualize the sentiment result with a live dashboard. The most recent 15 tweets are retrieved to calculate the sentiment score. Users are able to save the visualizatioin results and tweets with their interested keywords, which allows the tracking of sentiment trend over time. Users can add notes to a specific saved sentiment chart and tweet they saved.

**AFINN Sentiment Lexicon**

The AFINN lexicon is a list of English terms manually rated for valence with an integer between -5 (negative) and +5 (positive) by Finn Årup Nielsen between 2009 and 2011. 

## Page Views

Below is the page views of the app, you can search the keywords you are interested in, and see how people are talking about it on Twitter. 

In this demo, the user case is a Verizon admin, who interested in learning how people think about their brand and services. 

![View of the Search Page](/public/images/TSA-search-page.jpg)
<sup>View of the Search Page<sup>

![View of the tweeter sentiment pie chart](/public/images/TSA-search-result-page1.jpg)
<sup>View of the sentiment analysis result<sup>

![View of the tweets of keyword searched](/public/images/TSA-search-result-page2.jpg)
<sup>View of the tweets retrived from Twitter API<sup>

![View of a Chart Page consisting of saved charts](/public/images/TSA-chart-page.jpg)
<sup>View of the saved charts page<sup>

![View of the saved Twitter page](/public/images/TSA-tweet-result-page.jpg)
<sup>View of the saved tweets page<sup>

## Prerequisites

To use the Twitter API, you can establish a twitter developer account following [here](https://developer.twitter.com/en/apply-for-access). 

Before you get started, you can check if the following softwares have been installed on your computer:


## Installation

1. Create a new database named `primie_app`
    * The `database.sql` file contains the queries you will need to be able to set up the required tables for this application
2. Run `npm install`
3. Create a `.env` file at the root of the project and paste this line into the file:
    ```
    SERVER_SESSION_SECRET=superDuperSecret
    ```
    * While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
4. If Postgres is not already running, start it by entering `brew services start postgresql` into the terminal
5. Run `npm run server` to start the server
6. Run `npm run client` to start the client
7. Running the two previous commands will open a web browser with the application


## Usage

1. Login with your username and password or navigate to the Register page to set up an account with your username and password.
2. Users can access the "About" page without logging in. The "About" page provides general view of the application.
3. In search page, user can type in the keyword or hashtag they are interested to retrieve the most recent tweets and visualize the sentiment results.
4. The search result returns the most recent 15 tweets and compute the sentiment score based on AFINN Sentiment Lexicon.
5. After completing a search, user can save the pie chart and view it in the chart page. Users can also save and view a tweet of their interest in the result page.
6. Under the chart page, user can view the saved sentiment pie chart with time stamp and keyword searched. User can add/edit note on a saved pie chart.
7. Under the result page, user is able to view the saved tweets, timestamp, keyword, sentiment score and notes. User can also add/edit note on saved tweets.
8. Clicking "Delete" on a specific pie chart or tweet can remove it from the page with popped confirmation.
9. By clicking on the search button, user will be directed back to the search page to complete a new search. 



## Built With

* React
* React Sagas
* Redux
* JavaScript
* Node.js
* Express
* PostgreSQL
* Passport
* Sweet Alerts
* React Bootstrap

## Acknowledgement
Thanks to [Prime Digital Academy](https://www.primeacademy.io) for providing the knowledge to create this application
