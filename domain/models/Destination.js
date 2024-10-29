class Destination {
  /*
    #id;
    #name;
    #image;
    #description;
    #cityName;
    #resturantce;
    #culturalDes;
    */
  constructor(argObj) {
    this.id = argObj.id;
    this.city = argObj.city;
    this.image = argObj.imgUrls;
    this.description = argObj.summary;
    this.restaurants = argObj.category[0];
    this.culturalDes = argObj.category[1];
  }
}

export default Destination;
