class DestinationDrawData {
  constructor(destinationObj) {
    const mainContainer = document.querySelector("#destinationContent");
    const ele = document.createElement("div");
    ele.innerHTML = `<h3>working with the obj ${destinationObj}</h3>`;
    mainContainer.appendChild(ele);
  }
  // methods to create elements from data drawn from JSON
  createCityNameEl() {}
  createDescriptionEl() {}
  createCulturalSitesEl() {}
  createReligiousSitesEl() {}
  createImageGalleryEl() {}
}

export default DestinationDrawData;
