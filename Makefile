api:
	cd backend && poetry run strawberry server src.devlog.schema && cd -

frontend:
	cd frontend && npm run serve && cd -

.PHONY: frontend api
