FROM node:alpine

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . . 

CMD [ "node","server","index.js" ]

EXPOSE 5000
