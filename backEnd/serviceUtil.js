const fs = require('fs');
const path = require('path');

const loadData = (filename) => {
    const filepath = path.join(__dirname, '', 'jsonDataFiles', filename);
    const data = fs.readFileSync(filepath, 'utf-8');
    return JSON.parse(data);
};

const destinations= loadData('places.json');
const desGames = loadData('game.json');
const destinationsPrev = loadData('destinationsPrev.json')

const getLoadedData = (data) => {
    switch (data) {
        case "destinations":
            return destinations;
        case "desGames":
            return desGames;
        case "destinationsPrev":
            return destinationsPrev;    
    }
};
module.exports = {
    getLoadedData
}