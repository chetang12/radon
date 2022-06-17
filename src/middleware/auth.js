
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const authenticate = function(req, res, next) {
    //check the token in request header
    //validate this token
 // comapre the logged in user's id and the id in request
 try{
    let token = req.headers["x-Auth-token"];
    console.log(req.headers["x-Auth-token"]);
     if (!token) token = req.headers["x-auth-token"];
     console.log(token)
     if (!token) return res.status(401).send({ status: false, msg: "token must be present" });
    let decodedToken = jwt.verify(token, 'functionup-thorium')
   
    if(!decodedToken) return res.status(401).send({status: false, msg:"token is not valid"})
       next()
 }catch(err){
    console.log("this is error:",err.message)
    res.status(500).send({msg:"Error",error:err.message})
 }

}

module.exports.authenticate = authenticate

const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    try{
        let token = req.headers["x-auth-token"]
        if(!token) return res.status(401).send({status: false, msg: "token must be present in the request header"})
        let decodedToken = jwt.verify(token, 'functionup-thorium')
    
        if(!decodedToken) return res.status(401).send({status: false, msg:"token is not valid"})
        
        //userId for which the request is made. In this case message to be posted.
        let userToBeModified = req.params.userId
        //userId for the logged-in user
        let userLoggedIn = decodedToken.userId
    
        //userId comparision to check if the logged-in user is requesting for their own data
        if(userToBeModified != userLoggedIn) return res.status(403).send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
    
     
    }catch(err){
        console.log("this is error:",err.message)
        res.status(500).send({msg:"Error",error:err.message})
    }

    
    next()
}

module.exports.authorise = authorise