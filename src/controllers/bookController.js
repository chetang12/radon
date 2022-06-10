const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const newpublishers= require("../models/publishermodel")

const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate(['author_id','Publisher'])
//     res.send({data: specificBook})
// }

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthor = async function (req, res) {
    let book=req.body
    let author_id= await authorModel.findById(book.author_id)
    // let specificBook = await bookModel.find({name:"Chetan Bhagat"}).populate('author_id') //if(!specificBook)
    if(!book.author_id){ return res.send({msg:"author is not available"}) }
   
    if(!author_id)
    {return res.send({msg:"author is not available"})}
    // else {
    //      res.send({msg:author_id})
    //  }

    let publisherss= await newpublishers.findById(book.publisher)
    if(!book.publisherss)
     {  return res.send({msg:"publisher is not available"})}
    
    let  bookCreated =await bookModel.create(book)
    return res.send({msg:bookCreated})

}
//mam solve
// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }


const newcreateBook= async function (req, res) {
    let book = req.body
    let a_id=req.body.author_id
    let p_id=req.body.Publisher
    let bookPresent=await authorModel.findById(a_id);
    let publisherPresent= await newpublishers.findById(p_id);
   if(bookPresent){
       if(publisherPresent){
           let saveData=await bookModel.create(book)
           res.send({msg : saveData})
       }
       else{
           res.send({msg:"publisher is not present"})
       }
   }
   else{
       res.send({msg :"author is not present"})
   }
}
const getBooksDataaa= async function (req, res) {
    let books = await bookModel.find().populate('author_id')
    res.send({data: books})
}


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksDataaa= getBooksDataaa
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.getBooksWithAuthor= getBooksWithAuthor
module.exports.newcreateBook= newcreateBook
// module.exports.getBooksWithAuthorDetails= getBooksWithAuthorDetails
