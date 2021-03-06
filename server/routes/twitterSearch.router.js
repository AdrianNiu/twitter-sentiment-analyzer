const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');
require('dotenv').config();
const router = express.Router();

const config = require('../config.js');
var Twitter = require('twitter');
var client = new Twitter(config);


//sentiment analysis below
var Sentiment = require('sentiment');

var sentiment = new Sentiment();

router.get('/:id', (req, res) => {
    
    const params = {
        q: `${req.params.id}`,
        count: 15,
        result_type: 'recent',
        lang: 'en'
    }
    

    client.get('search/tweets', params, function (error, tweets, response) {
        if (!error) {
            // console.log(req.params);
            // Need update to streamline the sentiment calculation
            var twitterData = [];
            var sentiment_text = tweets.statuses;
            sentiment_text.forEach(function(s){
                score = sentiment.analyze(s.text).score;
                console.log('sentiment_score', score);
                var tweet_sentiment = '';
                if (score == 0) {
                    tweet_sentiment = 'neutral'
                } else if (score > 0) {
                    tweet_sentiment = 'positive'
                } else if (score < 0) {
                    tweet_sentiment = 'negative'
                }
                
                twitterData.push({
                    sentiment: tweet_sentiment,
                    score: score,
                    tweet: s.text,
                    // counter: [(sentimentsCounter.Negative / (sentiment_text.length)) * 100, (sentimentsCounter.Neutral / (sentiment_text.length)) * 100, (sentimentsCounter.Positive / (sentiment_text.length)) * 100],
                    keyword: params.q
                });
                
                
            })
            // console.log('sentiment result', sentiment_text);
    //----------------------------------------------------------------------------------------
            var sentimentsCounter = { "Negative": 0, "Neutral": 0, "Positive": 0 };
            for (var i = 0; i < twitterData.length; i++) {
                switch (twitterData[i].sentiment) {
                    case 'positive':
                        sentimentsCounter["Positive"] += 1;
                        break;
                    case 'negative':
                        sentimentsCounter["Negative"] += 1;
                        break;
                    case 'neutral':
                        sentimentsCounter["Neutral"] += 1;
                        break;
                }
            }
            twitterData.push({
                counter: [(sentimentsCounter.Negative / (sentiment_text.length)) * 100, (sentimentsCounter.Neutral / (sentiment_text.length)) * 100, (sentimentsCounter.Positive / (sentiment_text.length)) * 100]
            })
            res.send(twitterData)
        }
    })
})



module.exports = router;


