FROM node:latest

ENV HOME=/usr/src/app

COPY package.json $HOME/client/

WORKDIR $HOME/client/
RUN npm install

CMD ["npm", "start"]
