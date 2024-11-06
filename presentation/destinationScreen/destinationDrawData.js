class DestinationDrawData {
  constructor(destinationObj, gameCallBackFun) {
    this.destinationObj = destinationObj;

    document.querySelector('main button#activateGame').addEventListener('click', gameCallBackFun);

    const mainContainer = document.querySelector('#destinationContent');
    const popSitesContainer = document.querySelector('#popularSites');

    this.createDataEl(mainContainer);

    this.gameButtonText();
    this.createHeadline();
    this.renderImages(mainContainer);

    this.renderPopularSites(popSitesContainer);
  }

  createDataEl(mainContainer) {
    const renderKeys = ['attractions', 'description', 'population'];

    const infoDescriptionSection = document.createElement('section');
    infoDescriptionSection.classList.add('infoDescriptionSection');

    renderKeys.forEach((key) => {
      let val = this.destinationObj[key];

      if (Array.isArray(val)) {
        val = val.join(' || ');
      }

      const dataElementDiv = document.createElement('div');
      dataElementDiv.setAttribute('id', key);

      const hElement = document.createElement('h3');
      const dataContent = document.createElement('div');

      hElement.textContent = `${key}`;
      hElement.style.textTransform = 'capitalize';
      dataContent.textContent = `${val}`;

      dataElementDiv.appendChild(hElement);
      dataElementDiv.appendChild(dataContent);

      infoDescriptionSection.appendChild(dataElementDiv);
    });
    mainContainer.appendChild(infoDescriptionSection);
  }

  gameButtonText() {
    const gameBtn = document.querySelector('#activateGame');
    gameBtn.textContent = `show us what you know about ${this.destinationObj['city']}!`;
  }

  createHeadline() {
    const h1 = document.querySelector('h1#cityName');
    h1.textContent = `${this.destinationObj['city']}`;
  }

  renderImages(mainContainer) {
    const imageDiv = document.createElement('div');
    imageDiv.setAttribute('id', 'cityImages');

    this.destinationObj['image'].forEach((url) => {
      const imageEl = document.createElement('img');
      imageEl.src = url;

      imageDiv.appendChild(imageEl);
    });

    mainContainer.appendChild(imageDiv);
  }

  renderPopularSites(popSitesContainer) {
    this.destinationObj['popularPlaces'].forEach((place) => {
      const placeDiv = document.createElement('div');
      placeDiv.classList.add('popularPlaces');

      const placeImg = document.createElement('img');
      placeImg.src = place['img'];

      const placeName = document.createElement('p');
      placeName.textContent = place['name'];

      placeDiv.appendChild(placeImg);
      placeDiv.appendChild(placeName);
      popSitesContainer.appendChild(placeDiv);
    });
  }
}

export default DestinationDrawData;
