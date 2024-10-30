class DestinationDrawData {


  constructor(destinationObj,gameCallBackFun) {

    this.destinationObj = destinationObj;

    //set the navigation to the matched game...
    document.querySelector('main button#activateGame').addEventListener("click",gameCallBackFun);
 
    // get main element as destination container

    const mainContainer = document.querySelector("#destinationContent");

    // append the other data elements
    this.createDataEl(mainContainer);

    // change game activation button text
    this.gameButtonText();
    // create page headline with city (destination) name
    this.createHeadline();
    // render images
    this.renderImages(mainContainer);
  }

  // methods to create elements from data drawn from JSON

  createDataEl(mainContainer) {
    // data keys to render on destination page
    const renderKeys = ["description", "restaurants", "attractions"];

    renderKeys.forEach((key) => {
      let val = this.destinationObj[key];

      // append value only if it's not a nested value
      if (!Array.isArray(val)) {
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
        mainContainer.appendChild(dataElementDiv);
      }
    });
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
}

export default DestinationDrawData;
