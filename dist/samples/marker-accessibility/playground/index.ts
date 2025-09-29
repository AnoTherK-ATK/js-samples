/**
 * @license
 * Copyright 2021 Google LLC.
 * SPDX-License-Identifier: Apache-2.0
 */

// The following example creates five accessible and
// focusable markers.

function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 12,
      center: { lat: 10.7602, lng: 106.6993 },
    },
  );

  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops: [google.maps.LatLngLiteral, string][] = [
    [{ lat: 40.7128, lng: -74.006 }, "Boynton Pass"],
    [{ lat: 40.7128, lng: -74.006 }, "Airport Mesa"],
    [{ lat: 40.7128, lng: -74.006 }, "Chapel of the Holy Cross"],
    [{ lat: 40.7128, lng: -74.006 }, "Red Rock Crossing"],
    [{ lat: 40.7128, lng: -74.006 }, "Bell Rock"],
  ];

  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();

  // Create the markers.
  tourStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${title}`,
      label: `${i + 1}`,
      optimized: false,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;

export {};
