# Observation explorer

A take-home exercise from City Detect.

## The scenario

Camera-equipped vehicles drive the streets of a city. As they go, a model
records **observations** about the condition of the properties it passes:
overgrown lots, debris, graffiti, boarded windows, damaged roofs, and so on.
Each observation has a location, a time, a category, a severity, and an image.
The same issue is often seen again on later passes.

The people who use this data work in a city's code enforcement or public works
office. They want to know where the problems are, what was seen at a given
property, and how things are changing.

`data/` holds a real parcel layer for the centre of Lebanon, Tennessee and
about 30,000 observations over roughly three months. The parcels are public data; the
observations, their timing and their images are all generated for this
exercise and do not depict any real property. [`data/DATA.md`](data/DATA.md)
describes the files. Like real field data, they are not perfectly clean.

## Getting set up

1. Click **Use this template** at the top of this page and create the repository
   in your own GitHub account. Make it **private**.
2. Clone it and read on.

## What to build

A small web app for exploring the observations: a backend that serves them
over an HTTP API, and a frontend with a map.

Beyond that, it is yours to shape. We are interested in what you decide the
app should do for the people described above, and how it feels to use. Things
you might consider: what to show at different zoom levels, how to filter, what
a single observation looks like up close, what to do with the parcels, and
what to do about the messier parts of the data.

## Notes

- **Time.** Spend as little or as much time as you have and would like to;
  just tell us roughly how long it was. A couple of focused hours is plenty
  for something we can talk about.
- **Stack.** Use what you know well. For reference, City Detect runs
  Python/FastAPI, PostGIS and H3 on the backend and React + TypeScript with
  MapLibre GL on the frontend, but anything goes. The `starter/` folder has an
  optional FastAPI + React + MapLibre skeleton if you would rather skip
  scaffolding; delete it if you go your own way.
- **Tools.** Use whatever you normally would, including AI assistants. In
  the follow-up we will explore the app together and try a few changes to
  it, so it helps to be at home in everything it contains.
- **Basemap.** [OpenFreeMap](https://openfreemap.org)
  (`https://tiles.openfreemap.org/styles/liberty`) and
  [Protomaps](https://protomaps.com) work without an API key.
- **Data.** Keep the files in `data/` as they are; anything derived from
  them is up to you.
