VERSION=1.0
COMMIT_ID=(shell git rev-parse HEAD)
PR0JECT_NAME=gestion_des_annonces
SERVICE_NAME=Script

# Command lines defaults
ENV = dev
CMD = "make", "populate"

all:
cd ~/front
pwd # Prints ~/some_dir if cd succeeded
.PHONY: start
start:
	@echo "Vous lancez l'application en installant aussi les dependances"
	@echo "!!! cela peut durer quelques minutes..."
	npm start
	@echo "L'application est dorénavant accessible à l'adresse http://localhost:8000 !"