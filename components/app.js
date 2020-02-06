class App {
  constructor() {
    this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess.bind(this);
  }
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    console.log(grades);
  }
  getGrades() {
    $.ajax({
      method: "GET",
      url: "http://sgt.lfzprototypes.com/api/grades",
      data: "none",
      headers: {"X-Access-Token":"HkFiZOPJ"},
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError,
    })
  }
  start() {
    this.getGrades();
  }
}
