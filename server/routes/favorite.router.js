const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  // const queryText = 'SELECT "favorite"."id", "favorite"."URL", "category"."name" FROM "favorite" LEFT OUTER JOIN "category" ON "favorite"."category_id" = "category"."id"';
  const queryText = 'SELECT "sentiment_result"."id" ,"sentiment_result"."sentiment_text", "sentiment_result"."sentiment_score", "sentiment_result"."sentiment", "sentiment_result"."time", "sentiment_result"."keyword", "sentiment_result"."note", "sentiment_result"."notes" FROM "sentiment_result" order by "sentiment_result"."id"'; 
  pool.query(queryText)
    .then((result) => { 
      console.log( 'Got fav twitter on server', result.rows );
      res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT favorite query', err);
      res.sendStatus(500);
    });
});





// add a new favorite 
router.post('/', (req, res) => {
  console.log('post body',req.body)
  const fav = req.body.saved_tweet;
  console.log(fav.tweet)
  console.log('TIME!!!', dateTime);

  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + ' ' + time;
  
  const queryText = `INSERT INTO sentiment_result ("sentiment_text", "sentiment_score", "sentiment", "time", "keyword")
                    VALUES ($1, $2, $3, $4, $5)`;
  const queryValues = [
    fav.tweet,
    fav.score,
    fav.sentiment,
    dateTime,
    fav.keyword,
  ];
  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error completing insert fav query', err);
      res.sendStatus(500);
    });
});



// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  const data = req.body;  const id = req.params.favId;
  console.log( `Setting category for id ${id} to ${req.body.category}`)
  const queryText = `UPDATE sentiment_result
                      SET note = ($1)
                      WHERE id = ($2)`;
  const queryValues = [
    req.body.category,
    id
  ]
  pool.query(queryText, queryValues)
    .then(() => {res.sendStatus(201);})
    .catch((err) => {
      console.log('Error completing put category',err);
      res.sendStatus(500)
    })
});

//add note router
router.put('/notes/:id', (req, res) => {
  let notes = req.body.notes;
  let id = req.params.id;
  console.log('In Notes Router');
  
  //Updates the speech_info table on the notes field
  const queryText = `
                        UPDATE sentiment_result 
                        SET notes = $1
                        WHERE id = $2;`;
  pool.query(queryText, [notes, id]).then((result) => {
    res.sendStatus(204);
  }).catch((error) => {
    console.log(`Error on query ${error}`);
    res.sendStatus(500);
  });
});



// delete a favorite
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  console.log(`In delete `, id)

  const queryText = `DELETE FROM sentiment_result WHERE id = ($1)`
  const queryValues = [
    id
  ]
  pool.query(queryText, queryValues)
    .then(()=>{res.sendStatus(201);})
    .catch((err) => {
      console.log('Error completing put category',err);
      res.sendStatus(500)
    })
});

module.exports = router;
