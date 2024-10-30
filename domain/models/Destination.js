class Destination {
  constructor(argObj) {
    this.id = argObj.id;
    this.city = argObj.city;
    this.image = argObj.imgUrls;
    this.population = argObj.population;
    this.description = argObj.summary;
    this.restaurants = argObj.category[0];
    this.attractions = argObj.category[1];
  }
}

export default Destination;
