const Reader = require("../../app/utils/reader");
const StudentService = require("../../app/services/StudentService");

describe("Prueba de unidad de para StudentService", () => {
    test("1) Estudiantes con certificación", () => {
        const students = Reader.readJsonFile("./test/data/visualpartners.test.json");
        expect(StudentService.filterByCertification(students,true).length).toBe(1);
    });
});