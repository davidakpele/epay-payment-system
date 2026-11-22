FROM node:24.20.0-alpine3.24 AS deps
WORKDIR /app
COPY package.json package-lock.json* ./

RUN --mount=type=cache,target=/root/.npm \
    echo "strict-ssl=false" >> /root/.npmrc && npm install --omit=dev

FROM node:24.20.0-alpine3.24 AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN --mount=type=cache,target=/root/.npm \
    echo "strict-ssl=false" >> /root/.npmrc && npm install
COPY . .
RUN npm run build

FROM node:24.20.0-alpine3.24 AS runtime

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["node", "server.js"]
