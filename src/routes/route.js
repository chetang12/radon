const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')
// const userModel= require("../usermodule")

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
   
    res.send('Hello there!')
});

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})


//first movie api problem1
router.get('/movies', function(req, res) {
    let moviesarr = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins'];
    res.send(moviesarr.join(" , "));
    

})

//first movie api problem2 and problem3

router.get('/movies/:indexNumber', function(req, res) {
    let moviesarr = [" ",'Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins'];
    let index = req.params.indexNumber;
    if (index <= moviesarr.length) {
        res.send(moviesarr[index]);
    } else if (index >= moviesarr.length) {
        
        res.send('invalid index')
    }
    
});
//problem4films
router.get('/movies',function(req,res){

    const arr=["inception","Moonfall","spider man"]
    res.send(arr)
})
router.get('/movies/:indexNumber',function(req,res){

    const arr=["inception","Moonfall","spider man"]
    if(req.params.indexNumber>arr.length){
        res.send("Enter valid indexNumber")
    }else{

        res.send(arr[req.params.indexNumber])
    }

})
router.get('/films', function(req,res){
    const arr=[ {
        "id":1,
        "name":'paglu'},
        {
        "id":2,
        "name":'prem amar'},
        {
        "id":3,
        "name":'dewana'}
    ]
     res.send(arr)  
})
router.get('/films/:filmid', function(req,res){
    const arr=[ {
        "id":1,
        "name":'paglu'},
        {
        "id":2,
        "name":'prem amar'},
        {
        "id":3,
        "name":'dewana'}
    ]
    if(req.params.filmid>arr.length){
        res.send("No Movie exist with this is")
    }else{
     res.send(arr[req.params.filmid-1])  }
})
router.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr = [1, 2, 3, 5, 6, 7]
    let missarry = [];
    function missingNumber(arr) {

        let minNum = Math.min(...arr);
        let maxNum = Math.max(...arr);
        for (let i = minNum; i < maxNum; i++) {
            if (arr.indexOf(i) < 0) {
                missarry.push(i);
            }
        }
        return missarry;
    }
    let m = missingNumber(arr);
    ///LOGIC WILL GO HERE 
    res.send(m);
});

// // -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
// Your route code will look like this
router.get("/sol2", function (req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arrr = [33, 34, 35, 37, 38]
    arrr.sort();
    let missarry1 = [];
    function missingNumber(arrr) {

        let minNum = Math.min(...arrr);
        let maxNum = Math.max(...arrr);
        for (let i = minNum; i < maxNum; i++) {
            if (arrr.indexOf(i) < 0) {
                missarry1.push(i);
            }
        }
        return missarry1;
    }
    let m1 = missingNumber(arrr);
    ///LOGIC WILL GO HERE 
    res.send(m1)
});








    module.exports = router;


