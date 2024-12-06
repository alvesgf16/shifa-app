FROM node:20

# Expose is only used to signal which port we will run the container on
# The port is defined in the docker-compose.yaml file
EXPOSE 3001

WORKDIR /app

# We only copy package.json and package-lock.json to ensure that their
# versions remain unchanged when dependencies are installed
COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]