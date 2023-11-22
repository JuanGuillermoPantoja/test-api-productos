const request = require("supertest")
const  app = require("../index")

describe('GET /products', () => {
    test('should get all products', async () => {
        const response = await request(app).get("/api/products");
        expect(response.statusCode).toEqual(200);
    })

})