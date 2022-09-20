const router = require('express').Router();

const todosController = require('../controllers/todos.controller');

router.post('/add-todo', todosController.addTodo);
router.get('/get-todos', todosController.getTodo);
router.get('/get-single-todo/:id', todosController.getOneTodo);
router.put('/update-todo/:id', todosController.updateTodo);
router.delete('/delete-todo/:id', todosController.deleteTodo);
router.delete('/delete-all-todos', todosController.deleteAllTodos);

module.exports = router;