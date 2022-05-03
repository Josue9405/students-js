const StudentController = require("./../../app/controllers/StudentController");

describe("Prueba de unidad de para StudentController", () => {
    test("1) Estudiantes con créditos mayores a 500", () => {
        const students = StudentController.getStudentsByCredits(500);
        expect(students.length).toBe(27);
    });
    test("2) Estudiantes certificados", () => {
        const students = StudentController.getStudentsByCertification(true);
        expect(students.length).toBe(29);
    });
    test("3) Obtener todos los estudiantes", () => {
        const students = StudentController.getStudents("all")
        expect(students).toBe(29);
    });
});