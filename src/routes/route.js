const express = require('express');
const externalModule = require('../logger/logger')
const externalModule2= require('../util/helper.js')
const externalModule3 = require('../validator/formatter.js')

const router = express.Router();

router.get('/test-me', function(req, res) {
    // externalModule.welcome()
    // console.log('The constant in logger route has a value ' + externalModule.endpoint)
    // console.log('The current batch is ' + externalModule.batch)
    externalModule.welcome()
    externalModule2.print()
    externalModule3.formatter()
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason