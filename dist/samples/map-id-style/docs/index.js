/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_map_id_style]
function initMap() {
  new google.maps.Map(document.getElementById("map"), {
    mapId: "8e0a97af9386fef",
    center: { lat: 10.7602, lng: 106.6993 },
    zoom: 12,
  });
}

window.initMap = initMap;
// [END maps_map_id_style]
