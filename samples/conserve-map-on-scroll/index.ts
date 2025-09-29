/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// [START maps_conserve_map_on_scroll]
function initMap(): void {
  const locationRio = { lat: 40.7128, lng: -74.006 };
  // [START maps_conserve_map_script_snippet]
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 13,
      center: locationRio,
      gestureHandling: "cooperative",
    }
  );

  // [END maps_conserve_map_script_snippet]
  new google.maps.Marker({
    position: locationRio,
    map,
    title: "Hello World!",
  });
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
// [END maps_conserve_map_on_scroll]
export {};
