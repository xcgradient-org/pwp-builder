.DEFAULT_GOAL := help

.PHONY: help build

help:
	@echo "make <name>        Create a new project scaffold under projects/<name>"
	@echo "make build NAME=x  Build projects/<name>/output/<name>.pptx"
	@echo "cd projects/<name> && ./update.sh  Rebuild .pptx, .pdf, and slide images"

build:
ifndef NAME
	$(error NAME is required. Usage: make build NAME=class1)
endif
	node build.js $(NAME)

%:
	@node scripts/scaffold-project.js $@
