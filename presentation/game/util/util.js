class GameUtil{

    constructor(){
       
    }
    toUtil(name){
        if(name == "Easy"){
            return 4;
        }else if(name == "intermediate"){
            return 8;
        }else{
            return 12;
        }
    }

    getDesNameById(desId){
        let day = "undifine";
        switch (desId) {
            case 123:
              day = "Jerusalem";
              break;
            case 124:
              day = "Tel Aviv - Jaffa";
              break;
            case 125:
              day = "Haifa";
            case 126:
              day = "Nazareth";
              break;
            case 127:
              day = "Acre";
              break;
            case 128:
              day = "Ramla";
              break;
            case 129:
              day = "Wednesday";
              break;
            case 130:
              day = "Thursday";
              break;
            case 131:
              day = "Friday";
              break;
            case  132:
              day = "Saturday";
          }
          return day;
    }




}

const util  = new GameUtil();
export default util;