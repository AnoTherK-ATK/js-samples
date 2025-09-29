/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */


// This example adds a marker to indicate the position of Bondi Beach in Sydney,
// Australia.
function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 4,
      center: { lat: 10.7602, lng: 106.6993 },
    }
  );

  const image =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
  const beachMarker = new google.maps.Marker({
    position: { lat: 40.7128, lng: -74.006 },
    map,
    icon: image,
  });
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;

export {};
