const { getAllTodos, createNewTodo, updateTodo, deleteTodo } = require("../controllers/todo");
const router = require("express").Router();



router.route("/todo").get(getAllTodos);
router.route("/todo").post(createNewTodo);
router.route("/todo/:id").delete(deleteTodo);
router.route("/todo/:id").put(updateTodo);

module.exports = router;