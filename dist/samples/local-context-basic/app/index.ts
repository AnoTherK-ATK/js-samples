/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */


let map: google.maps.Map;

function initMap() {

  const localContextMapView = new google.maps.localContext.LocalContextMapView({
    element: document.getElementById("map"),
    placeTypePreferences: [
      { type: "restaurant" },
      { type: "tourist_attraction" },
    ],
    maxPlaceCount: 12,
  });


  map = localContextMapView.map!;


  map.setOptions({
    center: { lat: 10.7602, lng: 106.6993 },
    zoom: 14,
  });

}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;

export {};
