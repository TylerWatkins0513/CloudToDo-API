#Environmnet- Using node 20 base image with Alpine-Linux OS (super small linux distrubition)
FROM node:20-alpine

#Directory of the app
WORKDIR /usr/src/app

#Copy all dependecies from package-json and package-lock.json into containter
COPY package*.json ./

#RUN npm clean install and leave out anything not related to runtime dependencies (ex.jest, supertest, etc.)
RUN npm ci --omit=dev

# Copy everything else from src directory that aren't listed in the dockerignore.
COPY . .

# Default port your server listens on (Express uses process.env.PORT || 3000)
EXPOSE 3000

# Start the server 
CMD ["node", "server.js"]
