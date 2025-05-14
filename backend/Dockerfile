FROM node:22.9.0

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

ENV NODE_ENV=production
ENV STRAPI_HOST=0.0.0.0
ENV STRAPI_PORT=1337
ENV DATABASE_CLIENT=sqlite
ENV DATABASE_FILENAME=/data/data.db

EXPOSE 1337

CMD ["npm", "run", "start"]