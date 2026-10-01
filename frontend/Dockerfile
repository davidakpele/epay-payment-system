# syntax=docker/dockerfile:1

# ── Stage 1: Install dependencies ─────────────────────────────────────────
FROM node:24.11.1-alpine AS dependencies
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# ── Stage 2: Build ─────────────────────────────────────────────────────────
FROM node:24.11.1-alpine AS builder
WORKDIR /app
# Reuse the installed node_modules from the previous stage
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
# next build also runs ESLint; env vars needed at build time should be
# passed via --build-arg / ARG declarations (add NEXT_PUBLIC_* here as
# needed by the application).
RUN npm run build

# ── Stage 3: Runtime ───────────────────────────────────────────────────────
FROM node:24.11.1-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production

COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.* ./

EXPOSE 3000

CMD ["npm", "run", "start"]
