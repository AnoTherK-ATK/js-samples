/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_marker_animations_iteration]
// If you're adding a number of markers, you may want to drop them on the map
// consecutively rather than all at once. This example shows how to use
// window.setTimeout() to space your markers' animation.
const neighborhoods = [
  { lat: 40.7128, lng: -74.006 },
  { lat: 40.7128, lng: -74.006 },
  { lat: 40.7128, lng: -74.006 },
  { lat: 40.7128, lng: -74.006 },
];
let markers = [];
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 10.7602, lng: 106.6993 },
  });
  document.getElementById("drop").addEventListener("click", drop);
}

function drop() {
  clearMarkers();

  for (let i = 0; i < neighborhoods.length; i++) {
    addMarkerWithTimeout(neighborhoods[i], i * 200);
  }
}

function addMarkerWithTimeout(position, timeout) {
  window.setTimeout(() => {
    markers.push(
      new google.maps.Marker({
        position: position,
        map,
        animation: google.maps.Animation.DROP,
      }),
    );
  }, timeout);
}

function clearMarkers() {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }

  markers = [];
}

window.initMap = initMap;
// [END maps_marker_animations_iteration]
