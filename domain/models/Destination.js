class Destination {
  constructor(argObj) {
    this.id = argObj.id;
    this.city = argObj.city;
    this.image = argObj.imgUrls;
    this.population = argObj.population;
    this.description = argObj.summary;
    // this.category = argObj.category[0];
    this.popularPlaces = argObj.popularPlaces;
  }
}

export default Destination;
