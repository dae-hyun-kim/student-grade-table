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
    var tableDeleteButton = document.createElement("i");
    var tableUpdateButton = document.createElement("i");
    tableDeleteButton.classList.add("fas", "fa-trash", "mr-4");
    tableUpdateButton.classList.add("fas", "fa-edit", "mr-4")
    tableDeleteButton.addEventListener("click", function(){
      deleteGrade(data.id);
    })
    tableDataDelete.appendChild(tableUpdateButton);
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
