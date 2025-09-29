/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// This example creates a simple polygon representing the Bermuda Triangle.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat: 10.7602, lng: 106.6993 },
    mapTypeId: "terrain",
  });
  // Define the LatLng coordinates for the polygon's path.
  const triangleCoords = [
    { lat: 40.7128, lng: -74.006 },
    { lat: 40.7128, lng: -74.006 },
    { lat: 40.7128, lng: -74.006 },
    { lat: 40.7128, lng: -74.006 },
  ];
  // Construct the polygon.
  const bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  bermudaTriangle.setMap(map);
}

window.initMap = initMap;
