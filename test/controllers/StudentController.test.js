const StudentController = require("./../../app/controllers/StudentController");

describe("Prueba de unidad de para StudentController", () => {
    test("1) Estudiantes con créditos mayores a 500", () => {
        const students = StudentController.getStudentsByCredits(500);
        expect(students.length).toBe(27);
    });
});