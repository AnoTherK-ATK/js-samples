/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_control_simple]
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: 10.7602, lng: 106.6993 },
    zoomControl: false,
    scaleControl: true,
  });
}

window.initMap = initMap;
// [END maps_control_simple]
