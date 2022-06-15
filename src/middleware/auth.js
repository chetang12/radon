// const jwt = require('jsonwebtoken')


const tokens = function(req,res,next){
    let   token = req.headers["x-Auth-token"];
    let valid = jwt.verify(token, "functionup-radon");
    if (!valid) {
        res.send({ status: false, msg: "Invalid Token" });
      } 
      else {
        req.valid = valid;
        next();
      }
    }


//   module.exports.tokens=tokens;