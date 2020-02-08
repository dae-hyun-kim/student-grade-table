class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
    this.changeGrade = this.changeGrade.bind(this);
    this.handleChangeGradeError = this.handleChangeGradeError.bind(this);
    this.handleChangeGradeSuccess = this.handleChangeGradeSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
  }
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
    var gradeSum = 0;
    var gradeAverage = 0;
    for (var i = 0; i < grades.length; i++) {
      gradeSum += grades[i].grade;
    }
    gradeAverage = (Math.round((gradeSum / grades.length) * 10) / 10);
    this.pageHeader.updateAverage(gradeAverage);
  }
  getGrades() {
    $.ajax({
      method: "GET",
      url: "http://sgt.lfzprototypes.com/api/grades",
      headers: {"X-Access-Token":"HkFiZOPJ"},
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError,
    })
  }
  createGrade(name, course, grade){
    $.ajax({
      method: "POST",
      url: "http://sgt.lfzprototypes.com/api/grades",
      data: {
        "name": name,
        "course": course,
        "grade": grade,
      },
      headers: {"X-Access-Token": "HkFiZOPJ"},
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError,
    })
  }
  handleCreateGradeError(error) {
    console.error(error);
  }
  handleCreateGradeSuccess() {
    this.getGrades();
  }
  changeGrade(id, newName, newCourse, newGrade) {
    $.ajax({
      method: "PATCH",
      url: "http://sgt.lfzprototypes.com/api/grades/" + id,
      data: {
        "name": newName,
        "course" : newCourse,
        "grade" : newGrade,
      },
      headers: { "X-Access-Token": "HkFiZOPJ"},
      success: this.handleChangeGradeSuccess,
      error: this.handleChangeGradeError,
    })
  }
  handleChangeGradeError(error) {
    console.log(error);
  }
  handleChangeGradeSuccess(){
    this.getGrades();
  }
  deleteGrade(id) {
    $.ajax({
      method: "DELETE",
      url: "http://sgt.lfzprototypes.com/api/grades/" + id,
      headers: { "X-Access-Token": "HkFiZOPJ"},
      success: this.handleDeleteGradeSuccess,
      error: this.handleDeleteGradeError,
    })
  }
  handleDeleteGradeError(error) {
    console.error(error);
  }
  handleDeleteGradeSuccess() {
    this.getGrades();
  }
   start() {
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeForm.onNewSubmit(this.changeGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade);
  }
}
