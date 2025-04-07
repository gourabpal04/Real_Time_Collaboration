const request = require('supertest');
const app = require('../server');

describe('Chat Endpoints', () => {
  it('should get chat messages', async () => {
    const res = await request(app).get('/api/chat/60d21b4667d0d8992e610c85'); // sample document id
    expect(res.statusCode).toEqual(200);
  });
});
