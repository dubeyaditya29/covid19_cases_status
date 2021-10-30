// let students = [
//   { name: "Aditya", Subject: "Computer" },
//   { name: "Shubham", Subject: "Physics" },
//   { name: "Piyush", Subject: "Chemistry" }
// ];
// let newStudent = { name: "Apsara", Subject: "Chemistry" };
// function enrollStudent(student, callback) {
//   setTimeout(students.push(student), 20000);
//   callback();
// }

// //

// function getStudents() {
//   setTimeout(function () {
//     let newStr = `<ul>Name List</ul>`;
//     students.forEach((student) => {
//       newStr += `<ul>${student.name}</ul>`;
//       document.querySelector(".student_list").innerHTML = newStr;
//     });
//     console.log("Students fetched!");
//   }, 10000);
// }
// enrollStudent(newStudent, getStudents);

// function calculator(callback1, callback2) {
//   console.log(sum(2, 3));
//   console.log(multiply(2, 3));
// }

// function sum(a, b) {
//   return a + b;
// }
// function multiply(a, b) {
//   return a * b;
// }

// calculator(sum, multiply);
let dateAndTime = new Date();
document.getElementById("date_time").innerText = dateAndTime;

let url = "https://coronavirus-19-api.herokuapp.com/countries/India";
let promise = new Promise(function (resolve, reject) {
  fetch(url)
    .then((res) => res.json())
    .then((val) => {
      document.querySelector("#d_total_cases").innerText = val.cases;
      document.querySelector("#d_total_death").innerText = val.deaths;
      document.querySelector("#d_today_cases").innerText = val.todayCases;
      document.querySelector("#d_today_death").innerText = val.todayDeaths;
      document.querySelector("#d_active_cases").innerText = val.active;
      document.querySelector("#d_critical").innerText = val.critical;
      document.querySelector("#d_recovered").innerText = val.recovered;
      resolve();
      console.log(val);
    })
    .catch((err) => console.log(err));
});

promise
  .then(() => {
    console.log("success");
  })
  .catch(() => {
    console.log("failed");
  });
