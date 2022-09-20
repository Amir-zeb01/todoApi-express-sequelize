const db = require("../models")

const Todos = db.Todos;

// add todo
const addTodo = async (req, res) => {

    let data = {
        todo: req.body.todo
    }

    try {
        const todo = await Todos.create(data);
        res.status(200).send(todo);
    } catch (error) {
        res.status(403).send({message:'Please type some text to add todo!'});
    }
}

// get todo
const getTodo = async (req, res) => {
    
    const todos = await Todos.findAll({});
    res.status(200).send(todos);
    
}

// get one todo
const getOneTodo = async (req, res) => {
    
    let id=req.params.id;
    const todo = await Todos.findOne({where:{id:id}});
    res.status(200).send(todo);

}

// update todo
const updateTodo = async (req, res) => {
    
    let id=req.params.id;
    const todo = await Todos.update(req.body,{where:{id:id}});
    res.status(200).send(todo);

}

// delete todo
const deleteTodo = async (req, res) => {
    
    let id=req.params.id;
    await Todos.destroy({where:{id:id}});
    res.status(200).send({message:'Todo deleted successfully!'});

}

// delete all todo
const deleteAllTodos = async (req, res) => {
    
    await Todos.destroy({truncate: true});
    res.status(200).send({message:'todos deleted successfully'});

}

module.exports={
    addTodo,
    getOneTodo,
    getTodo,
    updateTodo,
    deleteTodo,
    deleteAllTodos
}