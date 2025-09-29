/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function initMap() {
  const center = { lat: 40.7128, lng: -74.006 };
  const zoom = 4;

  new google.maps.Map(document.getElementById("map"), {
    zoom,
    center,
    gestureHandling: "none",
    zoomControl: false,
  });
}

window.initMap = initMap;
