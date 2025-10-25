# CLOUD TODO API ☁️

## Overview 📖

Cloud ToDo API is a simple Node.Js/Express based TODO app desgined to showcase a DevOps workflow. The project is containerized with Docker, deployed on Google Cloud Run, 
and continuously delivered using GitHub Actions.

## Purpose 🧠

The purpose of this project was to get familiar with a devOps style deployment on the cloud, using docker, creating my own APIs, and using test to validate the APIs are functional.

## Features 📌

* RESTful API endpoints(\GET health, \GET v1/todos/, \POST v1/todos/)
* Dockerized application (portable and consistent builds)
* CI/CD pipeline with github actions
* Automatic deployment for google cloud run
* Linting for good code quality

## Tech Stack 💻
* Backend- Node.js/Express.js 
* Cloud Provider - google cloud run
* CI/CD - github actions
* Testing - jest, Supertest
* Linting - eslint

## Get started Locally

* clone repo - ```git clone https://github.com/TylerWatkins0513/CloudToDo-API```
* Install dependencies - ```npm install```
* Run development environment - ```npm run dev``` 
* Run linter - ```npm run lint```
* Test code - ```npm test```

## Build Docker Image and Run 🐳

```
docker build -t tylerWatkins0513/rest-api .
docker run -p 3000:3000 tylerWatkins0513/rest-api
```

## HOW CI/CD WORKS

* Any push to main -> github actions workflow -> Run tests -> Build docker container -> Push Docker container to google cloud run ✅
  * If any step fails it ***will*** stop workflow
    
* Secrets and variables stored in Github Actions secrets/variables

## API ENDPOINTS

* GET /health => returns ok
* GET /v1/todos => returns current todos
* POST /v1/todos => add new todo (with JSON body { "goal": "..." })


## FUTURE UPDATES

* Rebrand from todo => job tracker
* Implement a DB for long term storage
* Implement a front-end



