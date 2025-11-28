const express = require('express');
const router = express.Router();
const { MongoClient } = require("mongodb");

const uri = "*";

const client = new MongoClient(uri);

router.get('/', async (req, res) => {
  try {
    const database = client.db('notes');
    const notes = database.collection('notes');

    const query = { id: 2 };
    const note = await notes.findOne(query);

    res.json(note);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error");
  }
});

module.exports = router;