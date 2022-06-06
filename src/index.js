const express = require('express');
const router = express.Router();
const UserModel= require("./userModel")
const UserController= require("./userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", UserController.createNewBook  )

router.get("/getBookData", UserController.getAllBook)

module.exports = router;