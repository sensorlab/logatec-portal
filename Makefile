all: overview.html hardware.html software.html

%.html: %.md
	python -m markdown -x toc -f $@ $^
