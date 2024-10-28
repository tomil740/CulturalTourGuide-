class DestinationDrawData {
  constructor(destinationObj) {
    const mainContainer = document.querySelector("#destinationContent");
    const ele = document.createElement("div");
    ele.innerHTML = `<h3>working with the obj ${destinationObj}</h3>`;
    mainContainer.appendChild(ele);
  }
}

export default DestinationDrawData;
