FROM node:18-alpine

WORKDIR /app

COPY package*.json index.js ./

RUN npm install

EXPOSE 7860

CMD [ "node", "index.js" ]