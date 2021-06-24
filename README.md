# spring-boot-with-websocket-and-rest

Create back end

1. To build the backend project:
    ./gradlew build

2. Build the docker image:
    docker build -t spring-demo .

3. Run the docker container:
    docker run --name backend -p 8080:8080 spring-demo

Create front end

1. Build the docker image:
    docker build -t bookstore-app .

2. Run the container:
    docker run --name client -p 8000:80 bookstore-app

Upper half of the page demonstrates a RESTful API with Create and Retrieve endpoints, bottom half demonstrates the websocket with a messaging broker.