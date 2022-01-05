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
  
  for (var i = 0; i < studentData.length;i++) {
     var tabl = document.getElementById("tbl");
    tabl.innerHTML +="<tr><td>" + studentData[i].id + "</td><td>" + studentData[i].name +
      "</td><td>" + studentData[i].city+ "</td><td>" + studentData[i].age + "</td><td>" +
      studentData[i].result + "</td>" + "</tr>";
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