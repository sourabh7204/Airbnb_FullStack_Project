mapboxgl.accessToken = window.mapToken;

// Parse only the coordinates string
const parsedCoordinates = JSON.parse(window.coordinates);
console.log("Parsed Coordinates:", parsedCoordinates); // For debugging

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: parsedCoordinates, // Use the parsed coordinates
  zoom: 9, // starting zoom
});

const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(parsedCoordinates) // Use the parsed coordinates for the marker
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      // Use window.listingLocation directly here
      `<h4>${window.listingLocation}</h4><p>Exact Location will be provided after booking</p>`
    )
  )
  .addTo(map);

// Add navigation control for better user experience
map.addControl(new mapboxgl.NavigationControl());
