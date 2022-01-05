var studentData = [
  {name: "Noman", result: "Pass", city: "karachi", age: 22,},
    {name: "Hafeez", city: "Hydrabad", age: 20, result: "pass"},
    {name: "osama", city: "sukkur", age: 22, result: "fail"},
    {name: "noor", city: "Khairpur", age: 20, result: "pass"},
    {name: "Atique", city: "Dadu", age: 25, result: "Fail"},
    {name: "Moiz", city: "karachi", age: 24, result: "Pass" },
    { name: "hassam", city: "saudi",  age: 21, result: "pass"},
    {name: "Shayan",city: "london", age: 12, result: "Pass"},
    {name: "talha", city: "dubai", age: 25, result: "Fail"},
    {name: "Hameed", city: "london", age: 28, result: "Pass"}
  ]
  
  for (var i = 0; i < studentData.length; i++) {
    studentData[i].id = i + 1;
  }
  var finding = document.getElementById("find");

//   function searchResult() {
  
//     for (var i = 0; i < studentData.length; i++) {
//       if (ResultId == studentData[i].id) {
//         console.log(studentData[i].name);
//         console.log(studentData[i].city);
//         console.log(studentData[i].age);
//         console.log(studentData[i].result);
//         break;
//       } else {
//         console.log("Not found");
//       }
//     }
//   }
  
  for (var i = 0; i < studentData.length;i++) {
     var tabl = document.getElementById("tbl");
    tabl.innerHTML +=
      "<tr><td>" +
      studentData[i].id +
      "</td><td>" +
      studentData[i].name +
      "</td><td>" +
      studentData[i].city+
     "</td><td>" +
     studentData[i].age +
      "</td><td>" +
      studentData[i].result +
      "</td>" +
      "</tr>";
      
  }
  
  function search() {
    var user = finding.value;
    for (var i = 0; i < studentData.length; i++) {
      if (user == studentData[i].id) {
        console.log(studentData[i].name);
        
        var findid = document.getElementById("Sid");
        var findName = document.getElementById("Sname");
        var findCity = document.getElementById("Scity");
        var findAge = document.getElementById("Sage");
        var findResult = document.getElementById("Sresult");
  
        findid.innerHTML = studentData[i].id;
        findName.innerHTML = studentData[i].name;
        findCity.innerHTML = studentData[i].city;
        findAge.innerHTML = studentData[i].age;
        findResult.innerHTML = studentData[i].result;
     }
     else{
       console.log('Not Found');
     }
    }
    finding.value='';
  }
// // Write data into Object
// var students = [
//     {id : 11111, name : " NoorUllah Khan", course : "JavaScript", fees: 9000.00, status : true},
//     {id : 11111, name : " AmanUllah Khan", course : "JavaScript", fees: 9000.00, status : true},
//     {id : 11111, name : " AhsanUllah Khan", course : "JavaScript", fees: 9000.00, status : true},
//     {id : 11111, name : " Noman Khan", course : "JavaScript", fees: 9000.00, status : true},
//     {id : 11111, name : " Arsalan Khan", course : "JavaScript", fees: 9000.00, status : true},
//     {id : 11111, name : " Mansoor Khan", course : "JavaScript", fees: 9000.00, status : true},
//     {id : 11111, name : " Zahoor Khan Khan", course : "JavaScript", fees: 9000.00, status : true},
//     {id : 11111, name : " Maheen Khan", course : "JavaScript", fees: 9000.00, status : true},
//     {id : 11111, name : " Kiran Khan", course : "JavaScript", fees: 9000.00, status : true}
// ]

// var student = [{
//     name: 'noman',
//      rollNo:172,
//       batch: 2018       
// },
// {
//     name: 'noor',
//      rollNo:173,
//       batch: 2018       
// }];
// var teacher = [{
//     name: 'sajjad'
// }];
// var course = [{
//     Cname: 'javascript',
//      days: 'weekend',
//       duration: '4months',
//       teacher: teacher[0],
//       student: student[0]
// }]



// // console.log(student.name);
// //  student.name = 'hafeez';
// //  console.log(student.name);
// //  delete student.id;
// //  console.log(student.id);



//     // console.log(student.name[5]);
//     // document.write(student.name[4]);
//     // var user = prompt("Enter name for search")
//     // for(var i=0; i<student.length; i++){
//     //     console.log(student.name);
//     // }


//     // for(var ob of student){
//     //     console.log(ob);
//     // }


//     // for(var counter =0 ; counter < student.length; counter++){
//         // debugger;
//         // console.log(student[counter].name);
//         // console.log(student[counter].name);
//     // }

// // console.log(student[0]);

// // console.log(student[0].name == ' NoorUllah Khan');


// // var data = "         Pakistan Zindabad     ";

// // console.log(data.length)

// // var len = data.trim();

// // console.log(len.length);

// //console.log(typeof student);

// //Read the properties of an Object.

// // console.log('ID is : '+student.id);
// // console.log('Name is : '+student.name);
// // console.log('Course is : '+student.course);
// // console.log('Fees is : '+student.fees);
// // console.log('Status is : '+student.status);

// // console.log('ID is : '+student['id']);
// // console.log('Name is : '+student['name']);
// // console.log('Course is : '+student['course']);
// // console.log('Fees is : '+student['fees']);
// // console.log('Status is : '+student['status']);

// // student.id = 900909;
// // student.name = " Nouman Ali";


// // delete student.id;
// // delete student.name;


// // console.log('ID is : '+student['id']);
// // console.log('Name is : '+student['name']);
// // console.log('Course is : '+student['course']);
// // console.log('Fees is : '+student['fees']);
// // console.log('Status is : '+student['status']);

// // var person = {
// //     firstName: "John",
// //     lastName: "Doe",
// //     id: 5566,
// //     fullName: function() {
// //       return this.firstName + " " + this.lastName;
// //     }
// //   };
// function loop(){
// for (var i = 0; i <10 ; i++) {
//     console.log(i);
// }}
// function ser(){
// var tbl = document.getElementById('mytable');
// var row= tbl.insertRow(0);
// var cell1 = row.insertCell(0);
// var cell2 = row.insertCell(1);
// cell1.innerHTML = students[5].name;
// cell2.innerHTML = students[2].course;
// var searc;
// // searc = input.value
// // // document.write(cell1);
// // // document.write(cell2);
// // }