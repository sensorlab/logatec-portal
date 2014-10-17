all: overview.html hardware.html software.html crew-project-portal-logatec.html crew-project-portal-listoftestbeds.html crew-project-vsn.html crew-project-portal-log-tec-documentation.html

%.html: %.md
	python -m markdown -x toc -f $@ $^
