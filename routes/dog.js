var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/', async (req, res) => {
    console.log('DOG ROUTE HIT');  // ← ログ

    request('https://dog.ceo/api/breeds/image/random', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            res.json(data);
        } else {
            console.log('Dog API error:', error);
            res.status(500).send('API error');
        }
    });
});

module.exports = router;
