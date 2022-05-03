const StudentService = require("./../services/StudentService");
const Reader = require("./../utils/reader");

class StudentController{
    static getStudents(name){
        const students = Reader.readJsonFile("./data/visualpartners.json");
        return StudentService.filterByName(students,name);
    }

    static getStudentsByCredits(credits){
        const students = Reader.readJsonFile("./data/visualpartners.json");
        return StudentService.filterByCreditsGreaterThan(students, credits);
    }
}

module.exports = StudentController;