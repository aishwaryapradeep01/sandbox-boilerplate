FROM node:14.16.0-slim
# RUN apt-get update && apt-get upgrade -y 
# ENV NODE_ENV development
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
