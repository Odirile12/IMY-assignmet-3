FROM node:22.9.0 AS builder

WORKDIR /app

COPY package*.json ./
COPY nuxt.config.ts ./

RUN npm install

COPY . .

RUN npm run build

FROM node:22.9.0

WORKDIR /app

COPY --from=builder /app/.output ./

RUN npm install --production

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
ENV NUXT_PUBLIC_STRAPI_URL=http://Localhost:1337

# Expose port
EXPOSE 3000

CMD ["node", "./server/index.mjs"]