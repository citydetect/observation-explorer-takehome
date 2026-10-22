from __future__ import annotations

from contextlib import asynccontextmanager

from fastapi import FastAPI, HTTPException, Query

from . import data


@asynccontextmanager
async def lifespan(_: FastAPI):
    # Read both GeoJSON files once so the first request is not slow.
    data.observations()
    data.parcels()
    yield


app = FastAPI(title="Observation explorer API", lifespan=lifespan)


@app.get("/api/health")
def health() -> dict:
    return {
        "status": "ok",
        "observations": len(data.observations()),
        "parcels": len(data.parcels()),
    }


@app.get("/api/observations")
def list_observations(
    bbox: str = Query(..., description="west,south,east,north in WGS84 lon/lat"),
) -> dict:
    """Observations inside a map extent. Filters, limits and shape are yours to design."""
    try:
        west, south, east, north = (float(v) for v in bbox.split(","))
    except ValueError:
        raise HTTPException(status_code=422, detail="bbox must be west,south,east,north")
    raise HTTPException(status_code=501, detail="not implemented yet")
