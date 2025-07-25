// mapboxgl.accessToken = mapToken;

// const map = new mapboxgl.Map({
//   container: "map", // container ID
//   // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
//   style: "mapbox://styles/mapbox/streets-v12", // style URL
//   center: [77.209, 28.6139], // starting position [lng, lat]
//   zoom: 9, // starting zoom
// });

// console.log(coordinates);

// const marker = new mapboxgl.Marker()
//   .setLngLat(coordinates) //Listing.geometry.coordinates
//   .addTo(map);

mapboxgl.accessToken = mapToken;

// Parse the coordinates string coming from EJS into a JavaScript array
const parsedCoordinates = JSON.parse(coordinates);

// Initialize the map
const map = new mapboxgl.Map({
  container: "map", // ID of the div where the map will be rendered
  style: "mapbox://styles/mapbox/streets-v12", // Map style URL
  center: parsedCoordinates, // Set map center to the listing's coordinates
  zoom: 9, // Starting zoom level
});

// Create a new marker and set its position to the parsed coordinates
const marker = new mapboxgl.Marker({ color: "red" }) // Optional: make marker red for better visibility
  .setLngLat(parsedCoordinates) // Set marker's position to the listing's coordinates
  .addTo(map); // Add the marker to the map

// Create a popup for the marker
new mapboxgl.Popup({ offset: 25 }) // Offset the popup from the marker
  .setLngLat(parsedCoordinates) // Position the popup at the marker's coordinates
  .setHTML(`<h4>${listingTitle}</h4><p>${listingLocation}</p>`) // HTML content for the popup
  .addTo(map); // Add the popup to the map
