from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_health_reports_data_loaded():
    r = client.get("/api/health")
    assert r.status_code == 200
    body = r.json()
    assert body["status"] == "ok"
    assert body["observations"] > 0
    assert body["parcels"] > 0


def test_observations_rejects_bad_bbox():
    r = client.get("/api/observations", params={"bbox": "not-a-bbox"})
    assert r.status_code == 422
