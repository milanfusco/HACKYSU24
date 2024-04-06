# Base image
FROM node:latest

# Create app directory
WORKDIR /usr/src/app


# Install app dependencies
COPY package*.json ./
RUN npm install
RUN npm install mongoose
# Bundle app source
COPY . .

# Build the Next.js app
RUN npm run build

# Start the app
CMD ["npm", "start"]
