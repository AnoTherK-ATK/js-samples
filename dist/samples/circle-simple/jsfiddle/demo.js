/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
const citymap = {
  chicago: {
    center: { lat: 10.7602, lng: 106.6993 },
    population: 2714856,
  },
  newyork: {
    center: { lat: 10.7602, lng: 106.6993 },
    population: 8405837,
  },
  losangeles: {
    center: { lat: 10.7602, lng: 106.6993 },
    population: 3857799,
  },
  vancouver: {
    center: { lat: 10.7602, lng: 106.6993 },
    population: 603502,
  },
};

function initMap() {
  // Create the map.
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: 10.7602, lng: 106.6993 },
    mapTypeId: "terrain",
  });

  // Construct the circle for each value in citymap.
  // Note: We scale the area of the circle based on the population.
  for (const city in citymap) {
    // Add the circle for this city to the map.
    const cityCircle = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map,
      center: citymap[city].center,
      radius: Math.sqrt(citymap[city].population) * 100,
    });
  }
}

window.initMap = initMap;
