const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/publishercontroller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)


router.get("/getBooksDataaa", bookController.getBooksDataaa)

// router.post("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.post("/createPublisher", publisherController.createPublisher)

router.post("/newcreateBook", bookController.newcreateBook)

router.post("/getBooksWithAuthor", bookController.getBooksWithAuthor)

// router.post("/createBookpost", bookController.createBookpost)
module.exports = router;