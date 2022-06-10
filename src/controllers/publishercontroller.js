const Publisher= require("../models/publishermodel")

const createPublisher= async function (req, res) {
    let author = req.body
    let PublisherCreated = await Publisher.create(author)
    res.send({data: PublisherCreated})
}
module.exports.createPublisher= createPublisher