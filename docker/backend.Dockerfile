FROM maven:3.9.3-eclipse-temurin-17 AS build
WORKDIR /app

COPY backend/pom.xml backend/pom.xml
RUN --mount=type=cache,target=/root/.m2 mvn -f backend/pom.xml -B dependency:go-offline

COPY backend/src backend/src
RUN --mount=type=cache,target=/root/.m2 mvn -f backend/pom.xml -B clean package -DskipTests

FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=build /app/backend/target/*.jar app.jar

EXPOSE 8080
CMD ["java", "-jar", "app.jar"]