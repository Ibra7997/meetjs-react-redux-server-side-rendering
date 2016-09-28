FROM node:latest

RUN npm install -g babel-cli

ENV HOME=/usr/src/app

COPY package.json $HOME/

WORKDIR $HOME/
RUN npm install

WORKDIR $HOME/server/
CMD ["npm", "start"]
