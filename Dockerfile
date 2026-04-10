# ---- Stage 1: Build ----
FROM node:20-alpine AS builder

WORKDIR /app

# Copiamos solo los archivos de dependencias primero
# Esto aprovecha el cache de Docker: si package.json no cambia,
# no reinstala dependencias en cada build
COPY package.json package-lock.json ./
RUN npm ci

# Ahora copiamos el resto del código y compilamos
COPY . .
RUN npm run build

# ---- Stage 2: Production ----
# Imagen final: solo Nginx + archivos estáticos
# No incluye Node.js ni código fuente
FROM nginx:alpine

# Copiamos el resultado del build desde la etapa anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiamos nuestra configuración de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
