class GradeForm {
  constructor (formElement) {
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement.addEventListener("submit", this.handleSubmit);
    this.createGrade = null;
    this.changeGrade = null;
  }
  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }

  onNewSubmit(changeGrade) {
    this.changeGrade = changeGrade;
  }
  handleSubmit(event) {
    event.preventDefault();
    var addButton = document.querySelector(".add-button");
    var updateButton = document.querySelector(".update-button");
    var dataId = updateButton.getAttribute("data-id");
    if (updateButton.getAttribute("data-id")) {
      addButton.classList.remove("d-none");
      updateButton.classList.add("d-none");
      var newFormData = new FormData(event.target);
      var newName = newFormData.get("name");
      var newCourse = newFormData.get("course");
      var newGrade = newFormData.get("grade");
      this.changeGrade(dataId, newName, newCourse, newGrade);
      updateButton.setAttribute("data-id","");
      event.target.reset();
    } else {
    var formData = new FormData(event.target);
    var name = formData.get("name");
    var course = formData.get("course");
    var grade = formData.get("grade");
    this.createGrade(name, course, grade);
    event.target.reset();
    }
  }
}
