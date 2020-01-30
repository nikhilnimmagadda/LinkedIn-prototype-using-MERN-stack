var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://nikhil:nikhil12345@ds15927.mlab.com:59263/linkedin_project', 
{ useNewUrlParser: true, poolSize: 10 } ).then(
    () => {
        console.log("Getting MongoDB Connection!!!")
    },
    err => {
        console.log("Connection Failed!. Error: ${err}")
    }
);

module.exports = {
    mongoose,
};