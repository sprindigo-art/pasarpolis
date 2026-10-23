FROM nginx:1.27.0-alpine
WORKDIR /app/
COPY . .
COPY ./nginx-config/default.conf /etc/nginx/conf.d/.
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
