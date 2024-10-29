class DestinationDrawData {

  constructor(destinationObj,gameCallBackFun) {
    this.destinationObj = destinationObj;

    //set the navigation to the matched game...
    document.querySelector('main button#activateGame').addEventListener("click",gameCallBackFun);
 
    // get main element as destination container

    const mainContainer = document.querySelector("#destinationContent");

    // initial div to make sure everything is correct
    const ele = document.createElement("div");
    ele.innerHTML = `<h3>working with the obj ${this.destinationObj["city"]}</h3>`;
    mainContainer.appendChild(ele);

    // append the other data elements
    this.createDataEl(mainContainer);

    // change game activation button text
    this.gameButtonText();
  }

  // methods to create elements from data drawn from JSON

  createDataEl(mainContainer) {
    Object.keys(this.destinationObj).forEach((key) => {
      let val = this.destinationObj[key];


      // append value only if it's not a nested value
      if (!Array.isArray(val)) {
        const dataElementDiv = document.createElement("div");
        // set the div id to the corresponding key
        dataElementDiv.setAttribute("id", key);

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
    });
  }


  gameButtonText() {
    // get game activation button
    const gameBtn = document.querySelector("#activateGame");
    gameBtn.textContent = `show us what you know about ${this.destinationObj["city"]}!`;
  }
}

export default DestinationDrawData;
