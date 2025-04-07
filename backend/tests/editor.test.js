const request = require('supertest');
const app = require('../server');

describe('Editor Endpoints', () => {
  it('should get a document', async () => {
    const res = await request(app).get('/api/editor/60d21b4667d0d8992e610c85'); // sample document id
    expect(res.statusCode).toEqual(200);
  });
});
