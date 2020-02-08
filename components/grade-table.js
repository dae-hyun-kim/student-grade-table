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

    tableUpdateButton.addEventListener("click", function(){
      var addButton = document.querySelector(".add-button");
      var updateButton = document.querySelector(".update-button");
      var nameInputField = document.querySelector(".nameInput");
      var courseInputField = document.querySelector(".courseInput");
      var gradeInputField = document.querySelector(".gradeInput");
      updateButton.setAttribute("data-id", data.id);
      nameInputField.value = data.name;
      courseInputField.value = data.course;
      gradeInputField.value = data.grade;
      addButton.classList.add("d-none");
      updateButton.classList.remove("d-none");
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
