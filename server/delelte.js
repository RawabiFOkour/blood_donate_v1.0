const express = require("express");
const router = express.Router();
const mongo = require("../DB/delelte")

//write your code here 

router.get('/test', (req, res) => {
    mongo.readData((result) => {
        res.json(result);
    })
});

module.exports = router;