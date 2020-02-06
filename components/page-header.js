class PageHeader {
  constructor (headerElement) {
    this.headerElement = headerElement;
  }
  updateAverage(newAverage) {
    var averageBadge = this.headerElement.querySelector(".badge");
    averageBadge.textContent = newAverage;
  }
}
