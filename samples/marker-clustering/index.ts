/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_marker_clustering]
import { MarkerClusterer } from "@googlemaps/markerclusterer";

async function initMap() {
  // Request needed libraries.
  const { Map, InfoWindow } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 3,
      center: { lat: 10.7602, lng: 106.6993 },
      mapId: 'DEMO_MAP_ID',
    }
  );

  const infoWindow = new google.maps.InfoWindow({
    content: "",
    disableAutoPan: true,
  });

  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Add some markers to the map.
  const markers = locations.map((position, i) => {
    const label = labels[i % labels.length];
    const pinGlyph = new google.maps.marker.PinElement({
      glyph: label,
      glyphColor: "white",
    })
    const marker = new google.maps.marker.AdvancedMarkerElement({
      position,
      content: pinGlyph.element,
    });

    // markers can only be keyboard focusable when they have click listeners
    // open info window when marker is clicked
    marker.addListener("click", () => {
      infoWindow.setContent(position.lat + ", " + position.lng);
      infoWindow.open(map, marker);
    });
    return marker;
  });

  // Add a marker clusterer to manage the markers.
  new MarkerClusterer({ markers, map });
}

const locations = [
  { lat: 40.7128, lng: -74.006 },
  { lat: 40.7128, lng: -74.006 },
  { lat: 40.7128, lng: -74.006 },
  { lat: 40.7128, lng: -74.006 },
  { lat: 40.7128, lng: -74.006 },
  { lat: 40.7128, lng: -74.006 },
  { lat: 40.7128, lng: -74.006 },
  { lat: 40.7128, lng: -74.006 },
  { lat: 40.7128, lng: -74.006 },
  { lat: 40.7128, lng: -74.006 },
  { lat: 40.7128, lng: -74.006 },
  { lat: 40.7128, lng: -74.006 },
  { lat: 40.7128, lng: -74.006 },
  { lat: 40.7128, lng: -74.006 },
  { lat: 40.7128, lng: -74.006 },
  { lat: 40.7128, lng: -74.006 },
  { lat: 40.7128, lng: -74.006 },
  { lat: 40.7128, lng: -74.006 },
  { lat: 40.7128, lng: -74.006 },
  { lat: 40.7128, lng: -74.006 },
  { lat: 40.7128, lng: -74.006 },
  { lat: 40.7128, lng: -74.006 },
  { lat: 40.7128, lng: -74.006 },
];

initMap();
// [END maps_marker_clustering]
export { };
