/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// This example creates draggable triangles on the map.
// Note also that the red triangle is geodesic, so its shape changes
// as you drag it north or south.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 1,
    center: { lat: 10.7602, lng: 106.6993 },
    mapTypeId: "terrain",
  });
  const blueCoords = [
    { lat: 40.7128, lng: -74.006 },
    { lat: 40.7128, lng: -74.006 },
    { lat: 40.7128, lng: -74.006 },
  ];
  const redCoords = [
    { lat: 40.7128, lng: -74.006 },
    { lat: 40.7128, lng: -74.006 },
    { lat: 40.7128, lng: -74.006 },
  ];

  // Construct a draggable red triangle with geodesic set to true.
  new google.maps.Polygon({
    map,
    paths: redCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    draggable: true,
    geodesic: true,
  });
  // Construct a draggable blue triangle with geodesic set to false.
  new google.maps.Polygon({
    map,
    paths: blueCoords,
    strokeColor: "#0000FF",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#0000FF",
    fillOpacity: 0.35,
    draggable: true,
    geodesic: false,
  });
}

window.initMap = initMap;
