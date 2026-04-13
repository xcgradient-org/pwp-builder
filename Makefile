.DEFAULT_GOAL := help

.PHONY: help build

help:
	@echo "make <name>                 Create a new project scaffold under projects/<name>"
	@echo "make PROJECT=x <name>       Create projects/<project>/<name>"
	@echo "make <project> <name>       Shorthand for namespaced creation"
	@echo "make build NAME=x           Build projects/<name>/output/<name>.pptx"
	@echo "make build NAME=a/b         Build projects/<project>/<name>/output/<name>.pptx"
	@echo "cd projects/<name> && ./update.sh  Rebuild .pptx, .pdf, and slide images"

build:
ifndef NAME
	$(error NAME is required. Usage: make build NAME=class1)
endif
	node build.js $(NAME)

%:
	@if [ "$@" = "$(firstword $(MAKECMDGOALS))" ]; then \
		if [ -n "$(PROJECT)" ]; then \
			node scripts/scaffold-project.js --project "$(PROJECT)" "$@"; \
		elif [ "$(words $(MAKECMDGOALS))" -eq 2 ]; then \
			node scripts/scaffold-project.js "$(word 1,$(MAKECMDGOALS))" "$(word 2,$(MAKECMDGOALS))"; \
		elif [ "$(words $(MAKECMDGOALS))" -eq 1 ]; then \
			node scripts/scaffold-project.js "$@"; \
		else \
			echo "Usage: make <name> | make PROJECT=<project> <name> | make <project> <name>" >&2; \
			exit 1; \
		fi; \
	fi
