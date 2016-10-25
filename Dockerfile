FROM nodesource/xenial

ENV PORT=3000

RUN mkdir /hacksi
WORKDIR /hacksi

COPY ./ /hacksi/
RUN cd /hacksi && npm install

ENTRYPOINT cd /hacksi && node ./app.js
EXPOSE 3000
