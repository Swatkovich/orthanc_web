Orthanc web interface

docker-compose Для сервера QNAP (Container Station):
version: '3'

services:
orthanc:
image: jodogne/orthanc-plugins
ports: - 4243:4242 - 8043:8042
volumes: - /etc/orthanc

nginx:
image: nginx:1.16.1
ports: - 8081:80 - 8444:443
volumes: - ${NGINX_DEFAULT_CONF:-../../nginx/default.conf}:/etc/nginx/conf.d/default.conf

front-service:
container_name: web
build:
context: ../../orthanc_web
dockerfile: Dockerfile
ports: - '3000:3000'

Папки orthanc_web и nginx Должны находиться в FileStation:
/DataVol1/Container/container-station-data
