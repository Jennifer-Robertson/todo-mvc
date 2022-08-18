const Questions = require('../models/Questions')

module.exports = {

    getQuestions: async (req,res)=>{
        try{
            const questions = await Questions.find()
            res.render('quiz.ejs', {questions: questions})
        }catch(err){
            console.log(err)
        }
    },
}