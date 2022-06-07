const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", BookController.createBook);

router.get("/bookList", BookController.bookList);

router.post("/getBooksInYear", BookController.getBooksInYear);

router.get("/getXINRBooks", BookController.getXINRBooks);

router.post("/getParticularBooks", BookController.getParticularBooks);

router.get("/getRandomBooks", BookController.getRandomBooks);



module.exports = router;