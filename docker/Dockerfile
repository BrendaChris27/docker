FROM node:18-alpine3.15

COPY . /app

WORKDIR /app

RUN npm install

ENTRYPOINT node index.js

EXPOSE 8181