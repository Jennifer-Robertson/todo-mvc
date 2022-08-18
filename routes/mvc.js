const express = require('express')
const router = express.Router()
const mvcController = require('../controllers/mvc')

router.get('/model', mvcController.getModelPage)

router.get('/controller', mvcController.getControllerPage)

router.get('/view', mvcController.getViewPage)



// router.post('/createTodo', todosController.createTodo)

// router.put('/markComplete', todosController.markComplete)

// router.put('/markIncomplete', todosController.markIncomplete)

// router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router