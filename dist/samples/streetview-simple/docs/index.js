/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_streetview_simple]
function initialize() {
  const fenway = { lat: 40.7128, lng: -74.006 };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: fenway,
    zoom: 14,
  });
  const panorama = new google.maps.StreetViewPanorama(
    document.getElementById("pano"),
    {
      position: fenway,
      pov: {
        heading: 34,
        pitch: 10,
      },
    },
  );

  map.setStreetView(panorama);
}

window.initialize = initialize;
// [END maps_streetview_simple]
