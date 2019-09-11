const db = require("../database")
let Donor = db.Donor

//write your code here 

let readData = (cb) => {
    Donor.find({}, (err, data) => {
        if (err) {
            cb(err)
        } else {
            // console.log('data:', data);
            cb(data)
        }
    })
}

module.exports = {
    readData
}