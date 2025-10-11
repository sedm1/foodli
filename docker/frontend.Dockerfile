FROM node:20.19.1-bullseye AS build-stage
WORKDIR /app/frontend

COPY frontend/package.json frontend/package-lock.json ./
RUN npm ci

COPY frontend . 
RUN npm run build

FROM node:20-alpine AS runtime
WORKDIR /app

COPY --from=build-stage /app/frontend/package.json .
COPY --from=build-stage /app/frontend/package-lock.json .
RUN npm ci --omit=dev

COPY --from=build-stage /app/frontend/.output .output

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]