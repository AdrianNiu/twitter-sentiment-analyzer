const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

/*
CREATE TABLE "sentiment_pie" (
    "id" SERIAL PRIMARY KEY,
    "pie" VARCHAR(100),
    "notes" VARCHAR(1000),
    "keyword" VARCHAR(100),
	"time" VARCHAR(100)
);
*/


// return all favorite images
router.get('/', (req, res) => {
    const queryText = `SELECT "sentiment_pie"."id" ,"sentiment_pie"."pie", "sentiment_pie"."notes", "sentiment_pie"."keyword", "sentiment_pie"."time" FROM "sentiment_pie" order by "sentiment_pie"."id"`;
    pool.query(queryText)
        .then((result) => {
            console.log('Get PIE on server', result.rows);
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('Error completing SELECT PIE data', err);
            res.sendStatus(500);
        });
});





// add a new favorite Pie Chart
router.post('/', (req, res) => {
    console.log('the PieChart req body is:', req.body)
    const fav_pie = req.body;
    console.log('TIME!!!', dateTime);

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;

    const queryText = `INSERT INTO sentiment_pie ("pie", "keyword", "time")
                    VALUES ($1, $2, $3)`;
    const queryValues = [
        fav_pie.saved_pie,
        fav_pie.keyword,
        dateTime,
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('Error completing insert Pie query', err);
            res.sendStatus(500);
        });
});



// update given favorite with a category id
router.put('/:favId', (req, res) => {
    // req.body should contain a category_id to add to this favorite image
    const data = req.body; const id = req.params.favId;
    console.log(`Setting category for id ${id} to ${req.body.category}`)
    const queryText = `UPDATE sentiment_result
                      SET note = ($1)
                      WHERE id = ($2)`;
    const queryValues = [
        req.body.category,
        id
    ]
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('Error completing put category', err);
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
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('Error completing put category', err);
            res.sendStatus(500)
        })
});

module.exports = router;


