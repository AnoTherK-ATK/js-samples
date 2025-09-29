/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */


let panorama: google.maps.StreetViewPanorama;

function initMap(): void {
  const astorPlace = { lat: 40.7128, lng: -74.006 };

  // Set up the map
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      center: astorPlace,
      zoom: 18,
      streetViewControl: false,
    }
  );

  document
    .getElementById("toggle")!
    .addEventListener("click", toggleStreetView);
  
  const cafeIcon = document.createElement("img");
  cafeIcon.src = "https://developers.google.com/maps/documentation/javascript/examples/full/images/cafe_icon.svg";

  const dollarIcon = document.createElement("img");
  dollarIcon.src = "https://developers.google.com/maps/documentation/javascript/examples/full/images/bank_icon.svg";

  const busIcon = document.createElement("img");
  busIcon.src = "https://developers.google.com/maps/documentation/javascript/examples/full/images/bus_icon.svg";


  // Set up the markers on the map
  const cafeMarker = new google.maps.Marker({
    position: { lat: 40.7128, lng: -74.006 },
    map,
    title: "Cafe",
    icon: cafeIcon.src,
  });

  const bankMarker = new google.maps.Marker({
    position: { lat: 40.7128, lng: -74.006 },
    map,
    title: "Bank",
    icon: dollarIcon.src,
  });

  const busMarker = new google.maps.Marker({
    position: { lat: 40.7128, lng: -74.006 },
    map,
    title: "Bus Stop",
    icon: busIcon.src,
  });

  // We get the map's default panorama and set up some defaults.
  // Note that we don't yet set it visible.
  panorama = map.getStreetView()!; // TODO fix type
  panorama.setPosition(astorPlace);
  panorama.setPov(
    /** @type {google.maps.StreetViewPov} */ {
      heading: 265,
      pitch: 0,
    }
  );
}

function toggleStreetView(): void {
  const toggle = panorama.getVisible();

  if (toggle == false) {
    panorama.setVisible(true);
  } else {
    panorama.setVisible(false);
  }
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;

export {};
