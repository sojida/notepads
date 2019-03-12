/* eslint-disable no-undef */
import { app, chai, expect } from './index.test';

describe('GET ALL NOTES', () => {
  it('should respond with all notes', (done) => {
    chai.request(app)
      .get('/api/v1/notes')
      .end((err, res) => {
        const { status, data } = res.body;
        expect(status).to.equal(200);
        if (data.length) {
          expect(data[0]).to.have.property('id');
          expect(data[0]).to.have.property('note');
          expect(data[0]).to.have.property('tag');
        }
        done();
      });
  });
});
