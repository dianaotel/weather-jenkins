FROM node:10.13
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 8083
CMD ["node", "server.js"]