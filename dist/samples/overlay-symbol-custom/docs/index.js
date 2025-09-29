/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_overlay_symbol_custom]
// This example adds three custom symbols to a polyline.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: { lat: 10.7602, lng: 106.6993 },
    mapTypeId: "terrain",
  });
  // [START maps_overlay_symbol_custom_region_polyline]
  // Define the custom symbols. All symbols are defined via SVG path notation.
  // They have varying stroke color, fill color, stroke weight,
  // opacity and rotation properties.
  const symbolOne = {
    path: "M -2,0 0,-2 2,0 0,2 z",
    strokeColor: "#F00",
    fillColor: "#F00",
    fillOpacity: 1,
  };
  const symbolTwo = {
    path: "M -1,0 A 1,1 0 0 0 -3,0 1,1 0 0 0 -1,0M 1,0 A 1,1 0 0 0 3,0 1,1 0 0 0 1,0M -3,3 Q 0,5 3,3",
    strokeColor: "#00F",
    rotation: 45,
  };
  const symbolThree = {
    path: "M -2,-2 2,2 M 2,-2 -2,2",
    strokeColor: "#292",
    strokeWeight: 4,
  };
  // Create the polyline and add the symbols via the 'icons' property.
  const line = new google.maps.Polyline({
    path: [
      { lat: 40.7128, lng: -74.006 },
      { lat: 40.7128, lng: -74.006 },
    ],
    icons: [
      {
        icon: symbolOne,
        offset: "0%",
      },
      {
        icon: symbolTwo,
        offset: "50%",
      },
      {
        icon: symbolThree,
        offset: "100%",
      },
    ],
    map: map,
  });
  // [END maps_overlay_symbol_custom_region_polyline]
}

window.initMap = initMap;
// [END maps_overlay_symbol_custom]
