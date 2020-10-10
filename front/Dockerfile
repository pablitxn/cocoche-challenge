FROM node:14.13.1
WORKDIR /app
COPY package.json /app/package.json
RUN npm install -g serve
COPY . /app
RUN yarn install
RUN yarn run build
