
let axios = require("axios")

//get api getLondonWeather 
let getLondonWeather = async function (req,res){
    try {
        let country = req.query.q
        let key = req.query.appid
  let options ={
    method :'get',
    url:`http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${key}`
  }
  let result = await axios(options);
  console.log(result);
  let data = result.data
  res.status(200).send({ msg: data, status: true })
    }catch(err){
        console.log(err)
        res.status(500).send({ msg: err.message }) 
    }
}
//get api  getLondonTemperature
let getLondonTemperature = async function (req, res) {
    try {
        let country = req.query.q
        let key = req.query.appid
  let options ={
    method :'get',
    url:`http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${key}`
  }
  let result = await axios(options);
  console.log(result);
  let data = result.data.main.temp
  res.status(200).send({ msg: data, status: true })
    }catch(err){
        console.log(err)
        res.status(500).send({ msg: err.message }) 
    }

}
// Sort the cities in order of their increasing temperature
let getCitiesWeather = async function (req, res) {

    try {

        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]

        let selectedCities = []

        for (let i = 0; i < cities.length; i++) {

            let city = ({ city: cities[i] })

            let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=6bf807280b82f18dae239cfcaac853f5`)

            city.temp = result.data.main.temp

            selectedCities.push(city)
        }
        let sortedResult = selectedCities.sort(function (a, b) { return a.temp - b.temp })

        res.status(200).send({ data: sortedResult, status: true })

    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
module.exports.getLondonWeather=getLondonWeather
module.exports.getLondonTemperature=getLondonTemperature
module.exports.getCitiesWeather=getCitiesWeather