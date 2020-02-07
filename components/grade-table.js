class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
    this.deleteGrade = null;
  }
  updateGrades(grades) {
    var tableBody = this.tableElement.querySelector("tbody");
    tableBody.textContent = "";
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
    tableDeleteButton.classList.add("btn", "btn-danger");
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

    tableBody.appendChild(tableRow);
  }
}
