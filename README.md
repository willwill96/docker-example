## About
  This allows you to run a docker container as your development machine by volume mounting storage and running necessary scripts from inside the docker container

## How to run

### Locally
  - `yarn start` is all you need!

### In a docker container
  - `docker build -t ${name} .`
  - `docker run -v ${local_app_directory}:/usr/src/app -p 8080:3000 {name}`
  - open browser to localhost:8080


