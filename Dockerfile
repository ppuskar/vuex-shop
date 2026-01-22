# Stage 1: Build stage
FROM node:24-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application
COPY . .

# Build the Vue app for production
RUN npm run build

# Stage 2: Runtime stage
FROM node:24-alpine

WORKDIR /app

# Install a simple HTTP server to serve the built app
RUN npm install -g serve

# Copy built app from builder stage
COPY --from=builder /app/dist ./dist

# Expose the port that the app will run on
EXPOSE 3000

# Start the application
CMD ["serve", "-s", "dist", "-l", "3000"]
