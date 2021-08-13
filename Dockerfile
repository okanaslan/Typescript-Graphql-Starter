# stage 1 building the code
FROM node:14 as builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 7101

CMD npm start