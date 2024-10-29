class DestinationDrawData {
  constructor(destinationObj) {
    const mainContainer = document.querySelector("#destinationContent");
    const ele = document.createElement("div");
    ele.innerHTML = `<h3>working with the obj ${destinationObj}</h3>`;
    mainContainer.appendChild(ele);
  }
  // methods to create elements from data drawn from JSON
  createDataElement(key, val) {
    const dataElementDiv = document.createElement("div");
    const hElement = document.createElement("h3");
    const dataContent = document.createElement("div");
    hElement.textContent = `${key}`;
    dataContent.textContent = `${val}`;
    // append h3 and content to the div
    dataElementDiv.appendChild(hElement);
    dataElementDiv.appendChild(dataContent);
    // append div to main element
    mainContainer.appendChild(dataElementDiv);
  }
}

export default DestinationDrawData;
