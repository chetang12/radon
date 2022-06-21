const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weatherCtroller= require("../controllers/weathers")
const memesCroller= require("../controllers/memes")
const 


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states",     ,CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.get("/cowin/getByPin", CowinController.getByPin)



// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
router.get("/cowin/getbyDistrictId", CowinController.getDistrictId)
//get api getLondonWeather
router.get("/getLondonWeather", weatherCtroller.getLondonWeather)
//get api  getLondonTemperature
router.get("/getLondonTemperature", weatherCtroller.getLondonTemperature)
// Sort the cities in order of their increasing temperature
router.get("/getCitiesWeather", weatherCtroller.getCitiesWeather)

//get api for memes
router.get("/getAllMemes", memesCroller.getAllMemes)
//get api for memes
router.post("/createMeme", memesCroller.createMeme)
module.exports = router;