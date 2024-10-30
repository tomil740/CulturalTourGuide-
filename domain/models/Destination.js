class Destination {
  constructor(argObj) {
    this.id = argObj.id;
    this.city = argObj.city;
    this.population = argObj.population;
    this.image = argObj.imgUrls;
    this.description = argObj.summary;
    this.attractions = argObj.category;
    this.popularPlaces = argObj.popularPlaces;
  }
}

export default Destination;
