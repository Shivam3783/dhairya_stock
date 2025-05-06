# Use the official Node.js image as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application files
COPY . ./

# Expose port 3000 for the React app to run
EXPOSE 3000

# Start the React app in development mode
CMD ["npm", "start"]


# # Step 1: Build the app
# FROM node:16 AS build
# WORKDIR /app

# COPY package.json package-lock.json ./
# RUN npm install

# COPY . .
# RUN npm run build

# # Step 2: Serve the app with a static server
# FROM node:16
# WORKDIR /app

# # Install a static file server
# RUN npm install -g serve

# # Copy built files from the previous stage
# COPY --from=build /app/dist ./dist

# # Expose the port serve will run on
# EXPOSE 3000

# # Run the static file server
# CMD ["serve", "-s", "dist", "-l", "3000"]


# # Build stage
# FROM node:18-alpine as build

# WORKDIR /app

# # Copy package files first for better caching
# COPY package.json package-lock.json* ./

# # Install dependencies
# RUN npm ci

# # Copy the rest of the application
# COPY . .

# # Fix any potential dependency issues
# RUN npm install vite-plugin-node-polyfills@latest --save-dev

# # Build the app
# RUN npm run build

# # Production stage
# FROM nginx:alpine

# # Copy built files from build stage to nginx serve directory
# COPY --from=build /app/dist /usr/share/nginx/html

# # Create a custom nginx config that handles SPA routing
# RUN echo 'server { \
#   listen 80; \
#   location / { \
#     root /usr/share/nginx/html; \
#     index index.html; \
#     try_files $uri $uri/ /index.html; \
#   } \
# }' > /etc/nginx/conf.d/default.conf

# # Copy .env file for environment variables if needed
# COPY .env /usr/share/nginx/html/.env

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
