const mongoose = require('mongoose')

const quizSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  guess1: {}
  ,
  guess2: {}
  ,
  guess3: {}
},
{ collection: 'MVCquestions' }
)

module.exports = mongoose.model('Question', quizSchema)
