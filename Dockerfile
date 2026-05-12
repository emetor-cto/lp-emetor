# Build estático Next.js (output: "export" em next.config.mjs) e servir com nginx.
FROM node:24-alpine AS builder

WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:stable-alpine AS runner

COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY docker/nginx/security_headers.conf /etc/nginx/security_headers.conf
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/out /usr/share/nginx/html

RUN chown -R nginx:nginx /usr/share/nginx/html /var/log/nginx \
  && chmod -R 755 /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
