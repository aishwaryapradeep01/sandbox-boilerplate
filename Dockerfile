FROM node:14.16.0-slim
RUN apt-get update && apt-get upgrade -y 
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
CMD ["npm ", "start"]