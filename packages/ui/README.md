# @danmat/waypoints-ui

React components for a [Waypoints](https://waypoints.danmat.workers.dev) travel
log — a d3-geo world map with visit-sized dots and travel arcs, headline stat
tiles, a fun-facts band, and a sortable places table. Pairs with
[`@danmat/waypoints-core`](https://www.npmjs.com/package/@danmat/waypoints-core).

```sh
npm i @danmat/waypoints-ui react react-dom
```

```tsx
import { WorldMap, StatTiles, FunFacts, PlaceList } from '@danmat/waypoints-ui';
import '@danmat/waypoints-ui/styles.css';
import type { TravelData } from '@danmat/waypoints-core';

export function TravelLog({ data }: { data: TravelData }) {
  return (
    <>
      <StatTiles data={data} />
      <WorldMap places={data.places} />
      <FunFacts stats={data.stats} />
      <PlaceList places={data.places} />
    </>
  );
}
```

Theme-aware (light + dark via CSS variables). `react` / `react-dom` are peer
dependencies.

MIT © DanMat
