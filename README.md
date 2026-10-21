# Observation explorer

A take-home exercise from City Detect. Thanks for spending time on it; we aim to
make it worth your while, and we keep it short.

## The scenario

Camera-equipped vehicles drive the streets of a city. As they go, a model
records **observations** about the condition of the properties it passes:
overgrown lots, debris, graffiti, boarded windows, damaged roofs, and so on.
Each observation has a location, a time, a category, a severity, and an image.
The same issue is usually seen again on later passes.

The people who use this data work in a city's code enforcement or public works
office. They want to answer questions like:

- Where are the problems concentrated right now?
- What exactly was seen at this property, and when?
- Show me every severe roof issue reported in the last month.

`data/` holds a real parcel layer for the centre of Lebanon, Tennessee and
~30,000 synthetic observations over 90 days. [`data/DATA.md`](data/DATA.md)
describes both files. Like real field data, it is not perfectly clean.

## What to build

A small web application for exploring the observations: a backend that serves
them over an HTTP API, and a frontend with a map.

### Must have

1. **An API** that returns observations for a map extent, with filters for
   category, severity and date range. Be deliberate about what happens when the
   extent contains a lot of observations.
2. **An aggregate view.** When the map is zoomed out, show where observations
   are concentrated without sending every point to the browser. Grid, hexagons,
   H3, clustering, parcels: your call, but the aggregation should happen on the
   server.
3. **A map UI** that shows aggregates when zoomed out and individual
   observations when zoomed in. Selecting an observation shows its image and
   details.
4. **A list** of the observations in the current view, in sync with the map.
   Filters apply to both.
5. **`NOTES.md`**, filled in. It matters as much as the code.

### Nice to have

Pick whichever interest you, or none. We would rather see a clean core than a
sprawling one.

- Join observations to parcels and show a per-parcel condition score.
- Filters and map position in the URL, so a view can be shared.
- Export the current view as CSV.
- Collapse repeated observations of the same issue across passes.
- A view of how activity changes over the 90-day window.
- Tests where they earn their keep.

## Ground rules

- **Time-box yourself to 4–6 hours**, then stop. Write down what you would do
  next in `NOTES.md`. Unfinished-but-clear beats finished-but-tangled.
- **Any stack.** We want you working in tools you know deeply. For reference,
  City Detect runs Python/FastAPI, PostGIS and H3 on the backend and
  React + TypeScript (React Native and Expo in production) with MapLibre GL on
  the frontend. Node, Go, Rails, Django, DuckDB, SQLite + SpatiaLite,
  in-memory spatial indexes, Leaflet, deck.gl, OpenLayers, Vue, Svelte: all
  fine. The `starter/` folder has an optional FastAPI + React + MapLibre
  skeleton if you would rather not spend time on scaffolding; delete it if you
  go your own way.
- **A real API.** The frontend should not load the data files directly.
  Beyond that, storage is up to you: a database, an in-memory index, or
  something else.
- **Any tools, including AI assistants.** Use whatever you normally would.
  During the follow-up conversation we will ask you to walk through your code
  and make a few changes to it live, so make sure you understand and can
  defend every part of it. Tell us in `NOTES.md` how you used these tools.
- **Basemap.** [OpenFreeMap](https://openfreemap.org) styles
  (`https://tiles.openfreemap.org/styles/liberty`) and
  [Protomaps](https://protomaps.com) work without an API key. Do not spend
  time on tile tokens.
- **Keep the data files as they are.** Derived artefacts (a database file, an
  index) can be built at setup time or committed; say which in your notes.

## Submitting

1. Push your work to this repository. Any branch is fine; tell us which.
2. Make sure a fresh clone can run it following the instructions in
   `NOTES.md`. We will run it.
3. Let us know you are done.

We will then set up a conversation of about an hour: a walkthrough of what you
built, questions about the choices you made, and a few small modifications we
will ask you to make with us watching. Nothing in that session needs
preparation beyond knowing your own code.

## What we pay attention to

- Spatial reasoning: coordinates, extents, distance, aggregation, and what
  happens at the edges.
- API design: shapes, limits, errors, and how the frontend consumes it.
- Frontend state and map integration: filters, selection, and sync between
  map and list without fighting the map library.
- Design and UX judgement: hierarchy, colour, legends, empty and loading
  states, how it feels to use.
- How you handle data that is not perfectly clean.
- Communication: `NOTES.md` and the quality of the conversation afterwards.

Questions before you start are welcome; reply to the email that sent you here.
