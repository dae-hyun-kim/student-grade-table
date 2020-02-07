var header = document.querySelector("header");
var pageHeader = new PageHeader(header);
var noGradeRecorded = document.getElementById("no-grades");
var tableElement = document.querySelector("table");
var gradeTable = new GradeTable(tableElement, noGradeRecorded);
var form = document.querySelector("form");
var gradeForm = new GradeForm(form);
var app = new App(gradeTable, pageHeader, gradeForm);
app.start();
