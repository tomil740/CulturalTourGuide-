let map;
let markers = [];

function initMap() {
  const israelCenter = { lat: 31.0461, lng: 34.8516 };
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
  destinations.forEach((destination) => {
    const { lat, lng } = destination.loc;

    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: map,
      title: destination.city,
    });

    markers.push(marker);
  });
}

function generateCards(destinations) {
  const container = document.getElementById('listDestinationsMenu');

  destinations.forEach((destination) => {
    const card = document.createElement('div');
    card.classList.add('destination-card');
    card.innerHTML = `
      <img src="${destination.imgUrls[0]}" alt="${destination.city}">
      <h2>${destination.city}</h2>
      <p>${destination.summary}</p>
    `;

    card.addEventListener('click', () => {
      map.panTo({ lat: destination.loc.lat, lng: destination.loc.lng });
      map.setZoom(12);
    });

    container.appendChild(card);
  });
}

window.onload = initMap;
