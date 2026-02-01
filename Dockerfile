# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy root package files
COPY package.json package-lock.json ./

# Copy help-center package files
COPY help-center/package.json help-center/package-lock.json ./help-center/

# Install dependencies for root (where nextra is) and help-center
# We use npm install instead of ci for the root just in case lockfile is out of sync or missing, 
# but strictly ci is better. Assuming lockfiles exist.
RUN npm ci && \
    cd help-center && \
    npm ci

# Copy the rest of the source code
COPY . .

# Build the application (Next.js export) inside help-center
WORKDIR /app/help-center
RUN npm run build

# Production stage
FROM nginx:1.24-alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy static assets from builder stage
COPY --from=builder /app/help-center/out /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
