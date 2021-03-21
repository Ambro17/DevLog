api:
	cd backend && poetry run strawberry server src.devlog.schema && cd -

frontend:
	cd frontend && npm run start && cd -

install-fe:
	cd frontend && npm install && cd -

install-be:
	cd backend && poetry install && cd -

install: install-fe install-be

collect-posts:
	cd backend && poetry run python 


.PHONY: frontend api install-fe install-be install

