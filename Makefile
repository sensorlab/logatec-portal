all: build

build:
	pelican content

clean:
	rm -rf output

.PHONY: all build clean
