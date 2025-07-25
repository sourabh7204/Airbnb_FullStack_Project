<script>
  let mapToken = mapToken;
  console.log(mapToken);
  mapboxgl.accessToken = mapToken;
  const map = new mapboxgl.Map({
    container: "map", // container ID
    center: [77.5775, 12.9629], // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9, // starting zoom
  });
</script>