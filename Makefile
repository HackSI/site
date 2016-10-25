
build:
	docker build . -t hacksi

run:
	docker run --rm -it -p 3000:3000 hacksi

debug:
	docker run --rm -it -p 3000:3000 --entrypoint /bin/bash hacksi

all: build

.PHONY: all build run debug
