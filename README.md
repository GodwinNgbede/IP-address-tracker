# WEB3BRIDGE FRONTEND IP ADDRESS TRACKER TASK

"(https://geo.ipify.org/)" [IP Geolocation API by IPify] FOR IP ADDRESS LOCATION
"(https://leafletjs.com/)" [LeafletJS] TO GENERATE MAP AND ACCEES

# map = L.map("map").setView([lat, lng], zoom); whr L= global object for LeafletJS

The setView() method centers the map "lat, lng" and zooms the map to world view

#L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
maxZoom: 19,
attribution:
'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

"The [.tileLayer()] add tile i.e the small square images that makes up a map" and the [.addTo(map)] attaches the tiles to your map.
