api:
	cd backend && poetry run strawberry server src.devlog.schema && cd -

frontend:
	cd frontend && npm run serve && cd -

install-fe:
	cd frontend && npm run install && cd -

install-be:
	cd backend && poetry install && cd -

install: install-fe install-be


.PHONY: frontend api install-fe install-be install

