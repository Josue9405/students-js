const StudentController = require("./../../app/controllers/StudentController");

describe("Prueba de unidad de para StudentController", () => {

    test("1) Estudiantes con créditos mayores a 500", () => {
        const students = StudentController.getStudentsByCredits(500);
        expect(students).toBe(27);
    });
    test("3) Obtención de todos los estudiantes", () => {
        const students = Reader.readJsonFile("./test/data/visualpartners.test.json");
        expect(StudentService.filterByName(students,"all").length).toBe(51);
    });
    test("4) Obtención de todos los estudiantes llamados Lucinda", () => {
        const students = Reader.readJsonFile("./test/data/visualpartners.test.json");
        expect(StudentService.filterByName(students,"Lucinda").length).toBe(1);
    });
});