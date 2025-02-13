# Build stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Production stage
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app ./
EXPOSE 3000
CMD ["node", "server.js"]


#Multi-Stage Builds: This allows you to separate the build environment from the runtime environment.
