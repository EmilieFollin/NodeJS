const studentModel = require('../models/student');

module.exports = {
    create : function(lastName, firstName, age) {
        let student = new studentModel();
        student.lastName 	= lastName;
        student.firstName 	= firstName;
        student.age 		= age;

        student.save(function(err){
            if(err)
            {
                throw Error(err);
            }
        })

    },
    remove : function(studentId)
    {
        studentModel.remove({_id: studentId}, function(err){
            if (err)
            {
                throw Error(err);
            }
        });
    }
    findAll : function () {
        
    }
}
