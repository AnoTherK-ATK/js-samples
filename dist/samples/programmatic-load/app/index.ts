/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */


import { Loader } from "@googlemaps/js-api-loader";

let map: google.maps.Map;

const additionalOptions = {};

const loader = new Loader({
  apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY!,
  version: "weekly",
  ...additionalOptions,
});

loader.load().then(async () => {
  const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
  map = new Map(document.getElementById("map") as HTMLElement, {
    center: { lat: 10.7602, lng: 106.6993 },
    zoom: 8,
  });
});


export {};
