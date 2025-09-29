/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// [START maps_control_disableUI]
function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 4,
      center: { lat: 10.7602, lng: 106.6993 },
      disableDefaultUI: true,
    }
  );
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
// [END maps_control_disableUI]
export {};
