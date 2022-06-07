const { count } = require("console")
const bookModel = require("../models/bookModel")
const BookModel= require("../models/bookModel")
//done
const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
//done
const bookList = async function(req, res) {
    const allBook = await BookModel.find().select({bookName:1, authorName:1,_id:0})
    res.send({ msg: allBook })
}
//done
const getBooksInYear = async function (req, res) {
    let publicyears= req.body.year
    const inYearbooks= await BookModel.find({year:publicyears})
    res.send({msg: inYearbooks})
}
//done
const getParticularBooks = async function (req, res) {
    
     let output = await bookModel.find(req.body)
     res.send(output);
}
//done
const getXINRBooks = async function(req, res) {
    const INRBook = await bookModel.find({ pricesindianPrice: {$in:["100INR","200INR","500INR"]}});
    res.send({ msg: INRBook })
}
//done
const getRandomBooks  = async function(req, res) {
    let allBook = await bookModel.find({$or:[{totalPages:{$gt:"500"}},{stockAvailable: true}]})
    res.send(allBook);
}

module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getXINRBooks= getXINRBooks
module.exports.getParticularBooks= getParticularBooks
module.exports.getRandomBooks= getRandomBooks