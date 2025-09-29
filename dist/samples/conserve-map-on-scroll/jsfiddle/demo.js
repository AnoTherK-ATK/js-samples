/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function initMap() {
  const locationRio = { lat: 40.7128, lng: -74.006 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: locationRio,
    gestureHandling: "cooperative",
  });

  new google.maps.Marker({
    position: locationRio,
    map,
    title: "Hello World!",
  });
}

window.initMap = initMap;
