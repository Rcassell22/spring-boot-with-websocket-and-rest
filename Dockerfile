# Use a container with JDK 11 installed
FROM tartarus.hti-sys.com:4300/ubuntu-eoan-java

USER root

# Create a deployment folder
RUN ["mkdir", "/app/"]

# Copy the application's jar to the deployment folder
COPY ./build/libs/demo-0.0.1-SNAPSHOT.jar /app/

# Run the application
ENTRYPOINT java -jar /app/demo-0.0.1-SNAPSHOT.jar
