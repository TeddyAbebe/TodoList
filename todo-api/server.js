const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Todo Api");
});

app.use('/todo', require('./routes/todo.route'))

app.listen(4000 , () => console.log('Running on Port 4000'));
