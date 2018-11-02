FROM mhart/alpine-node:8

ENV APP_NAME satprod-app

WORKDIR /var/www

COPY ./package.json /var/www/package.json
RUN npm install

COPY ./src /var/www/src
COPY ./data /var/www/data
COPY ./config/default.js /var/www/config/default.js
COPY ./package.json /var/www/package.json
COPY ./index.js /var/www/index.js

CMD ["npm", "start"]
