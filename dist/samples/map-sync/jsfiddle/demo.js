/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
const map = new google.maps.Map(document.getElementById("map"), {
  center: { lat: 10.7602, lng: 106.6993 },
  zoom: 8,
});

window.map = map;
