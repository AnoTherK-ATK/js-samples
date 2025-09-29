/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_polygon_hole]
// This example creates a triangular polygon with a hole in it.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat: 10.7602, lng: 106.6993 },
  });
  // Define the LatLng coordinates for the polygon's  outer path.
  const outerCoords = [
    { lat: 40.7128, lng: -74.006 },
    { lat: 40.7128, lng: -74.006 },
    { lat: 40.7128, lng: -74.006 },
  ];
  // Define the LatLng coordinates for the polygon's inner path.
  // Note that the points forming the inner path are wound in the
  // opposite direction to those in the outer path, to form the hole.
  const innerCoords = [
    { lat: 40.7128, lng: -74.006 },
    { lat: 40.7128, lng: -74.006 },
    { lat: 40.7128, lng: -74.006 },
  ];
  // Construct the polygon, including both paths.
  const bermudaTriangle = new google.maps.Polygon({
    paths: [outerCoords, innerCoords],
    strokeColor: "#FFC107",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FFC107",
    fillOpacity: 0.35,
  });

  bermudaTriangle.setMap(map);
}

window.initMap = initMap;
// [END maps_polygon_hole]
