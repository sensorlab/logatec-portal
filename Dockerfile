FROM python:2.7-slim

ARG UNAME=builder
ARG UID=1000
ARG GID=1000

RUN : \
    && groupadd -g $GID -o $UNAME \
    && useradd -m -u $UID -g $GID -o -s /bin/bash $UNAME \
    && apt-get update -q \
    && apt-get install -q -y make python-virtualenv \
    && rm -rf /var/lib/apt/lists/* \
    && :


USER ${UID}:${GID}

WORKDIR /src
