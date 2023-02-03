exports.getTodos = (req, res) => {
  res.json({ message: "Hello from todo controller" });
};

exports.updateTodo = (req, res) => {
  res.json({ message: "Hello from update todo controller" });
};

exports.createTodo = (req, res) => {
  res.json({ message: "Hello from create todo controller" });
};

exports.deleteTodo = (req, res) => {
  res.json({ message: "Hello from delete todo controller" });
};
