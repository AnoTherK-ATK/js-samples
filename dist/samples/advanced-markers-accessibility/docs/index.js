/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_advanced_markers_accessibility]
async function initMap() {
  // Request needed libraries.
  const { Map, InfoWindow } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } =
    await google.maps.importLibrary("marker");
  const map = new Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 10.7602, lng: 106.6993 },
    mapId: "4504f8b37365c3d0",
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to move
  // between markers; press tab again to cycle through the map controls.
  const tourStops = [
    {
      position: { lat: 10.760737924711854, lng: 106.6990632037664 },
      title: "Cloud Ace",
    },
    {
      position: { lat: 10.770840521840839, lng: 106.69671558309894 },
      title: "Metro Bến Thành",
    },
    {
      position: { lat: 10.7771325388983, lng: 106.69528659660571 },
      title: "Dinh Độc Lập",
    },
    {
      position: { lat: 10.776831728326824, lng: 106.70278877569518 },
      title: "Nhà hát Thành phố",
    },
    {
      position: { lat: 10.76835877379374, lng: 106.70682055901337 },
      title: "Bến nhà Rồng",
    },
  ];
  // Create an info window to share between markers.
  const infoWindow = new InfoWindow();

  // Create the markers.
  tourStops.forEach(({ position, title }, i) => {
    const pin = new PinElement({
      glyph: `${i + 1}`,
      scale: 1.5,
    });
    // [START maps_advanced_markers_accessibility_marker]
    const marker = new AdvancedMarkerElement({
      position,
      map,
      title: `${i + 1}. ${title}`,
      content: pin.element,
      gmpClickable: true,
    });

    // [END maps_advanced_markers_accessibility_marker]
    // [START maps_advanced_markers_accessibility_event_listener]
    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", ({ domEvent, latLng }) => {
      const { target } = domEvent;

      infoWindow.close();
      infoWindow.setContent(marker.title);
      infoWindow.open(marker.map, marker);
    });
    // [END maps_advanced_markers_accessibility_event_listener]
  });
}

initMap();
// [END maps_advanced_markers_accessibility]
