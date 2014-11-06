PAGES =	cr.html \
	cr-hardware.html \
	cr-software.html \
	cr-experiments.html \
	crew-project-portal-logatec.html \
	crew-project-portal-listoftestbeds.html \
	crew-project-vsn.html \
	crew-project-portal-log-tec-documentation.html \
	aqa.html \
	caravan.html \
	pv-portal.html \
	caravan.html

all: $(PAGES)

dist: crn-crew-portal.zip

crn-crew-portal.zip: $(PAGES) img
	rm -f $@
	zip -r $@ $^

clean:
	rm -f crn-crew-portal.zip $(PAGES)

%.html: %.md
	python -m markdown -x toc -f $@ $^

.PHONY: all dist clean
