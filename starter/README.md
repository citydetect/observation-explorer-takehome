# Optional starter

A minimal FastAPI + React/TypeScript + MapLibre skeleton. It exists so you can
skip scaffolding if this is a stack you are comfortable in. It is not a
suggestion about architecture, and you are free to delete it.

## What it does

- `backend/`: FastAPI on `:8000`. Loads both data files into memory at startup,
  serves `GET /api/health`, and has a stub for `GET /api/observations?bbox=`
  that returns 501. One passing test.
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
