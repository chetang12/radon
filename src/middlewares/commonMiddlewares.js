const UserModel = require("../models/userModel")




let checkisFreeApp=function(req,res,next){

    let headervalue= req.headers["isfreeappuser"] 
    console.log(headervalue)// headers.content-type
    if(!headervalue){
        res.send({Msg:'Header is missing it is mandatory'})
    }
    else{
        if(headervalue =='true'){
            headervalue=true
        }
        else{
            headervalue=false
        }
        req.isFreeAppUser=headervalue
        next()
    }
}






// let checkisFreeApp = function(req, res, next) {

//     let headervalue = req.headers.isfreeappuser 
//     if (headervalue === undefined) {
//         res.send({ Messege: 'Header is missing it is mandatory' })
//     } else(next())

// }

module.exports.checkisFreeApp = checkisFreeApp