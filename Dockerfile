FROM node:carbon-slim

RUN mkdir /front
WORKDIR /front

COPY . /front/

RUN npm install

