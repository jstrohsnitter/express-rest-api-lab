const mongoose = require('mongoose')

const boardSchema = mongoose.Schema({
    type: String,
    length: String,
    fins: Number,
})

const Board = mongoose.model('Board', boardSchema)

module.exports = Board;