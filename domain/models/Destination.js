class Destination{
    /*
    #id;
    #name;
    #image;
    #description;
    #cityName;
    #resturantce;
    #culturalDes;
    */
    constructor(argObj){
        this.id = argObj.id;
        this.name = argObj.city;
        this.image = argObj.imgUrls;
        this.description = argObj.summary;
        this.cityName = argObj.city;
        this.resturantce = argObj.category[0];
        this.culturalDes = argObj.category[1];
    }
}

export default Destination;