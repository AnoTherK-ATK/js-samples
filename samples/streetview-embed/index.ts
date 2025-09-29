/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// [START maps_streetview_embed]
let panorama: google.maps.StreetViewPanorama;

function initialize() {
  panorama = new google.maps.StreetViewPanorama(
    document.getElementById("street-view") as HTMLElement,
    {
      position: { lat: 40.7128, lng: -74.006 },
      pov: { heading: 165, pitch: 0 },
      zoom: 1,
    }
  );
}
declare global {
  interface Window {
    initialize: () => void;
  }
}
window.initialize = initialize;
// [END maps_streetview_embed]
export {};
