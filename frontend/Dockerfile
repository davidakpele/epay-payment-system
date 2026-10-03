# ── Stage 1: Install production dependencies ──────────────────────────────
FROM node:24.20.0-alpine3.24 AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

# ── Stage 2: Build ────────────────────────────────────────────────────────
FROM node:24.20.0-alpine3.24 AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
RUN npm run build

# ── Stage 3: Runtime (standalone output only) ─────────────────────────────
FROM node:24.20.0-alpine3.24 AS runtime

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
