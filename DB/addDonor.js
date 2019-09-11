const db = require("../database")
let Donor = db.Donor

//write your code here 

let readData = (cb) => {
    Donor.find({}, (err, data) => {
        if (err) {
            cb(err)
        } else {
            cb(data)
        }
    })
}




let newDonor = (firstName,lastName,phone,country,city,bloodType,email,birthday,cb) => {
    Donor.create({firstName:firstName,lastName:lastName,
        phone:phone,country:country,city:city,bloodType:bloodType,
        email:email,birthday:birthday}, (err, data) => {

        if (err) {
            cb(err)
        } else {
            cb(data)
        }
    })
}

module.exports = {
    readData,
    newDonor
}