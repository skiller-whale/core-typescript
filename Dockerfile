FROM node:16-alpine3.16

RUN apk add --no-cache python3 \
  py3-pip

RUN pip install requests

RUN npm install -g typescript

RUN mkdir /session

COPY ./docker/sync /opt/skillerwhale_sync/
COPY ./docker/lib /opt/skillerwhale_sync/lib

WORKDIR /session/exercises

ENV PATH="$PATH:/opt/skillerwhale_sync"

CMD ["python3", "/opt/skillerwhale_sync/sync"]
