const StudentService = require("./../services/StudentService");
const Reader = require("./../utils/reader");

class StudentController{
    static getStudents(name){
        const students = Reader.readJsonFile("./data/visualpartners.json");
        return StudentService.filterByName(students,name);
    }
}

module.exports = StudentController;