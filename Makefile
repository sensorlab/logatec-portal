all: build

env:
	scripts/setup.sh

build: env
	scripts/build.sh

clean:
	rm -rf output

compare:
	scripts/compare.sh | view -

.PHONY: all build clean compare


build-with-docker:
	rm -rf output/* env

	docker build \
		--build-arg UID=$(shell id -u) \
		--build-arg GID=$(shell id -g) \
		-t sensorlab/pelican \
		.

	docker run \
		--rm \
		-v $(shell pwd):/src \
		--name pelican-builder \
		sensorlab/pelican \
		make all

	rm -rf env