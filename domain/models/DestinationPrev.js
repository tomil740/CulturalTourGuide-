class DestinationPrev{
    #id;
    #name;
    #image;
    #description;
    constructor(idArg,nameArg,imageArg){
        this.#id = idArg;
        this.#name = nameArg;
        this.#image = imageArg;
    }

    get name(){
        return this.#name;
    }

    get id(){
        return this.#id;
    }

    get image(){
        return this.#image;
    }

    get description(){
        return this.#description;
    }
}

export default DestinationPrev;
