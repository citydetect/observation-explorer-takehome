.PHONY: install dev backend frontend test

install:
	cd backend && uv sync
	cd frontend && npm install

# Runs both servers in the foreground; Ctrl-C stops both.
dev:
	@trap 'kill 0' INT TERM; \
	$(MAKE) -s backend & \
	$(MAKE) -s frontend & \
	wait

backend:
	cd backend && uv run uvicorn app.main:app --reload --port 8000

frontend:
	cd frontend && npm run dev

test:
	cd backend && uv run pytest -q
	cd frontend && npm test
