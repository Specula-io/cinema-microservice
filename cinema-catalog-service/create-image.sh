#!/usr/bin/env bash

docker rm -f cinema-catalog-service

docker rmi cinema-catalog-service

docker image prune

docker volume prune

docker build -t cinema-catalog-service .

docker tag cinema-catalog-service:latest lucaalexandru/cinema-catalog-service:latest

docker push lucaalexandru/cinema-catalog-service:latest
