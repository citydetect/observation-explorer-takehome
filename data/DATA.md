# Data

Two files describe one study area: the centre of Lebanon, Tennessee, roughly
`-86.33, 36.18` to `-86.26, 36.24` (WGS84, lon/lat).

## `parcels.geojson`

8,085 land parcels. Source: the [Regrid](https://regrid.com) Wilson
County, TN public sample, clipped to the study area and reduced to the fields
below. Geometry is `Polygon` or, occasionally, `MultiPolygon`. Coordinates are
WGS84 (EPSG:4326).

| Field | Type | Meaning |
|---|---|---|
| `ll_uuid` | string | Stable parcel identifier |
| `parcelnumb` | string | County assessor parcel number |
| `address` | string | Situs address |
| `scity`, `szip5` | string | Situs city and ZIP |
| `usedesc` | string | Assessor land use class (RESIDENTIAL, COMMERCIAL, ...) |
| `lbcs_activity_desc` | string | Normalised land-use activity |
| `zoning` | string | Local zoning code |
| `yearbuilt` | int | Year the primary structure was built, if known |
| `ll_bldg_count` | int | Number of building footprints on the parcel |
| `ll_bldg_footprint_sqft` | int | Total building footprint area, sq ft |
| `usps_vacancy` | string | `Y` if USPS reports the address as vacant, `N` otherwise |
| `parcel_condition` | string | Assessor condition code (`GD` good, `AV` average, `FR` fair, `PR` poor, ...) |
| `improvval`, `landval` | int | Assessed improvement and land values, USD |
| `ll_gisacre` | float | Parcel area in acres, from the geometry |
| `lat`, `lon` | float | A representative point inside the parcel |

Many fields are null for some parcels. Treat the attributes as context, not truth.

## `observations.geojson` and `observations.csv`

30,380 street-level observations, the same records in two formats.
They were produced by a camera-equipped vehicle driving the study area in
56 sessions between 2026-07-20 and 2026-10-13. Each record is one
thing the system noticed on one pass. The same issue is usually seen again on
later passes.

| Field | Type | Meaning |
|---|---|---|
| `id` | string | Observation identifier |
| `session_id` | string | The drive session this observation came from |
| `observed_at` | string | UTC timestamp, ISO 8601 (`2026-08-12T15:04:05Z`). Local time is America/Chicago. |
| `category` | string | One of the categories below |
| `severity` | int | 1 (minor) to 5 (severe) |
| `confidence` | float | Model confidence, 0 to 1 |
| `lon`, `lat` | float | Estimated location of the observed issue (WGS84). GeoJSON geometry uses these. |
| `camera_lon`, `camera_lat` | float | Where the vehicle was when the image was captured |
| `heading_deg` | float | Direction of travel at capture, compass degrees |
| `image_url` | string | A representative image for the observation |

In the GeoJSON, records with no usable coordinates have `"geometry": null`.

### Categories

| Category | Count |
|---|---|
| `overgrown_vegetation` | 7,943 |
| `accumulated_debris` | 5,162 |
| `graffiti` | 2,251 |
| `boarded_openings` | 2,847 |
| `inoperable_vehicle` | 3,183 |
| `roof_damage` | 3,016 |
| `dumping` | 1,891 |
| `damaged_fence` | 1,999 |
| `broken_pavement` | 2,088 |

### Severity

| Severity | Count |
|---|---|
| 1 | 5,209 |
| 2 | 9,442 |
| 3 | 9,259 |
| 4 | 4,641 |
| 5 | 1,829 |

## Caveats

Only the parcel layer is real. Every observation, its timestamp, its position
and its image was generated for this exercise: the observations come from a
simulation, and the images are AI-generated scenes that depict no real place.
Nothing here is a statement about any actual property or its owner. Like
real field data, it is not perfectly clean.

## Attribution

Parcel data © Regrid, from their public county sample, used here for a
non-commercial evaluation exercise. Street geometry used in generation ©
OpenStreetMap contributors, ODbL.
