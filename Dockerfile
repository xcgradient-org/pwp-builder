# Build stage
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

# Final stage
FROM node:18-alpine

# Install LibreOffice for PPTX to PDF conversion
RUN apk add --no-cache \
    libreoffice \
    ttf-dejavu \
    ttf-freefont \
    font-noto \
    bash \
    poppler-utils

WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .

# Set default command (e.g., to build a project)
# Usage: docker run pwp-builder node build.js <project-name>
CMD ["node", "build.js"]
