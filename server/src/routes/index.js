const { Router } = require("express");

const {
  getTodos,
  getTodoById,
  postTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/Todo");

const router = new Router();

// Get Todos
router.get("/todos", getTodos);
// Get Todo by Id
router.get("/todo/:id", getTodoById);
// Create Todo
router.post("/todo", postTodo);
// Update Todo
router.patch("/todo/:id", updateTodo);
// Delete Todo
router.delete("/todo/:id", deleteTodo);
module.exports = router;
