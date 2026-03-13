const request = require("supertest");
const app = require("../app");

describe("Auth Routes", () => {
  test("should register a new user successfully", async () => {
    const res = await request(app).post("/api/auth/register").send({
      name: "Test User",
      email: "testuser@example.com",
      password: "password123",
    });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("token");
  });

  test("should fail to register with existing email", async () => {
    await request(app).post("/api/auth/register").send({
      name: "User",
      email: "existing@example.com",
      password: "password123",
    });

    const res = await request(app).post("/api/auth/register").send({
      name: "User2",
      email: "existing@example.com",
      password: "password123",
    });

    expect(res.status).toBe(400);
  });

  test("should fail with missing fields", async () => {
    const res = await request(app).post("/api/auth/register").send({
      name: "Incomplete User",
    });

    expect(res.status).toBe(400);
  });

  test("should login successfully with correct credentials", async () => {
    await request(app).post("/api/auth/register").send({
      name: "Login User",
      email: "login@example.com",
      password: "password123",
    });

    const res = await request(app).post("/api/auth/login").send({
      email: "login@example.com",
      password: "password123",
    });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("token");
  });

  test("should fail login with wrong password", async () => {
    await request(app).post("/api/auth/register").send({
      name: "User",
      email: "wrongpass@example.com",
      password: "correctpassword",
    });

    const res = await request(app).post("/api/auth/login").send({
      email: "wrongpass@example.com",
      password: "wrongpassword",
    });

    expect(res.status).toBe(401);
  });
});
