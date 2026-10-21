"""Loads the data files from ../../data once, at startup.

This is the simplest thing that works. Replace it with whatever storage and
indexing you decide on.
"""

from __future__ import annotations

import json
from functools import lru_cache
from pathlib import Path

DATA_DIR = Path(__file__).resolve().parents[3] / "data"


@lru_cache(maxsize=1)
def observations() -> list[dict]:
    with open(DATA_DIR / "observations.geojson") as f:
        return json.load(f)["features"]


@lru_cache(maxsize=1)
def parcels() -> list[dict]:
    with open(DATA_DIR / "parcels.geojson") as f:
        return json.load(f)["features"]
