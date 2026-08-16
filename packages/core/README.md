# @danmat/waypoints-core

Privacy-first travel-log engine. Turns a Google Timeline export into
**sanitized, city-level** places and stats — home/work scrubbed, airport
layovers dropped, exact coordinates never in the output. Browser-safe and
dataset-agnostic (you inject the gazetteer + airports).

```sh
npm i @danmat/waypoints-core
```

```ts
import { aggregateTimeline, NearestCityGeocoder, AirportLayoverDetector } from '@danmat/waypoints-core';

const geocoder = new NearestCityGeocoder(cities);          // your City[] gazetteer
const layoverDetector = new AirportLayoverDetector(airports, {
  airportRadiusKm: 3,
  layoverMaxHours: 4,
});

const { places, stats } = aggregateTimeline(rawTimelineJson, { geocoder, layoverDetector });
// → places: city-level visits; stats: continents / countries / US states / distance …
```

Everything is pure and synchronous, so it runs equally well in a Web Worker in
the browser (raw data never leaves the device) or in a CI job.

Live example built on it: **[waypoints.danmat.workers.dev](https://waypoints.danmat.workers.dev)**.

MIT © DanMat
