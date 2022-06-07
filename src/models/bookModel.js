const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        require: true,
    },

    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year: { type: Number, default: 2021 },
    tags: [String],

    authorName: String,
    totalPages: Number,
    stockAvailable: Boolean,
    summery:mongoose.Schema.Types.Mixed,

}, { timestamps: true });


module.exports = mongoose.model('high', bookSchema) //users

