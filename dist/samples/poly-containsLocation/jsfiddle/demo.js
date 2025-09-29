/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// This example requires the Geometry library. Include the libraries=geometry
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=geometry">
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 10.7602, lng: 106.6993 },
    zoom: 5,
  });
  const triangleCoords = [
    { lat: 40.7128, lng: -74.006 },
    { lat: 40.7128, lng: -74.006 },
    { lat: 40.7128, lng: -74.006 },
  ];
  const bermudaTriangle = new google.maps.Polygon({ paths: triangleCoords });

  google.maps.event.addListener(map, "click", (e) => {
    const resultColor = google.maps.geometry.poly.containsLocation(
      e.latLng,
      bermudaTriangle,
    )
      ? "blue"
      : "red";
    const resultPath = google.maps.geometry.poly.containsLocation(
      e.latLng,
      bermudaTriangle,
    )
      ? // A triangle.
        "m 0 -1 l 1 2 -2 0 z"
      : google.maps.SymbolPath.CIRCLE;

    new google.maps.Marker({
      position: e.latLng,
      map,
      icon: {
        path: resultPath,
        fillColor: resultColor,
        fillOpacity: 0.2,
        strokeColor: "white",
        strokeWeight: 0.5,
        scale: 10,
      },
    });
  });
}

window.initMap = initMap;
