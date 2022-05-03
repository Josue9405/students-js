class StudentService{
    static filterByName(students, name){
        if(Array.isArray(students) && students.length > 0){
            if (name == "all"){
                return students;
            }else{
                return students.filter((student) => student.name == name);
            }
        }else{
            return "No hay estudiantes";
        }
    }

    static filterByCertification(students, haveCertification){
        if(Array.isArray(students) && students.length > 0){
            return students.filter((student) => student.haveCertification == haveCertification);
        }else{
            return "No hay estudiantes";
        }
    }

    static filterByCreditsGreaterThan(students, credits){
        if(Array.isArray(students) && students.length > 0){
            return students.filter((student) => student.credits > credits);
        }else{
            return "No hay estudiantes";
        }
    }
}

module.exports = StudentService;