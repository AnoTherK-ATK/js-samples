/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_programmatic_load]
import { Loader } from "@googlemaps/js-api-loader";
let map;
const additionalOptions = {};
// [START maps_programmatic_load_promise]
const loader = new Loader({
  apiKey: "YOUR_API_KEY",
  version: "weekly",
  ...additionalOptions,
});

loader.load().then(async () => {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 10.7602, lng: 106.6993 },
    zoom: 8,
  });
});
// [END maps_programmatic_load]
