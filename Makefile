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
