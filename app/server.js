const express = require("express");
const StudentController = require("./controllers/StudentController");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (request, response) => {
    response.json({message: "Student-JS app, bienvenido!"});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});