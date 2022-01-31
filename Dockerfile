FROM node:16 as builder

WORKDIR '/usr/src/app'

COPY package.json .
COPY package-lock.json ./

RUN yarn

COPY ./ ./
RUN export NODE_OPTIONS=--openssl-legacy-provider
RUN yarn build

FROM nginx

EXPOSE 80

COPY --from=builder /usr/src/app/build /usr/share/nginx/html
