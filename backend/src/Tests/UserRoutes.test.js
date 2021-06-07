const request = require('supertest');
const app = require("../app");

jest.useFakeTimers();

describe("User Routes", () => {
    it("Register a User", async() => {
        const User = {
            name: "Test123",
            email: "Testing123@gmail.com",
            password: "Password123"
        }

        const res = await request(app)
            .post('/api/user/register')
            .send(User)

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty(User);
    });
})