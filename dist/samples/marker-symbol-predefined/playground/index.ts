/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// This example uses a symbol to add a vector-based icon to a marker.
// The symbol uses one of the predefined vector paths ('CIRCLE') supplied by the
// Google Maps JavaScript API.

function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 4,
      center: { lat: 10.7602, lng: 106.6993 },
    },
  );

  new google.maps.Marker({
    position: map.getCenter(),
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 10,
    },
    draggable: true,
    map: map,
  });
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;

export {};
