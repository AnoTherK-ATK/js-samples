/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const map = new Map(document.getElementById("map"), {
    center: { lat: 10.7602, lng: 106.6993 },
    zoom: 14,
    mapId: "4504f8b37365c3d0",
  });
  const priceTag = document.createElement("div");

  priceTag.className = "price-tag";
  priceTag.textContent = "$2.5M";

  const marker = new AdvancedMarkerElement({
    map,
    position: { lat: 40.7128, lng: -74.006 },
    content: priceTag,
  });
}

initMap();
