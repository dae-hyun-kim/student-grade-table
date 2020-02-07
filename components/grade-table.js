class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
    this.deleteGrade = null;
  }
  updateGrades(grades) {
    var tableBody = this.tableElement.querySelector("tbody");
    tableBody.textContent = "";
    for (var i = 0; i < grades.length; i++) {
      var tableRow = document.createElement("tr");
      var studentName = document.createElement("td");
      var studentCourse = document.createElement("td");
      var studentGrade = document.createElement("td");
      studentName.textContent = grades[i].name;
      studentCourse.textContent = grades[i].course;
      studentGrade.textContent = grades[i].grade;
      tableRow.appendChild(studentName);
      tableRow.appendChild(studentCourse);
      tableRow.appendChild(studentGrade);
      tableBody.appendChild(tableRow);
    }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade) {
    var tableRow = document.createElement("tr");
    var tableDataName = document.createElement("td");
    var tableDataCourse = document.createElement("td");
    var tableDataGrade = document.createElement("td");
    var tableDataDelete = document.createElement("td");
    var tableDeleteButton = document.createElement("button");
    tableDeleteButton.classList.add("btn", "btn-danger");
    tableDeleteButton.textContent = "DELETE"
    tableDeleteButton.addEventListener("click", deleteGrade(data.id))
    tableDataDelete.appendChild(tableDeleteButton);

    tableDataName.textContent = data.name;
    tableDataCourse.textContent = data.course;
    tableDataGrade.textContent = data.grade;

    tableRow.appendChild(tableDataName);
    tableRow.appendChild(tableDataCourse);
    tableRow.appendChild(tableDataGrade);

    return tableRow;
  }
}
