# syntax=docker/dockerfile:1

# ── Stage 1: Install production dependencies ──────────────────────────────
FROM node:24.20.0-alpine3.24 AS deps
RUN apk upgrade --no-cache
WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev

# ── Stage 2: Build ────────────────────────────────────────────────────────
FROM node:24.20.0-alpine3.24 AS builder
RUN apk upgrade --no-cache
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# ── Stage 3: Runtime (standalone output only) ─────────────────────────────
FROM node:24.20.0-alpine3.24 AS runtime
RUN apk upgrade --no-cache

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# standalone output embeds the minimal node_modules it needs
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["node", "server.js"]
