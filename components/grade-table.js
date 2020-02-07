class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.deleteGrade = null;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades) {
    var tableBody = this.tableElement.querySelector("tbody");
    var noGrades = document.getElementById("no-grades");
    tableBody.textContent = "";
    if (grades.length === 0) {
      noGrades.classList.remove("d-none");
    } else {
      noGrades.classList.add("d-none");
    }
    for (var i = 0; i < grades.length; i++) {
      this.renderGradeRow(grades[i], this.deleteGrade);
    }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade) {
    var tableBody = this.tableElement.querySelector("tbody");
    var tableRow = document.createElement("tr");
    var tableDataName = document.createElement("td");
    var tableDataCourse = document.createElement("td");
    var tableDataGrade = document.createElement("td");
    var tableDataDelete = document.createElement("td");
    var tableDeleteButton = document.createElement("button");
    tableDeleteButton.classList.add("btn", "btn-danger", "btn-sm");
    tableDeleteButton.textContent = "DELETE"
    tableDeleteButton.addEventListener("click", function(){
      deleteGrade(data.id);
    })
    tableDataDelete.appendChild(tableDeleteButton);

    tableDataName.textContent = data.name;
    tableDataCourse.textContent = data.course;
    tableDataGrade.textContent = data.grade;

    tableRow.appendChild(tableDataName);
    tableRow.appendChild(tableDataCourse);
    tableRow.appendChild(tableDataGrade);
    tableRow.appendChild(tableDataDelete);

    tableBody.appendChild(tableRow);
  }
}
