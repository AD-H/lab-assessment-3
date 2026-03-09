var students = [];   // global array

function Student(name,age,course){
    this.name = name;
    this.age = age;
    this.course = course;

    this.display = function(){
        return "<tr><td>"+this.name+"</td><td>"+this.age+"</td><td>"+this.course+"</td></tr>";
    }
}

function addStudent(form){

    var name = form.elements["name"].value;
    var age = form.elements["age"].value;
    var course = form.elements["course"].value;

    var studentObj = new Student(name,age,course);

    students.push(studentObj);

    showStudents();

    form.reset();

    form.elements["name"].focus();
}

function showStudents(){

    var tableData = "<tr><th>Name</th><th>Age</th><th>Course</th></tr>";

    for(var i=0;i<students.length;i++)
    {
        tableData += students[i].display();
    }

    document.getElementById("studentTable").innerHTML = tableData;
}
