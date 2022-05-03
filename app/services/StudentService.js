class StudentService{
    static filterByCertification(students, haveCertification){
        if(Array.isArray(students) && students.length > 0){
            return students.filter((student) => student.haveCertification == haveCertification);
        }else{
            return "No hay estudiantes";
        }
    }
}

module.exports = StudentService;