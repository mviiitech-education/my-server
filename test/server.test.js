const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
    it('should return Hello, World!', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hello, World!');
    });
});

describe('GET /api', () => {
    it('should return JSON with message', async () => {
        const response = await request(app).get('/api');
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Hello from the API!');
    });
});
