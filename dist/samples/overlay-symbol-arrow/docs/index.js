/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_overlay_symbol_arrow]
// This example adds a predefined symbol (an arrow) to a polyline.
// Setting offset to 100% places the arrow at the end of the line.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: { lat: 10.7602, lng: 106.6993 },
    mapTypeId: "terrain",
  });
  // [START maps_overlay_symbol_arrow_region_polyline]
  // Define a symbol using a predefined path (an arrow)
  // supplied by the Google Maps JavaScript API.
  const lineSymbol = {
    path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
  };
  // Create the polyline and add the symbol via the 'icons' property.
  const line = new google.maps.Polyline({
    path: [
      { lat: 40.7128, lng: -74.006 },
      { lat: 40.7128, lng: -74.006 },
    ],
    icons: [
      {
        icon: lineSymbol,
        offset: "100%",
      },
    ],
    map: map,
  });
  // [END maps_overlay_symbol_arrow_region_polyline]
}

window.initMap = initMap;
// [END maps_overlay_symbol_arrow]
