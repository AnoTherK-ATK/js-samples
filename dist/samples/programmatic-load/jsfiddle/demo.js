/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import { Loader } from "https://cdn.skypack.dev/@googlemaps/js-api-loader@^1.15.1";
let map;
const additionalOptions = {};
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
