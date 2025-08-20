const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const todos = [{dueDate:"August 2025" , goal: "Learning CI/CD pipelines"}];

app.get("/", (req,res) => {
    res.json({endpoints: ["GET /health, GET /v1/todos, POST /v1/todos"]});
});
//Basic healt check api that sends a status of 200 and a json status of ok
app.get("/health", (req,res) => {
    res.status(200).json({status: "ok"});
});

//Basic to get todos
app.get("/v1/todos", (req,res) => {
    res.status(200).json(todos);
});

//Basic post new goal
app.post("/v1/todos", (req,res) => {
   const goal = req.body?.goal;
   const dueDate = req.body?.dueDate;

    if (!goal || typeof goal !== "string"){
        res.status(400).json({error: "string goal required in body"});
    }

    if (!dueDate || typeof dueDate !== "string"){
        res.status(400).json({error: "string goal required in body"});
    }

    todos.push({dueDate, goal});
    res.status(201).json(todos);

});

module.exports = app;