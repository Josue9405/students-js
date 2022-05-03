const express = require("express");
const StudentController = require("./controllers/StudentController");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (request, response) => {
    response.json({message: "Student-JS app, bienvenido!"});
});

app.get("/v1/students/:studentname", (request, response) => {
    const studentname = request.params.studentname;
    const students = StudentController.getStudents(studentname);
    response.json({name: studentname, students: students});
});

app.get("/v1/students/credits/:credits", (request, response) => {
    const credits = request.params.credits;
    const students = StudentController.getStudentsByCredits(credits);
    response.json({creditsGreaterThan: credits, students: students});
});

app.listen(port, () => {
    console.log(`Student-JS API in localhost:${port}`);
});