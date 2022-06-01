const print = function(){
    let date = new Date()
    let week = new Date(date.getFullYear())
    let prntDate = date.getDate()
    let prntMonth = date.getMonth()

    console.log('Radon: week '+week+'date'+prntDate+'month'+prntMonth+'topic being taught is Node.js')

}
module.exports.print = print