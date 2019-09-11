const express = require("express");
const router = express.Router();
const mongo = require("../DB/delelte")

const mongoAddDonor = require("../DB/addDonor")

//write your code here 

router.get('/test', (req, res) => {
    mongo.readData((result) => {
        res.json(result);
    })
});

router.post('/:firstName/:lastName/:phone/:country/:city/:bloodType/:email/:birthday', (req, res) => {
    console.log("Rawabi server")
     let firstName = req.params.firstName;
     let lastName = req.params.lastName;
     let phone = req.params.phone;
     let country = req.params.country;
     let city = req.params.city;
     let bloodType = req.params.bloodType;
     let email = req.params.email;
     let birthday = req.params.birthday;

     mongoAddDonor.newDonor(firstName,lastName,phone,country,city,bloodType,email,birthday,(result) => {
        res.json(result);
      })
   });

module.exports = router;