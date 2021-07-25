const { Todo } = require("../../models");

// GET User
exports.getTodos = async (req, res) => {
  try {
    let todos = await Todo.findAll({
      attributes: {
        exclude: ["updatedAt"],
      },
    });

    res.status(200).send({
      status: "success",
      message: "Resources Get Data Berhasil",
      data: {
        todos,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Get Todos not found",
    });
  }
};

// Get Todo by id
exports.getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findOne({
      where: {
        id: req.params.id,
      },
      attributes: {
        //exclude: ["updatedAt"],
      },
    });
    res.status(200).send({
      status: "success",
      message: "Resources Get Data Todo by Id Berhasil",
      data: {
        todo,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Get Todos id not found",
    });
  }
};

// Post Todo
exports.postTodo = async (req, res) => {
  try {
    const schedule = await Todo.create(req.body);

    res.status(200).send({
      status: "success",
      message: "Resources Post Data Berhasil",
      data: {
        schedule,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Add Todo Gagal",
    });
  }
};

// Update Todo
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.update(req.body, {
      where: {
        id,
      },
    });
    const todoUpdate = await Todo.findOne({
      where: {
        id,
      },
      attributes: {
        //exclude: ["updatedAt"],
      },
    });
    res.status(200).send({
      status: "success",
      message: "Resources Update Data Berhasil",
      data: {
        id: todoUpdate.id,
        name: todoUpdate.name,
        status: todoUpdate.status,
        description: todoUpdate.description,
        //updated: todo.updatedAt,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: `Update Todo ${id} Gagal`,
    });
  }
};

// Delete Todo
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.destroy({
      where: {
        id,
      },
    });

    res.status(200).send({
      status: "success",
      message: "Resources Delete Data Berhasil",
      data: {
        id,
        name: todo.name,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: `Delete Todo ${id} Gagal`,
    });
  }
};
