const Reader = require("../../app/utils/reader");
const StudentService = require("../../app/services/StudentService");

describe("Prueba de unidad de para StudentService", () => {
    test("1) Estudiantes con certificación", () => {
        const students = Reader.readJsonFile("./test/data/visualpartners.test.json");
        expect(StudentService.filterByCertification(students,true).length).toBe(1);
    });
    test("2) Estudiantes con créditos mayores a 500", () => {
        const students = Reader.readJsonFile("./test/data/visualpartners.test.json");
        expect(StudentService.filterByCreditsGreaterThan(students,500).length).toBe(1);
    });
});