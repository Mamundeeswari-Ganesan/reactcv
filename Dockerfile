# Stage 1
FROM node:8 as react-build
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build

# Stage 2 - the production environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/build /usr/share/nginx/html


## Install Certificate -- Start
RUN apk add netcat-openbsd bc curl wget git bash
RUN apk add libressl
RUN apk sudo
RUN git clone https://github.com/Neilpang/acme.sh.git
RUN acme.sh/acme.sh --install
RUN ./acme.sh/acme.sh --issue -d rasmivan.com -w /var/www/rasmivan.com
RUN ./acme.sh/acme.sh --installcert -d rasmivan.com \
    --keypath  /etc/nginx/rasmivan.com.key \
    --capath  /etc/nginx/rasmivan.com.ca \
    --fullchainpath  /etc/nginx/rasmivan.com.crt \
    --reloadcmd  "sudo service nginx reload"
## Install Certificate -- End

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]