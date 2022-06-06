FROM node:16-alpine AS builder

COPY package*.json /

RUN npm set progress=false && npm config set depth 0 \
	&& npm install --no-install-recommends \
	&& mkdir /app \
	&& cp -r node_modules /app/ 
    
WORKDIR /app

COPY . .

RUN npm run build

FROM node:16-alpine

ENV TZ=Asia/Bangkok
RUN apk add tzdata \
	&& ln -snf /usr/share/zoneinfo/$TZ /etc/localtime \
	&& echo $TZ > /etc/timezone \
	&& mkdir -p /app/ssl \
	&& apk add --no-cache git
    
ARG CONTAINER_PORT
ARG PM2_FILE
ENV CONTAINER_PORT ${CONTAINER_PORT}
ENV PM2_FILE ${PM2_FILE}
WORKDIR /app/

COPY frontend.js ${PM2_FILE}  /app/
COPY --from=builder /app/build /app/build

RUN npm config set unsafe-perm true
RUN npm install -g pm2 && npm install express express-winston winston helmet

EXPOSE ${CONTAINER_PORT}

CMD pm2 start ${PM2_FILE} --no-daemon