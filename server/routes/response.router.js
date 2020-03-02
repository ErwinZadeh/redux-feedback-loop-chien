const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");


router.post("/", (req, res) => {
  let feedback = req.body;
  console.log("Creating new feedback", feedback);
  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
  pool
    .query(queryText, [
      feedback.feeling,
      feedback.understanding,
      feedback.support,
      feedback.comments
    ])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log("Could not add feedback", error);
      res.sendStatus(500);
    });
});


router.get("/", (req, res) => {
  let queryText = 'SELECT * FROM "feedback"';
  pool
    .query(queryText)
    .then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log("Could not get feedback", error);
      res.sendStatus(500);
    });
});


module.exports = router;
