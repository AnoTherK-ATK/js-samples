/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } =
    await google.maps.importLibrary("marker");
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: 10.7602, lng: 106.6993 },
    mapId: "DEMO_MAP_ID",
  });

  map.addListener("click", (e) => {
    placeMarkerAndPanTo(e.latLng, map);
  });
}

function placeMarkerAndPanTo(latLng, map) {
  new google.maps.marker.AdvancedMarkerElement({
    position: latLng,
    map: map,
  });
  map.panTo(latLng);
}

initMap();
