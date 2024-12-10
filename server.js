const Board = require('./models/surfboard.js')
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());

// Routes go here
app.post('/boards', async (req, res) => {
    const createdBoard = await Board.create(req.body);
    res.json(createdBoard)
})

app.get('/boards', async (req, res) => {
    const foundBoards = await Board.find()
    res.json(foundBoards)
})

app.delete('/boards/:boardId', async(req, res) => {
    const deletedBoard = await Board.findByIdAndDelete(req.params.boardId)
    res.json(deletedBoard)
})

app.put('/boards/:boardId', async (req, res) => {
    const updatedBoard = await Board.findByIdAndUpdate(req.params.boardId, req.body, {new: true});
    res.json(updatedBoard);
})

app.listen(3000, () => {
console.log('The express app is ready!');
 });