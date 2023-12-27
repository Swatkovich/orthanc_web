FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

#RUN npm i

EXPOSE 3000

CMD ["npm", "start"]
