class Student {
  constructor(nameOfStudent, city, fees) {
    this.nameOfStudent = nameOfStudent;
    this.city = city;
    this.fees = fees;
  };
}

let totalFees = 0;
let numberOfStudentsNameStartingWithR = 0;
let cityNameOfFourthStudent = 'nil';
let totalFeesOf3and5Student = 0;
let totalNoOfStudentsFeeBetween2000And3900 = 0;
let totalNumberOfStudentsWithFeesLessThan1000 = 0;
let nameOfStudentByS_andCityWithCh = 0;
let NameWithJorCityWithH = 0;
let minimumFees = 0;
let maximumFees = 0;
let currentStudent = -1;

var html = "<table border='1|1'>"
html += '<th style="width:10%" > No. </th>';
html += '<th style="width:30%" > Name </th>';
html += '<th style="width:30%" > City </th>';
html += '<th style="width:20%" > Fees </th>';
html += '<th style="width:10%" > Action </th>';

const myArray = [];
let i = 0;

let nameOfStudent;
let cityOfStudent;
let feesOfStudent;

document.getElementById("addButton").onclick = function () {

  nameOfStudent = document.getElementById("nameOfStudent").value;
  cityOfStudent = document.getElementById("cityOfStudent").value;
  feesOfStudent = document.getElementById("feesOfStudent").value;

  clearTextInputValues();

  if (nameOfStudent != '' && cityOfStudent != '' && feesOfStudent != '') {
    myArray.push(new Student(nameOfStudent, cityOfStudent, feesOfStudent));
  }

  i = myArray.length;

  updateVariables();
  updateStatistics();
  updateTable();
}

function clearTextInputValues() {
  document.getElementById('nameOfStudent').value = '';
  document.getElementById('cityOfStudent').value = '';
  document.getElementById('feesOfStudent').value = '';
}

function updateVariables() {

  totalFees = +totalFees + +myArray[i - 1].fees;

  if (myArray[i - 1].nameOfStudent[0] === "S" && myArray[i - 1].city.substring(0, 2) === "Ch") {
    nameOfStudentByS_andCityWithCh++;
  }

  if (myArray[i - 1].nameOfStudent[0] === "J" || myArray[i - 1].city[0] === "H") {
    NameWithJorCityWithH++;
  }
  if (myArray[i - 1].fees < 1000) {
    totalNumberOfStudentsWithFeesLessThan1000++;
  }

  if (myArray[i - 1].fees > 2000 && myArray[i - 1].fees < 3900) {
    totalNoOfStudentsFeeBetween2000And3900++;
  }

  if (myArray[i - 1].nameOfStudent[0] == "R") {
    numberOfStudentsNameStartingWithR++;
  }

  if (i == 4) {
    cityNameOfFourthStudent = myArray[3].city;
  }

  if (i == 5) {
    totalFeesOf3and5Student = +myArray[2].fees + +myArray[4].fees;
  }

  maximumFees = Math.max(maximumFees, myArray[i - 1].fees);

  if (myArray.length === 1) {
    minimumFees = myArray[0].fees;
  } else {
    minimumFees = Math.min(minimumFees, myArray[i - 1].fees);
  }
}

function updateStatistics() {
  document.getElementById('statistics1').innerHTML = "Total fees: " + totalFees;
  document.getElementById('statistics2').innerHTML = "Total number of students: " + i;
  document.getElementById('statistics3').innerHTML = "Number of students whose name starts from 'R': " + numberOfStudentsNameStartingWithR;
  document.getElementById('statistics4').innerHTML = "City name of 4th student: " + cityNameOfFourthStudent;
  document.getElementById('statistics5').innerHTML = "Total fees of 3rd and 5th student: " + totalFeesOf3and5Student;
  document.getElementById('statistics6').innerHTML = "Number of students whose fee is between $2000 and $3900: " + totalNoOfStudentsFeeBetween2000And3900;
  document.getElementById('statistics7').innerHTML = "Number of students whose fees is < $1000: " + totalNumberOfStudentsWithFeesLessThan1000;
  document.getElementById('statistics8').innerHTML = "Number of students whose name starts from 'S' AND city name starts from 'Ch':  " + nameOfStudentByS_andCityWithCh;
  document.getElementById('statistics9').innerHTML = "Number of students whose name starts from 'J' OR city name starts from 'H': " + NameWithJorCityWithH;
  document.getElementById('statistics10').innerHTML = "Minimum fees:  " + minimumFees;
  document.getElementById('statistics11').innerHTML = "Maximum fees:  " + maximumFees;
}

function updateTable() {
  html += '<tr>';
  html += '<td>' + i + '</td>';
  html += '<td>' + myArray[i - 1].nameOfStudent + '</td>';
  html += '<td>' + myArray[i - 1].city + '</td>';
  html += '<td>' + '$' + myArray[i - 1].fees + '</td>';
  html += '<td> <a >Edit</a> <a >Delete</a> </td>'
  html += '</tr>';

  document.getElementById("table").innerHTML = html;
}