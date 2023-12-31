/** @format */

const Todo = require("../models/todo");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// create new todo
module.exports.createNewTodo = async (req, res) => {
  const todo = await Todo.create(req.body);
  res.status(200).json({
    success: true,
    todo,
  });
};

// get all todos
module.exports.getAllTodos = async (req, res) => {
  const {keyword} = req.query;

  const todos = keyword ? await Todo.findAll({
         order: ["todo"],
         where:{
          [Op.or]: [
            {
              todo: {
                [Op.like]: "%" + keyword + "%",
              }
            },
          ],
         }

    }) : await Todo.findAll();        

  res.status(200).json({
    success: true,
    todos,
  });
};

// delete todo
module.exports.deleteTodo = async (req, res) => {
  await Todo.destroy({ where: { id: req.params.id } });
  res.status(200).json({
    success: true,
    message: "deleted successfully",
  });
};

//  update todo
module.exports.updateTodo = async (req, res) => {
  const todo = await Todo.findOne({ where: { id: req.params.id } });
  todo.todo = req.body.todo;
  todo.isCompleted = req.body.isCompleted;
  await todo.save();
  res.status(200).json({
    success: true,
    message: "updated successfully",
  });
};
