FROM node:alpine

WORKDIR /frontend
COPY ./package.json /frontend
COPY ./package-lock.json /frontend
RUN npm i
COPY ./ /frontend
ARG API_URL
ENV API_URL=${SERVICE_DOMAIN}
CMD npm start