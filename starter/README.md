# Optional starter

A minimal FastAPI + React/TypeScript + MapLibre skeleton. It exists so you can
skip scaffolding if this is a stack you are comfortable in. It is not a
suggestion about architecture, and you are free to delete it.

## What it does

- `backend/`: FastAPI on `:8000`. Reads both GeoJSON files into memory at
  startup, serves `GET /api/health`, and has a stub for
  `GET /api/observations?bbox=` that returns 501. Two passing tests.
- `frontend/`: Vite + React + TypeScript on `:5173`, proxying `/api` to the
  backend. Renders a sidebar and a MapLibre map centred on Lebanon with a
  keyless basemap. One passing test.

## Running it

Prerequisites: [uv](https://docs.astral.sh/uv/) and Node 20 or newer.

```bash
make install
make dev        # both servers; or `make backend` and `make frontend` separately
make test
```

Then open <http://localhost:5173>.

The OpenFreeMap basemap logs a few console warnings with MapLibre 6
(`highway-shield` filter types, a handful of missing sprite images, canvas
size on large retina screens). They are harmless; ignore them.
