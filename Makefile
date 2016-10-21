all: build

build:
	pelican content

clean:
	rm -rf output

compare:
	./compare.sh | view -

.PHONY: all build clean compare
