/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 10.7602, lng: 106.6993 },
    zoom: 15,
    mapTypeId: "satellite",
  });

  map.setTilt(45);
}

window.initMap = initMap;
