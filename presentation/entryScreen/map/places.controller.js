import repository from '../../../domain/repository.js';

window.addEventListener('load', initMap);

let map;
let markers = [];

function initMap() {
  const israelCenter = { lat: 31.7683, lng: 35.2137 };
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: israelCenter,
  });

  fetchPlacesAndAddMarkers();
}

async function fetchPlacesAndAddMarkers() {
  try {
    const response = await fetch('http://localhost:3000/places');

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const destinations = await response.json();

    addMarkers(destinations);
    generateCards(destinations);
  } catch (error) {
    console.error('Error fetching places data:', error);
  }
}

function addMarkers(destinations) {
  destinations.forEach((destination, index) => {
    const { lat, lng } = destination.loc;
    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: map,
      title: destination.city,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: createInfoWindowContent(destination, index),
    });

    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });

    marker.addListener('click', () => {
      infoWindow.open(map, marker).addEventListener('click', () => {
        repository.saveCurrentDesId(destination.id);
        window.location.href = `../destinationScreen/destination.html#destination-${destination.id}`;
      });
    });

    markers.push(marker);
  });
}

function createInfoWindowContent(destination, index) {
  const content = document.createElement('div');
  content.classList.add('info-window-content');
  content.innerHTML = `
    <img src="${destination.imgUrls[0]}" alt="${destination.city}" >
    <h3>${destination.city}</h3>
    <p>${destination.summary}</p>
    <button id="viewDetails-${index}">View Details</button>
  `;

  content.querySelector(`#viewDetails-${index}`).addEventListener('click', () => {
    window.location.href = `../destinationScreen/destination.html?id=${index}`;
  });

  return content;
}

function generateCards(destinations) {
  const container = document.getElementById('listDestinationsMenu');
  container.innerHTML = '';

  destinations.forEach((destination, index) => {
    const card = document.createElement('div');
    card.classList.add('destination-card');
    card.innerHTML = `
      <img src="${destination.imgUrls[0]}" alt="${destination.city}">
      <h2>${destination.city}</h2>
      <p>${destination.summary}</p>
    `;

    card.addEventListener('click', () => {
      repository.saveCurrentDesId(destination.id);

      handleCardClick(destination);
    });

    container.appendChild(card);
  });
}

function handleCardClick(destination) {
  map.panTo({ lat: destination.loc.lat, lng: destination.loc.lng });
  map.setZoom(12);

  window.location.href = `../destinationScreen/destination.html`;
}

document.getElementById('showMapBtn').addEventListener('click', () => {
  const mapContainer = document.getElementById('map');
  const showMapBtn = document.getElementById('showMapBtn');
  const cardsContainer = document.getElementById('listDestinationsMenu');
  const isMapVisible = mapContainer.style.display === 'block';

  if (isMapVisible) {
    mapContainer.style.display = 'none';
    cardsContainer.style.display = 'flex';
  } else {
    showMapBtn.textContent = 'Show places';
    mapContainer.style.display = 'block';
    cardsContainer.style.display = 'none';
  }
});
