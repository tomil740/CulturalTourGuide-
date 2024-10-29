class DestinationDrawData {
  constructor(destinationObj) {
    const mockObject = `{
      "_id": "123",
      "city": "Jerusalem",
      "population": 8000000,
      "imgUrls": ["https://t4.ftcdn.net/jpg/06/01/54/75/360_F_601547536_E7ovUzbSUOCnoodB9At0wWnyzpUlgnwf.jpg"],
      "summary": "test test",
      "category": ["rests", "hotels"],
      "loc": {
        "lat": -156.6917,
        "lan": 20.93792
      }`;

    const mainContainer = document.querySelector("#destinationContent");
    const ele = document.createElement("div");
    ele.innerHTML = `<h3>working with the obj ${destinationObj}</h3>`;
    mainContainer.appendChild(ele);
  }

  // methods to create elements from data drawn from JSON
  createDataEl() {
    Object.keys(destinationObj).forEach((key) => {
      let val = destinationObj.key;
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
}

export default DestinationDrawData;
