class DestinationDrawData {
  constructor(destinationObj, gameCallBackFun) {
    this.destinationObj = destinationObj;

    //set the navigation to the matched game...
    document
      .querySelector("main button#activateGame")
      .addEventListener("click", gameCallBackFun);

    // get main element as destination container

    const mainContainer = document.querySelector("#destinationContent");
    // get the popular sites (landmarks) container
    const popSitesContainer = document.querySelector("#popularSites");

    // append the other data elements
    this.createDataEl(mainContainer);

    // change game activation button text
    this.gameButtonText();
    // create page headline with city (destination) name
    this.createHeadline();
    // render images
    this.renderImages(mainContainer);

    this.renderPopularSites(popSitesContainer);
  }

  // methods to create elements from data drawn from JSON

  createDataEl(mainContainer) {
    // data keys to render on destination page
    const renderKeys = ["description", "population", "attractions"];

    const infoDescriptionSection = document.createElement("section");
    infoDescriptionSection.classList.add("infoDescriptionSection");

    renderKeys.forEach((key) => {
      let val = this.destinationObj[key];

      // if the value is an array, decompose it into a string
      if (Array.isArray(val)) {
        val = val.join(", ");
      }

      const dataElementDiv = document.createElement("div");
      // set the div id to the corresponding key
      dataElementDiv.setAttribute("id", key);

      const hElement = document.createElement("h3");
      const dataContent = document.createElement("div");

      hElement.textContent = `${key}`;
      hElement.style.textTransform = "capitalize";
      dataContent.textContent = `${val}`;

      // append h3 and content to the div
      dataElementDiv.appendChild(hElement);
      dataElementDiv.appendChild(dataContent);

      // append div to main element
      infoDescriptionSection.appendChild(dataElementDiv);
    });
    mainContainer.appendChild(infoDescriptionSection);
  }

  gameButtonText() {
    // get game activation button
    const gameBtn = document.querySelector("#activateGame");
    gameBtn.textContent = `show us what you know about ${this.destinationObj["city"]}!`;
  }

  createHeadline() {
    const h1 = document.querySelector("h1#cityName");
    h1.textContent = `${this.destinationObj["city"]}`;
  }

  renderImages(mainContainer) {
    // create div element for the JSON images
    const imageDiv = document.createElement("div");
    imageDiv.setAttribute("id", "cityImages");

    this.destinationObj["image"].forEach((url) => {
      // create an img element for each image url
      const imageEl = document.createElement("img");
      imageEl.src = url;

      // append imageEl to the imageDiv
      imageDiv.appendChild(imageEl);
    });

    // append imageDiv to mainContainer
    mainContainer.appendChild(imageDiv);
  }

  renderPopularSites(popSitesContainer) {
    this.destinationObj["popularPlaces"].forEach((place) => {
      const placeDiv = document.createElement("div");
      placeDiv.classList.add("popularPlaces");

      const placeImg = document.createElement("img");
      placeImg.src = place["img"];

      const placeName = document.createElement("p");
      placeName.textContent = place["name"];

      // append placeImg and placeName to placeDiv
      placeDiv.appendChild(placeImg);
      placeDiv.appendChild(placeName);
      popSitesContainer.appendChild(placeDiv);
    });
  }
}

export default DestinationDrawData;
