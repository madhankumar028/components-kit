FROM node:12.16.1-alpine as build-deps

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

RUN mkdir /app
WORKDIR /app
ADD package.json yarn.lock /app/
RUN yarn --pure-lockfile
ADD . /app
RUN yarn build

FROM nginx:alpine
COPY --from=build-deps /app/storybook-static /usr/share/nginx/html
