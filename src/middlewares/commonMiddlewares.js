const moment = require('moment');
const  stack = require('stackjs');
const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}



const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}

const middleware= function(req,res,next){

var currentdate = new Date();
var datetime = "Last Sync: " + currentdate.getDate() + "/" +
    (currentdate.getMonth() + 1) + "/" +
    currentdate.getFullYear() + " @ " +
    currentdate.getHours() + ":" +
    currentdate.getMinutes() + ":" +
    currentdate.getSeconds();
let ip = req.originalUrl
let url = req.originalUrl
console.log(`${datetime} ${ip} ${url}`)
next()
}


module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid4= mid4
module.exports.middleware= middleware
