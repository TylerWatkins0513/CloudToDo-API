const request = require("supertest");
const app = require("../app");

//Tests for health 
describe("API Tests", () => {
    it("health returns ok", async () => {
        try {
        const response = await request(app).get("/health");
        expect(response.status).toBe(200);
        expect(response.body.status).toBe("ok");
        }
        catch(error) {
            console.log(error);
        }
    }); 

    it("Pushes new goal and dueDate to todos", async() => {
        const createTodo = await request(app)
        .post("/v1/todos")
        .send({goal:"Learning how to use Jest", dueDate: "August 2025"});
        expect(createTodo.status).toBe(201);
        

        const todoList = await request(app)
        .get("/v1/todos");
        expect(todoList.status).toBe(200);
        expect(Array.isArray(todoList.body)).toBe(true);
        console.log(todoList.body);
        expect(todoList.body.some(td => td.goal === "Learning how to use Jest")).toBe(true);
        expect(todoList.body.some(td => td.dueDate === "August 2025")).toBe(true);


    });
});