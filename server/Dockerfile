# Base image
FROM node:18-alpine

# Working directory inside container
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all source code
COPY . .

# Expose port
EXPOSE 5000

# Start server
CMD ["node", "server.js"]