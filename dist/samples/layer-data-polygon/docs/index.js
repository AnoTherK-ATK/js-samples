/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_layer_data_polygon]
// This example uses the Google Maps JavaScript API's Data layer
// to create a rectangular polygon with 2 holes in it.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: { lat: 10.7602, lng: 106.6993 },
  });
  // Define the LatLng coordinates for the outer path.
  const outerCoords = [
    { lat: 40.7128, lng: -74.006 }, // north west
    { lat: 40.7128, lng: -74.006 }, // south west
    { lat: 40.7128, lng: -74.006 }, // south east
    { lat: 40.7128, lng: -74.006 }, // north east
  ];
  // Define the LatLng coordinates for an inner path.
  const innerCoords1 = [
    { lat: 40.7128, lng: -74.006 },
    { lat: 40.7128, lng: -74.006 },
    { lat: 40.7128, lng: -74.006 },
    { lat: 40.7128, lng: -74.006 },
  ];
  // Define the LatLng coordinates for another inner path.
  const innerCoords2 = [
    { lat: 40.7128, lng: -74.006 },
    { lat: 40.7128, lng: -74.006 },
    { lat: 40.7128, lng: -74.006 },
    { lat: 40.7128, lng: -74.006 },
  ];

  map.data.add({
    geometry: new google.maps.Data.Polygon([
      outerCoords,
      innerCoords1,
      innerCoords2,
    ]),
  });
}

window.initMap = initMap;
// [END maps_layer_data_polygon]
